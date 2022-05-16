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

### API

#### \<space\> Props

| 参数         | 类型    | 默认  | 说明                                                                | 跳转                                              |
| :----------- | :------ | :---- | :------------------------------------------------------------------ | :------------------------------------------------ |
| align          | start \| end \| center \| baseline  | -   | 对齐方式                                           | [基本用法](#基本用法)                             |
| direction          | vertical \| horizontal  | horizontal     | 间距方向                                            | [基本用法](#基本用法)                             |
| size         | number  \| number \| 'mini' \| 'small' \| 'medium' \| 'large' \| [SpaceSize, SpaceSize]  | small   | 间距大小，支持分别制定横向和竖向的间距 | [可设置 Step 的滑动组件](#可设置step的滑动组件)   |
| wrap        | boolean  | false    | 环绕类型的间距，用于折行的场景。                                          | [自定义颜色 color](#自定义颜色color)              |
| fill     | boolean | false | 充满整行                                     | [禁止输入态](#禁止输入态)                         |
