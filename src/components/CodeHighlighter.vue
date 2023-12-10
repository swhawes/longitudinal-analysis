<!-- CodeHighlighter.vue -->

<template>
  <pre v-html="highlightedCode"></pre>

  testxz testxx Testxr

</template>

<script>
import { ref, onMounted } from 'vue';
import { getHighlighter } from 'shiki';

export default {
  name: 'CodeHighlighter',  // Component name
  props: {
    code: String,
    language: String
  },
  setup(props) {
    const highlightedCode = ref('');

    onMounted(async () => {
      const highlighter = await getHighlighter({ theme: 'nord' });
      highlightedCode.value = highlighter.codeToHtml(props.code, { lang: props.language });
    });

    return { highlightedCode };
  }
};
</script>

