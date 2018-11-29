<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import { initState } from './store';

  export default {
    name: 'electron-vue-todolist',
    mounted() {
      initState();
    },
  };
</script>

<style>
  /* CSS */
  @import "assets/normalize.css";
  * {
    margin: 0;
    padding: 0;
  }
  html, body {
    width: 375px;
    overflow: hidden;
  }
</style>
