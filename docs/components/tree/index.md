# 树 -- Tree

:::demo 这是树形组件
```vue
<template>
  <div class="demo-button">
   <STree :data="data" />
  </div>
</template>
<script setup>
  const data = [
      {
        id: '1', 
        label: 'js', 
        children: [
          {id: '1001', label: 'vue', children: [
            {id: '100101', label: 'vue2'},
            {id: '100102', label: 'vue3'},
          ]}, 
          {id: '1002', label: 'react'}
        ]
      },
      {
        id: '2',
        label: 'webpack'
      },
      {
        id: '3',
        label: 'css',
        children: [
          {id: '3001', label: 'sass'},
          {id: '3002', label: 'less'},
          {id: '3003', label: 'stylus'}
        ]
      }
    ]
</script>
```
:::
