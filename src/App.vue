<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs

import { reactive } from 'vue'

// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
const tree = [
  {
    label: 'docs',
    id: 'docs'
  },
  {
    label: 'packages',
    id: 'packages',
    expanded: true,
    children: [
      {
        label: 'plugin-vue',
        id: 'plugin-vue'
      },
      {
        label: 'vite',
        id: 'vite',
        expanded: true,
        children: [
          {
            label: 'src',
            id: 'src'
          },
          {
            label: 'README.md',
            id: 'README.md'
          }
        ]
      }
    ]
  },
  {
    label: 'scripts',
    id: 'scripts',
    children: [
      {
        label: 'release.ts',
        id: 'release.ts'
      },
      {
        label: 'verifyCommit.ts',
        id: 'verifyCommit.ts'
      }
    ]
  },
  {
    label: 'pnpm-workspace.yaml',
    id: 'pnpm-workspace.yaml'
  }
]
const TreeData = reactive(tree)
const handleClick = (e: MouseEvent) => {
  console.log(e)
}
</script>

<template>
  <STrigger
    :default-popup-visible="true"
    trigger="click"
    :unmount-on-close="true"
  >
    <STree :data="TreeData" />
    <SButton @click="handleClick">Click me</SButton>
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
