# 间距 - Space

### 基础用法

间距组件的基本用法。

:::demo


  ```vue
  <template>
    <SSpace>
      <SButton>hello</SButton>
      textNode
      <SButton type="text">文本</SButton>
    </SSpace>
  </template>
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