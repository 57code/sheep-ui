<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
// import Test from './components/Test'
import { AlignCenterIcon } from './icon/align-center/align-center'
import { UserIcon } from './icon/user/user'
import { InfoCircleIcon } from './icon/info-circle/info-circle'
import { ref } from 'vue'
const text = ref('')
const confirm = () => {
  console.log('confirm!!!')
}
const handleClear = e => {
  console.log(e, 'clear')
}
const hanldeBlur = e => {
  console.log(e, 'blur')
}
const handleFocus = e => {
  console.log(e, 'focus')
}
const handlePressEnter = e => {
  console.log(e, 'pressEnter')
}
</script>

<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <HelloWorld msg="Hello Sheep UI" />
  <!-- <Test>
    <template #default> aaaa </template>
    <template #title><h3>title</h3></template>
  </Test> -->
  <!-- 1.type:primary,secondary,text -->
  <div>
    <SSpace :wrap="true" direction="vertical" fill>
      <SButton type="primary">确定</SButton>
      <!-- <div>xx</div> -->
      <SButton
        type="secondary"
        tag="a"
        href="https://anyway.fm/news.php"
        @click="confirm"
      >
        <template #icon> icon </template>
        取消
      </SButton>
      textNode
      <SButton type="text">文本</SButton>
    </SSpace>
  </div>
  <!-- 2.size:small,medium,large -->
  <div>
    <SButton type="primary" size="small">small</SButton>
    <SButton type="primary" size="medium">medium</SButton>
    <SButton type="primary" size="large">large</SButton>
  </div>
  <div>
    <SButton type="secondary" size="small">small</SButton>
    <SButton type="secondary" size="medium">medium</SButton>
    <SButton type="secondary" size="large">large</SButton>
  </div>
  <!-- 3. disabled -->
  <div>
    <SButton type="primary" @click="confirm">确定</SButton>
    <SButton type="primary" disabled @click="confirm">disabled</SButton>
  </div>
  <div>
    <SButton type="secondary" @click="confirm">确定</SButton>
    <SButton type="secondary" disabled @click="confirm">disabled</SButton>
  </div>
  <div>
    <SButton type="text" @click="confirm">确定</SButton>
    <SButton type="text" disabled @click="confirm">disabled</SButton>
  </div>
  <!-- 4.block -->
  <SButton type="primary" block>Confirm</SButton>
  <SButton type="secondary" block>Cancel</SButton>
  <AlignCenterIcon />
  <div>
    <SInput default-value="xxx" placeholder="请输入你的名字" allow-clear>
      <template #prefix>
        <UserIcon />
      </template>
      <template #suffix>
        <InfoCircleIcon />
      </template>
    </SInput>
  </div>
  <input />
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
</style>
