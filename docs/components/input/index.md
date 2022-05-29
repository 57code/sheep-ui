# 间距 - Space

### 基础用法

输入框组件的基本用法。

:::demo


  ```vue
  <template>
    <SSpace>
      <SInput :style="{width:'320px'}" placeholder="Please enter something" allow-clear v-model="text" />
      <SInput :style="{width:'320px'}" default-value="content" placeholder="Please enter something" allow-clear />
    </SSpace>
  </template>

  <script>
  import { ref, defineComponent } from 'vue'
  export default defineComponent({
    setup() {
      return {
        text: ref('')
      }
    }
  })
  </script>
  ```
:::

### 垂直间距

可以设置垂直方向排列的间距。

:::demo


  ```vue
  <template>
    <SSpace direction="vertical" fill>
      <SButton>hello</SButton>
      <SButton>world</SButton>
      <SButton>haha</SButton>
    </SSpace>
  </template>
  ```
:::

### 尺寸

内置 4 个尺寸，mini - 4px small - 8px (默认) medium - 16px large - 24px，也支持传数字来自定义尺寸。

:::demo


  ```vue
  <template>
    <SSpace size="large">
      <SButton>hello</SButton>
      <SButton>world</SButton>
      <SButton>haha</SButton>
    </SSpace>
  </template>
  ```
:::