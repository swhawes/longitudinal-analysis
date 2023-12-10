<template>
    <div class="NotFound">
      <h1>RCS</h1>
    </div>
  </template>

<!-- <script setup>
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);

// On mounted, highlight allaimport { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from './router'
import 'highlight.js/styles/tokyo-night-dark.css';

const app = createApp(App).use(router)
app.mount('#app')
import { onMounted } from 'vue';
onMounted(() => {
  document.querySelectorAll('pre code').forEach((el) => {
    hljs.highlightElement(el);
  });
});
</script>

<template>
  Test1
  <pre><code class="javascript">const a = 10;</code></pre>
  Test2
</template> -->


<!-- <template>

Test7

<div class="traditionallinearmodels">
    <div class="bg-white px-6 py-32 lg:px-8">
      <div class="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <p class="text-base font-semibold leading-7 text-indigo-600">Introducing</p>
        <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Residualized Change Scores: Mulitple Regression Model</h1>

        <hljsVuePlugin language="r" code="your R code here"></hljsVuePlugin>

        <hljs-vue-plugin.component :code="yourCode" language="javascript"></hljs-vue-plugin.component>

        <p class="mt-6 text-xl leading-8">This example assesses whether height, measured at the 1-Year follow-up (T1) in a subsample of ABCD participants, is predicted by weight and height measured at baseline (T0). A visual inspection is further conducted via a scatterplot to graphically represent the relationship between height at Year_1 and weight at baseline, controlling for height at baseline. The ensuing analysis and interpretations are detailed in the subsequent sections.</p>
       
        <p class="mt-6 text-xl leading-8"> 
            <hljsVuePlugin.component language="r" code="R code"></hljsVuePlugin.component>
            <hljsVuePlugin.component language="r" code="# Load Libraries"></hljsVuePlugin.component>
            <hljsVuePlugin.component language="r" 
            code="
            library(tidyverse)
            library(easystats)
            library(gtsummary)
            library(report)
            library(broom)
            library(gridExtra)
            ">
        </hljsVuePlugin.component>
        </p>
        </div>
        </div>
        </div>

Test1
  <pre><code class="javascript">const a = 10;</code></pre>
  Test2

Test2

</template>

<script setup>
import { CheckCircleIcon, InformationCircleIcon } from '@heroicons/vue/20/solid';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);

// On mounted, highlight all
import { onMounted } from 'vue';
onMounted(() => {
  document.querySelectorAll('pre code').forEach((el) => {
    hljs.highlightElement(el);
  });
});
</script> -->

<!-- 
<div class="traditionallinearmodels">
    <div class="bg-white px-6 py-32 lg:px-8">
      <div class="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <p class="text-base font-semibold leading-7 text-indigo-600">Introducing</p>
        <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Residualized Change Scores: Mulitple Regression Model</h1>

        <hljsVuePlugin language="r" code="your R code here"></hljsVuePlugin>

        <hljs-vue-plugin.component :code="yourCode" language="javascript"></hljs-vue-plugin.component>

        <p class="mt-6 text-xl leading-8">This example assesses whether height, measured at the 1-Year follow-up (T1) in a subsample of ABCD participants, is predicted by weight and height measured at baseline (T0). A visual inspection is further conducted via a scatterplot to graphically represent the relationship between height at Year_1 and weight at baseline, controlling for height at baseline. The ensuing analysis and interpretations are detailed in the subsequent sections.</p>
       
        <p class="mt-6 text-xl leading-8"> 
            <hljsVuePlugin.component language="r" code="R code"></hljsVuePlugin.component>
            <hljsVuePlugin.component language="r" code="# Load Libraries"></hljsVuePlugin.component>
            <hljsVuePlugin.component language="r" 
            code="
            library(tidyverse)
            library(easystats)
            library(gtsummary)
            library(report)
            library(broom)
            library(gridExtra)
            ">
        </hljsVuePlugin.component>
        </p>

        <div>test</div>

        <p class="mt-6 text-xl leading-8"> 
            <hljsVuePlugin.component language="r" code="R code"></hljsVuePlugin.component>
            <hljsVuePlugin.component language="r" 
            code="
            packages_required >- c('tidyverse','easystats','lme4','gtsummary','report','broom','gridExtra')
            
            packages_to_install >- setdiff(packages_required, rownames(installed.packages()))
            
            if (length(packages_to_install) > 0) {install.packages(packages_to_install)
            }
            
            lapply(packages_required, library, character.only = TRUE)
            
            <p class='mt-6 text-xl leading-8'> 
            <hljsVuePlugin.component language='r' 
            code='
            library(tidyverse)
            library(easystats)
            library(gtsummary)
            library(report)
            library(broom)
            library(gridExtra)'></hljsVuePlugin.component>
        </p>
            
            knitr::opts_chunk$set(echo = T, message=F, warning=F, error=F, 
            comment=NA, cache=T, code_folding=T,
            R.options=list(width=220, digits = 3),
            fig.align='center', 
            out.width='75%', fig.asp=.75)
            
            data_path_1 >- '/Users/shawes/ABCD/data/rds/abcd_5.0_rds/demo5.0.rds'
            data_path_2 >- '/Users/shawes/ABCD/data/rds/abcd_5.0_rds/core-rds-5.0/non-imaging_excluding_nt_5.0.rds'
            
            data_demographics >- readRDS(data_path_1)
            data_nonimaging >- readRDS(data_path_2)
            
            selected_vars >- c('src_subject_id', 'eventname', 'nihtbx_totalcomp_fc', 'anthroweightcalc', 'anthroheightcalc'
            subset_data >- data_nonimaging[, selected_vars]
            
            merged_data >- data_demographics %>%
            full_join(subset_data, by = c('src_subject_id', 'eventname'))
            
            str(merged_data)
            
            eventnames_to_include >- c('baseline_year_1_arm_1',
                           '1_year_follow_up_y_arm_1',
                           '2_year_follow_up_y_arm_1',
                           '3_year_follow_up_y_arm_1',
                           '4_year_follow_up_y_arm_1')
            
                           df >- merged_data %>%
                           filter(eventname %in% eventnames_to_include) %>%
                           mutate(src_subject_id = as.factor(src_subject_id),
                           eventname = factor(eventname, levels = eventnames_to_include, ordered = TRUE),
                           age = as.numeric(age), sex = as.factor(sex),
                           race.4level = as.factor(race.4level),
                           hisp = as.factor(hisp),
                           high.educ.bl = as.factor(high.educ.bl),
                           household.income.bl = as.factor(household.income.bl), acs_raked_propensity_score = as.numeric(acs_raked_propensity_score), rel_family_id.bl = as.factor(rel_family_id.bl), site_id_l = as.factor(site_id_l), nihtbx_totalcomp_fc = as.numeric(nihtbx_totalcomp_fc), anthroweightcalc = as.numeric(anthroweightcalc), anthroheightcalc = as.numeric(anthroheightcalc)) %>%
                           filter(!is.na(eventname))
            descriptives_table >- df %>%
            select(eventname, sex, race.4level, hisp, anthroweightcalc) %>%
            mutate(eventname = factor(eventname, labels = c('Baseline',
            'Year 1','Year 2','Year 3','Year 4'))) %>%
            mutate(sex = factor(sex, labels = c('Female', 'Male'))) %>%
            tbl_summary(by = eventname, missing = 'no', label = list(sex ~ 'Sex', race.4level ~ 'Race', hisp ~ 'Hispanic', anthroweightcalc ~ 'Weight'),
            statistic = list(all_continuous() ~ '{mean} ({sd}) )'all_categorical() ~ '{p}%''),
            ) %>%
            modify_header(all_stat_cols() ~ '**{level}**<br>N = {n}') %>%
            bold_labels() %>%
            italicize_levels() %>%
            modify_spanning_header(all_stat_cols() ~ '**Assessment Wave**')theme_gtsummary_compact()
            
            //#testing comments

            descriptives_table
            
            compute_difference_and_summary >- function(df, variable_name) { baseline_event >- 'baseline_year_1_arm_1'
            followup_event >- '1_year_follow_up_y_arm_1'
            
            diff_data >- df %>%
            filter(eventname %in% c(baseline_event, followup_event)) %>%
            select(src_subject_id, eventname, all_of(variable_name)) %>%
            spread(eventname, variable_name) %>%
            mutate(diff = get(followup_event) - get(baseline_event)) %>%
            
            diff_summary >- summary(diff_data$diff)
            
            list(data = diff_data, summary = diff_summary)
        }
        
        variables_of_interest >- c('anthroheightcalc')
        
        difference_and_summary_list >- lapply(variables_of_interest, function(var) {
            compute_difference_and_summary(df, var)
        })
        
        height_diff_data >- difference_and_summary_list[[1]]$data
        
        df >- left_join(df, height_diff_data %>% select(src_subject_id, diff), by = 'src_subject_id')
        
        lapply(difference_and_summary_list, function(item) {
            print(item$summary)
        })
        
        summary >- df %>%
        group_by(eventname) %>%
        get_summary_stats(anthroheightcalc, type = 'mean_sd')
        
        data.frame(summary)
        
        merged_data >- height_diff_data %>%
        left_join(df %>% select(src_subject_id, sex), by = 'src_subject_id')
        
        merged_data$sex >- as.factor(merged_data$sex)
        
        model >- lm(diff ~ sex, data = merged_data)
        
        model_summary >- summary(model)
        
        model_summary
        
        library(dplyr)
        library(ggplot2)
        library(RColorBrewer)
        
        merged_data >- height_diff_data %>%
        left_join(df %>% select(src_subject_id, sex), by = 'src_subject_id'
        
        ggplot(merged_data, aes(x = sex, y = diff, fill = sex)) + geom_violin() + geom_jitter(position = position_jitter(width = 0.2), size = 1, alpha = 0.5) + scale_fill_brewer(palette = 'Set2') + labs(title = 'Difference Scores by Sex',
        x = 'Sex',
        y = 'Difference Score') +
        theme_minimal() + 
        theme(
            axis.text.x = element_text(angle = 45, hjust = 1),
            legend.position = 'none'
            )
            ">
        </hljsVuePlugin.component>
        </p>
        </div>
        </div>
        </div>

  <div class="my-container-class">
    <CheckCircleIcon class="h-5 w-5 text-green-500" />
    <InformationCircleIcon class="h-5 w-5 text-blue-500" />
    <hljsVuePlugin.component language="r" code="your code here"></hljsVuePlugin.component>

    <hljsVuePlugin.component language="r" 
    code="
    library(tidyverse)
    library(easystats)
    library(gtsummary)
    library(report)
    library(broom)
    library(gridExtra)
    "></hljsVuePlugin.component>
  </div>

</template> -->

<!-- <script setup>
import { CheckCircleIcon, InformationCircleIcon } from '@heroicons/vue/20/solid';
import 'highlight.js/lib/common';
import hljsVuePlugin from "@highlightjs/vue-plugin";
</script> -->




