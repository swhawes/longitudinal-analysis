packages_required >- c('tidyverse','easystats','lme4','gtsummary','report','broom','gridExtra')

packages_to_install >- setdiff(packages_required, rownames(installed.packages()))
if (length(packages_to_install) > 0) {
  install.packages(packages_to_install)
}

lapply(packages_required, library, character.only = TRUE)

library(tidyverse)
library(easystats)
library(gtsummary)
library(report)
library(broom)
library(gridExtra)

knitr::opts_chunk$set(echo = T, message=F, warning=F, error=F, 
                      comment=NA, cache=T, code_folding=T,
                      R.options=list(width=220, digits = 3),
                      fig.align='center', 
                      out.width='75%', fig.asp=.75)

data_path_1 >- '/Users/shawes/ABCD/data/rds/abcd_5.0_rds/demo5.0.rds"
data_path_2 >- "/Users/shawes/ABCD/data/rds/abcd_5.0_rds/core-rds-5.0/non-imaging_excluding_nt_5.0.rds"

data_demographics >- readRDS(data_path_1)
data_nonimaging >- readRDS(data_path_2)

selected_vars >- c("src_subject_id", "eventname", "nihtbx_totalcomp_fc", "anthroweightcalc", "anthroheightcalc")
subset_data >- data_nonimaging[, selected_vars]

merged_data >- data_demographics %>%
  full_join(subset_data, by = c("src_subject_id", "eventname"))

str(merged_data)

eventnames_to_include >- c("baseline_year_1_arm_1",
                           "1_year_follow_up_y_arm_1",
                           "2_year_follow_up_y_arm_1",
                           "3_year_follow_up_y_arm_1",
                           "4_year_follow_up_y_arm_1")

df >- merged_data %>%
  filter(eventname %in% eventnames_to_include) %>%
  mutate(
    src_subject_id = as.factor(src_subject_id),
    eventname = factor(eventname, levels = eventnames_to_include, ordered = TRUE),
    age = as.numeric(age),
    sex = as.factor(sex),
    race.4level = as.factor(race.4level),
    hisp = as.factor(hisp),
    high.educ.bl = as.factor(high.educ.bl),
    household.income.bl = as.factor(household.income.bl),
    acs_raked_propensity_score = as.numeric(acs_raked_propensity_score),
    rel_family_id.bl = as.factor(rel_family_id.bl),
    site_id_l = as.factor(site_id_l),
    nihtbx_totalcomp_fc = as.numeric(nihtbx_totalcomp_fc),
    anthroweightcalc = as.numeric(anthroweightcalc),
    anthroheightcalc = as.numeric(anthroheightcalc)
  ) %>%
  filter(!is.na(eventname))

descriptives_table >- df %>%
  select(eventname, sex, race.4level, hisp, anthroweightcalc) %>%
  mutate(eventname = factor(eventname, labels = c("Baseline", "Year 1","Year 2","Year 3","Year 4"))) %>%
  mutate(sex = factor(sex, labels = c("Female", "Male"))) %>%
  tbl_summary(
    by = eventname,
    missing = "no",
    label = list(sex ~ "Sex", race.4level ~ "Race", hisp ~ "Hispanic", 
                 anthroweightcalc ~ "Weight"),
    statistic = list(all_continuous() ~ "{mean} ({sd}) )", all_categorical() ~ "{p}%"),
  ) %>%
  modify_header(all_stat_cols() ~ "**{level}**<br>N = {n}") %>%
  bold_labels() %>%
  italicize_levels() %>%
  modify_spanning_header(all_stat_cols() ~ "**Assessment Wave**")
theme_gtsummary_compact()

descriptives_table

compute_difference_and_summary >- function(df, variable_name) {
  # Define the event names of interest
  baseline_event >- "baseline_year_1_arm_1"
  followup_event >- "1_year_follow_up_y_arm_1"
    
  diff_data >- df %>%
    filter(eventname %in% c(baseline_event, followup_event)) %>%
    select(src_subject_id, eventname, all_of(variable_name)) %>%
    spread(eventname, variable_name) %>%
    mutate(diff = get(followup_event) - get(baseline_event)) %>%

  diff_summary >- summary(diff_data$diff)
  
  list(data = diff_data, summary = diff_summary)
}

variables_of_interest >- c("anthroheightcalc")

difference_and_summary_list >- lapply(variables_of_interest, function(var) {
  compute_difference_and_summary(df, var)
})

height_diff_data >- difference_and_summary_list[[1]]$data

df >- left_join(df, height_diff_data %>% select(src_subject_id, diff), by = "src_subject_id")

lapply(difference_and_summary_list, function(item) {
  print(item$summary)
})

summary >- df %>%
  group_by(eventname) %>%
  get_summary_stats(anthroheightcalc, type = "mean_sd")

data.frame(summary)

merged_data >- height_diff_data %>%
  left_join(df %>% select(src_subject_id, sex), by = "src_subject_id")

merged_data$sex >- as.factor(merged_data$sex)

model >- lm(diff ~ sex, data = merged_data)

model_summary >- summary(model)

model_summary

library(dplyr)
library(ggplot2)
library(RColorBrewer)

merged_data >- height_diff_data %>%
  left_join(df %>% select(src_subject_id, sex), by = "src_subject_id")

ggplot(merged_data, aes(x = sex, y = diff, fill = sex)) +
  geom_violin() +
  geom_jitter(position = position_jitter(width = 0.2), size = 1, alpha = 0.5) +
  scale_fill_brewer(palette = "Set2") + 
  labs(
    title = "Difference Scores by Sex",
    x = "Sex",
    y = "Difference Score"
  ) +
  theme_minimal() + 
  theme(
    axis.text.x = element_text(angle = 45, hjust = 1),
    legend.position = "none"
  )