# 树 🌲

## 基础功能

Tree 组件基本用法，传入`data`属性即可。 
:::demo Tree 组件基本用法，传入 data 属性
```vue
<template>
  <STree :data="data"></STree>
</template>
<script setup>
import { ref } from 'vue'
const data = ref([
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
])
</script>
```

:::

## 连接线

展开节点之后设置连接线便于分辨同级节点。通过`lineable`属性控制特性开关，默认 false。 
:::demo 通过`lineable`属性控制特性开关，默认 false

```vue
<template>
  <STree :data="data" lineable></STree>
</template>
<script setup>
import { ref } from 'vue'
const data = ref([
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
])
</script>
```

:::

## 复选框

通过复选框可以多选节点，这样可以批量操作节点。 
:::demo 通过`checkable`属性控制特性开关，默认 false

```vue
<template>
  <STree :data="data" checkable></STree>
</template>
<script setup>
import { ref } from 'vue'
const data = ref([
  {
    label: 'docs',
    id: 'docs',
    checked: true
  },
  {
    label: 'packages',
    id: 'packages',
    expanded: true,
    checked: true,
    children: [
      {
        label: 'plugin-vue',
        id: 'plugin-vue',
        checked: true
      },
      {
        label: 'vite',
        id: 'vite',
        expanded: true,
        checked: true,
        children: [
          {
            label: 'src',
            id: 'src',
            checked: true
          },
          {
            label: 'README.md',
            id: 'README.md',
            checked: true
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
])
</script>
```

:::

## 自定义 icon 图标

通过 icon 插槽可以自定义展开/折叠图标。 
:::demo 自定义展开图标，设置 icon 插槽

```vue
<template>
  <STree :data="data">
    <template #icon="{ nodeData, toggleNode }">
      <span v-if="nodeData.isLeaf" class="devui-tree-node__indent"></span>
      <span
        v-else
        @click="
          event => {
            event.stopPropagation()
            toggleNode(nodeData)
          }
        "
      >
        <svg
          :style="{
            transform: nodeData.expanded ? 'rotate(90deg)' : '',
            display: 'inline-block',
            margin: '0 5px',
            cursor: 'pointer'
          }"
          viewBox="0 0 1024 1024"
          width="12"
          height="12"
        >
          <path
            d="M857.70558 495.009024 397.943314 27.513634c-7.132444-7.251148-18.794042-7.350408-26.048259-0.216941-7.253194 7.132444-7.350408 18.795065-0.216941 26.048259l446.952518 454.470749L365.856525 960.591855c-7.192819 7.192819-7.192819 18.85544 0 26.048259 3.596921 3.596921 8.311293 5.39487 13.024641 5.39487s9.42772-1.798972 13.024641-5.39487L857.596086 520.949836C864.747973 513.797949 864.796068 502.219239 857.70558 495.009024z"
          ></path>
        </svg>
      </span>
    </template>
  </STree>
  <template>
    <script setup>
      import { ref } from 'vue'
      const data = ref([
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
      ])
    </script></template
  >
</template>
```

:::
