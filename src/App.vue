<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { AlignCenterIcon } from './icon/align-center/align-center'
import { UserIcon } from './icon/user/user'
import { InfoCircleIcon } from './icon/info-circle/info-circle'
import { ref } from 'vue'
const text = ref('')
</script>

<template>
  <STrigger
    :default-popup-visible="true"
    trigger="click"
    :unmount-on-close="true"
  >
    <SButton>Click me</SButton>
    <template #content>
      <div class="demo-basic">luanhanxiao is a good man</div>
    </template>
  </STrigger>
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
.demo-basic {
  padding: 10px;
  width: 200px;
  background-color: var(--color-bg-popup);
  border-radius: 4px;
  box-shadow: 0 2px 8px #00000026;
}
</style>
