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
  console.log(data)
  emits('menuClick',data)
}

const data: Tree[] = [
  {
    label: '概述',
    children: [
      {
        label: '产品介绍',
        url:'../docs/overview/introduction.md'
      },
      {
        label: '系统架构',
        url:'../docs/overview/architecture.md'
      },
      {
        label: '专业术语',
        url:'../docs/overview/term.md'
      },
      {
        label: '安全可用',
        url:'../docs/overview/security.md'
      }
    ],
  },
  {
    label: 'Level one 2',
    children: [
      {
        label: 'Level two 2-1',
        children: [
          {
            label: 'Level three 2-1-1',
          },
        ],
      },
      {
        label: 'Level two 2-2',
        children: [
          {
            label: 'Level three 2-2-1',
          },
        ],
      },
    ],
  },
  {
    label: 'Level one 3',
    children: [
      {
        label: 'Level two 3-1',
        children: [
          {
            label: 'Level three 3-1-1',
          },
        ],
      },
      {
        label: 'Level two 3-2',
        children: [
          {
            label: 'Level three 3-2-1',
          },
        ],
      },
    ],
  },
]

const defaultProps = {
  children: 'children',
  label: 'label',
}
</script>
