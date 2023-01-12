# Button 按钮

## 基础按钮

:::demo 基础按钮

```vue
<template>
  <s-button></s-button>
</template>
```

:::

## 按钮类型 type

:::demo 通过 type 属性设置按钮样式，可选：primary | secondary | text

```vue
<template>
  <s-button></s-button>
  <s-button type="primary"></s-button>
  <s-button type="text"></s-button>
</template>
```

:::

## 按钮尺寸 size

:::demo 通过 size 属性设置按钮样式，可选：small | medium | large
```vue
<template>
  <s-button size="small">Small</s-button>
  <s-button>Medium</s-button>
  <s-button size="large">Large</s-button>
</template>
```
:::


## 禁用按钮 disabled

:::demo 通过 disabled 属性禁用按钮
```vue
<template>
    <s-button type="primary"          
      @click="confirm">Primary</s-button>
    <s-button type="primary" disabled 
      @click="confirm">Disabled</s-button>
</template>
<script setup>
  const confirm = () => console.log('confirm')
</script>
```
:::

## 块级按钮 block

:::demo 通过 block 属性设置按钮为块级
```vue
<template>
  <s-button type="primary" block>Confirm</s-button>
  <s-button block>Cancel</s-button>
</template>
```
:::