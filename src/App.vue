<script setup lang="ts">
import { ref } from 'vue';
import { Table, Column } from './table'

const tableData = ref([
  {
    date: '2016-05-03',
    name: 'Mark',
    address: 'No. 189, Grove St, Los Angeles',
    checked: true
  },
  {
    date: '2016-05-03',
    name: 'Mark',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-03',
    name: 'Mark',
    address: 'No. 189, Grove St, Los Angeles'
  }
])

const editRow = (row: any) => {
  console.log('editRow', row)
}

const onSelectionChange = (checkedRows: any) => {
  console.log('checkedRows', checkedRows)
}
</script>

<template>
  <Table :data="tableData" @selection-change="onSelectionChange">
    <Column type="selection"></Column>
    <Column field="date" header="Date"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="address" header="Address"></Column>
    <Column header="操作">
      <template #default="row">
        <button @click="editRow(row)">编辑</button>
        <button>删除</button>
      </template>
    </Column>
  </Table>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
