<script setup>
import HelloWorld from './components/HelloWorld.vue'
import CodeHighlighter from './components/CodeHighlighter.vue'
</script>

<template>
  <HelloWorld msg="Vite + Vue" />
  <h2>Test test Test</h2>
  <CodeHighlighter msg="Sample text here" />
  <h2>test test</h2>
  <p>
  <router-link to="/">Go to Home</router-link>
  </p>
  <p>
  <router-link to="/about">Go to About</router-link>
  </p>
  <p>
  <router-link to="/about">Go to About</router-link>
  </p>
  <p>
  <router-link to="/traditionallinearmodels">Go to Traditional Linear Models</router-link>
  </p>
  <p>
  <router-link to="/residualizedchangescore">Go to Residualized Change Score</router-link>
  </p>
  <p>
  <router-link to="/highlighttest">Go to Highlight Test</router-link>
  </p>
  <p>
  <router-link to="/NotFound">Go to NotFound</router-link>
  </p>
  <p>
  <router-link to="/user">Go to User</router-link>
  </p>
  <h1>Nested Views</h1>
  <p>
  <router-link to="/user/eduardo">/user/eduardo</router-link>
    <br />
    <router-link to="/user/eduardo/profile"
      >/user/eduardo/profile</router-link
    >
    <br />
    <router-link to="/user/eduardo/posts">/user/eduardo/posts</router-link>
  </p>
  <p>
    <router-link to="/test/testmain">Go to testmain</router-link>
  </p>
    <p>
    <router-link to="/test/testa/testa1">Go to testa1</router-link>
  </p>
  <p>
    <router-link to="/test/testb/testb1">Go to testb1</router-link>
  </p>
  <img alt="Vue logo" src="./assets/vue.svg" />
  <router-view> </router-view>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>





<!-- <script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>

  <div class="text-green-700 text-xl">Hello, from TailwindCSS!</div>

  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style> -->
