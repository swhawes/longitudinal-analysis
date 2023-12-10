<template>

<p class="text-sky-400">The quick brown fox...</p>

    <div> test1 </div>
    <div>
      <!-- Using the CodeHighlighter component -->
      <CodeHighlighter language="js" code="console.log('Hello, world!');" />
    </div>
    <div> test2 </div>
    
  </template>
  
  <script>
  import CodeHighlighter from '@/components/CodeHighlighter.vue';
  
  export default {
    components: {
      CodeHighlighter
    }
  };
  </script>
  