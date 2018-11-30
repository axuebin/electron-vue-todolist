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
  @import "assets/iconfont.css";
  * {
    margin: 0;
    padding: 0;
    user-select: none;
  }
  html, body {
    width: 375px;
    overflow: hidden;
  }
  input {
    outline:none;
    background-color:transparent;
    border:0;
    -webkit-tap-highlight-color:rgba(255,0,0,0);
  }
</style>
