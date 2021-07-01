<!--
 * @Description: Type your file description
 * @Author: qiangwu
 * @LastEditors: qiangwu
 * @Date: 2021-07-01 15:54:46
 * @LastEditTime: 2021-07-01 16:05:44
 * @FilePath: \make-friend\src\App.vue
-->
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {name: 'App'}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
