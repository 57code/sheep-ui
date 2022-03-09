<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
import Test from './components/Test'

const confirm = () => {
  console.log('confirm!!!')
}
</script>

<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <HelloWorld msg="Hello Sheep UI" />
  <Test>
    <template #default> aaaa </template>
    <template #title><h3>title</h3></template>
  </Test>
  <!-- 1.primary,secondary,text
  2.尺寸size
  3.disabled
  4.块级block
  5.iconbutton -->
  <SButton type="primary" size="large">确定</SButton>
  <SButton type="primary" size="medium" @click="confirm">确定</SButton>
  <SButton type="primary" size="small" disabled @click="confirm">确定</SButton>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
