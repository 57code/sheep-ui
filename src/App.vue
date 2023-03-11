<script setup lang="ts">
import { Table, Column } from './table'

const tableData = [
  {
    date: '2016-05-03',
    name: 'Mark',
    address: 'No. 189, Grove St, Los Angeles'
  }
]
</script>

<template>
  <Table :data="tableData">
    <Column field="date" header="Date"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="address" header="Address"></Column>
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
