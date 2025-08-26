<template>
  <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" />
</template>

<script lang="ts" setup>
interface Tree {
  label: string
  children?: Tree[]
}
const emits = defineEmits(['menuClick'])
const handleNodeClick = (data: Tree) => {
  emits('menuClick', data)
}
import { data } from './menu-data'


const defaultProps = {
  children: 'children',
  label: 'label',
}
</script>
