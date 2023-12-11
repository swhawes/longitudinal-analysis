<template>
  <div ref="editor"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { EditorView, basicSetup } from 'codemirror';
import { EditorState } from '@codemirror/state';
import { python } from '@codemirror/lang-python';

const editor = ref(null);

onMounted(() => {
  new EditorView({
    state: EditorState.create({
      doc: '', // Initial content of the editor
      extensions: [basicSetup, python()]
    }),
    parent: editor.value
  });
});
</script>

<style>
/* Ensure the editor has a size */
.codemirror-container {
  height: 300px;
  border: 1px solid #ccc;
}
</style>
