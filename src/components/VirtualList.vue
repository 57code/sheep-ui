<template>
  <div class="s-virtual-list__container" @scroll="scrollEvent">
    <!-- 数据最终高度，用于展示滚动条 -->
    <div
      class="s-virtual-list__blank"
      :style="{
        height: `${totalCount * itemHeight}px`
      }"
    ></div>
    <!-- 真正的数据列表 -->
    <div
      class="s-virtual-list"
      :style="{
        transform: `translate3d(0, ${offsetY}px, 0)`
      }"
    >
      <div class="item" v-for="(item, index) in visibleData" :key="index">
        Item {{ item.value }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 静态值
// 1.容器高度containerHeight
// 2.列表项高度itemHeight
// 动态值

import { computed, ref } from 'vue'

// 1.滚动条位置scrollTop
const containerHeight = 300 // 容器高度
const itemHeight = 24 // 列表项高度
const visibleCount = Math.ceil(containerHeight / itemHeight) // 可视区域列表元素数量

const totalCount = 1000 // 列表总数
const data = ref(
  Array.from({ length: totalCount }).map((_, index) => ({ value: index }))
)

// 起始索引
const startIndex = ref(0)
// 可视区域的数据
const visibleData = computed(() =>
  data.value.slice(startIndex.value, startIndex.value + visibleCount)
)

// 列表在Y轴的偏移量
const offsetY = ref(0)
const scrollEvent = (event: UIEvent) => {
  const { scrollTop } = event.target as HTMLElement
  // 当scrollTop发生变化，重新计算startIndex，如果startIndex变化，依赖它的visibleData也就动态变化了
  startIndex.value = Math.floor(scrollTop / itemHeight)
  // 改变列表元素在Y轴的偏移量
  offsetY.value = scrollTop
}
</script>

<style scoped lang="scss">
.s-virtual-list {
  .item {
    height: 24px;
  }
  &__container {
    overflow: auto;
    position: relative;
  }

  &__blank {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }

  & {
    transform: translate3d(
      0,
      0,
      0
    ); // 中间的是列表区域在Y轴的偏移量，会跟随鼠标滚动实时变化
  }
}
</style>
