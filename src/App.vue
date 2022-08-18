<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from './components/HelloWorld.vue'
import Test from './components/Test'
// import SButton from './button/src/Button'
import VirtualList from './components/VirtualList.vue'
</script>

<template>
  <test></test>
  <s-button type="primary">确定</s-button>
  <SButton>取消</SButton>
  <h1 class="text-3xl font-bold underline">Hello world!</h1>
  <VirtualList></VirtualList>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
