<template>
  <div v-if="editor">
    <button @click="editor.chain().focus().toggleCodeBlock().run()" :class="{ 'is-active': editor.isActive('codeBlock') }">
      code block
    </button>
  </div>
  <editor-content :editor="editor" />
</template>

<script>
import { Editor, EditorContent, VueNodeViewRenderer } from '@tiptap/vue-3';
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import { lowlight } from 'lowlight';
//import CodeBlockComponent from './CodeBlockComponent.vue';

import css from 'highlight.js/lib/languages/css';
import js from 'highlight.js/lib/languages/javascript';
import ts from 'highlight.js/lib/languages/typescript';
import html from 'highlight.js/lib/languages/xml';

// Register languages with lowlight
lowlight.registerLanguage('html', html);
lowlight.registerLanguage('css', css);
lowlight.registerLanguage('js', js);
lowlight.registerLanguage('ts', ts);

export default {
  components: {
    EditorContent,
  },
  data() {
    return {
      editor: null,
    };
  },
  mounted() {
    this.editor = new Editor({
      extensions: [
        Document,
        Paragraph,
        Text,
        CodeBlockLowlight
          .extend({
            addNodeView() {
              return VueNodeViewRenderer(CodeBlockComponent);
            },
          })
          .configure({ lowlight }),
      ],
      content: `...`,
    });
  },
  beforeUnmount() {
    this.editor.destroy();
  },
};
</script>

<style>
/* Your styles here */
</style>
