<template>
    <div>
      <h1>Lowlight Test</h1>
      <pre v-html="highlightedCode"></pre>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  //import lowlight from 'lowlight';
  import { createLowlight } from 'lowlight';

// Use createLowlight in your component logic

  
  export default {
    setup() {
      const highlightedCode = ref('');
  
      onMounted(() => {
        const codeString = `function helloWorld() { console.log('Hello, world!'); }`;
        highlightedCode.value = lowlight.highlight('javascript', codeString).value;
      });
  
      return {
        highlightedCode,
      };
    },
  };
  </script>
  