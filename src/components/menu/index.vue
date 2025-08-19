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
  emits('menuClick', data)
}

const data: Tree[] = [
  {
    label: "What's new",
    url: '/docs/README.md',
  },
  {
    label: "文档使用指南",
    url: '/docs/allguide.md',
  },
  {
    label: '系统全景图',
    url: '/docs/overview-platform.md',
    children: [
      {
        label: '专业术语',
        url: '/docs/overview/term.md'
      },
      {
        label: '系统简介',
        url: '/docs/overview/introduction.md'
      },
      {
        label: '系统架构',
        url: '/docs/overview/architecture.md'
      },
      {
        label: '安全特性',
        url: '/docs/overview/security.md'
      },
      {
        label: '信创支持',
        url: '/docs/overview/innovation.md'
      },
      {
        label: '系统荣誉',
        url: '/docs/overview/honors.md'
      }
    ],
  },
  {
    label: '产品简介',
    url: '/docs/guide/README.md',
    children: [
      {
        label: '管理控制台',
        children: [{
          label: '登录',
          url: '/docs/guide/console/login.md'
        }, {
          label: '总览',
          url: '/docs/guide/console/workspace.md'
        }]
      },
      {
        label: '门户工作台',
        url: '/docs/overview/introduction.md'
      }
    ]
  }
]

const defaultProps = {
  children: 'children',
  label: 'label',
}
</script>
