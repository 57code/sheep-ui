# Switch 开关
表示两种相互对立的状态间的切换，多用于触发「开/关」。
### 基础用法
绑定 ```v-model``` 到一个 ```Boolean``` 类型的变量。 可以使用 ```--s-switch-on-color``` 属性与 ```--s-switch-off-color``` 属性来设置开关的背景色。
::: demo
```vue
<template>
  <s-switch v-model="value1" style="margin-right:10px"></s-switch>
  <SSwitch v-model="value1" style="margin-right:10px" active-text="Open" inactive-text="Close"></SSwitch>
  <s-switch v-model="value1" style="--s-switch-on-color:red;--s-switch-off-color:#000;" @change="handlerChange"></s-switch>
</template>
<script>
export default {
  data() {
    return {
      value1: true,
    }
  },
  methods: {
    handlerChange(val) {
      console.log(val)
    }
  }
}
</script>
```
:::
### 尺寸
::: demo
```vue
<template>
  <s-switch v-model="value1" style="margin-right:10px" size="small"></s-switch>
  <s-switch v-model="value2" style="margin-right:10px"></s-switch>
  <s-switch v-model="value3" size="large"></s-switch>
</template>
<script>
  export default {
  data() {
    return {
      value1: true,
      value2: true,
      value3: true,
    }
  },
  methods: {
  }
}
</script>
```
:::

### 文字描述
使用```active-text```属性与```inactive-text```属性来设置开关的文字描述。 使用 ```inline-prompt``` 属性来控制文本是否显示在点内。
使用```active-text```属性与```inactive-text```属性来设置开关的文字描述。
::: demo
```vue
<template>
 <s-switch v-model="value1" inline-prompt active-text="是" inactive-text="否"></s-switch>
</template>
<script>
  export default {
  data() {
    return {
      value1: true,
      value2: true,
      value3: true,
    }
  },
  methods: {
  }
}
</script>
```
:::
### 禁用状态
设置```disabled```属性，接受一个```Boolean```，设置```true```即可禁用。
::: demo
```vue
<template>
<s-switch v-model="value1" style="margin-right:10px" disabled></s-switch>
<s-switch v-model="value1"></s-switch>
</template>
<script>
export default {
  data() {
    return {
      value1: true,
    }
  }
}
</script>
```
:::

### 加载状态
设置```loading```属性，接受一个```Boolean```，设置```true```即加载中状态。
::: demo
```vue
<template>
<s-switch v-model="value1" style="margin-right:10px" loading></s-switch>
<s-switch v-model="value2" loading></s-switch>
</template>
<script>
export default {
  data() {
    return {
      value1: false,
      value2: true,
    }
  }
}
</script>
```
:::
