<template>
  <el-tree ref="menuTree" :data="data" :default-expanded-keys="expandedKeys" node-key="url" :props="defaultProps"
    @node-click="handleNodeClick" />
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { data } from './menu-data'

interface Tree {
  label: string,
  url:string,
  children?: Tree[]
}
const menuTree = ref()
const defaultUrl = ref('/docs/overview-platform.md')
const expandedKeys = ref([])
const emits = defineEmits(['menuContent'])
const handleNodeClick = (data: Tree) => {
  if(data.url){
    defaultUrl.value = data.url
    getMdContent()
  }
}

const defaultProps = {
  children: 'children',
  label: 'label',
}

const getMdContent = () => {
  fetch(window.baseUrl + defaultUrl.value)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(text => {
      emits('menuContent', text)
    })
}

// 展开所有节点
const expendAllParent = (parent)=>{
  if(parent){
    parent.expanded = true
    expendAllParent(parent.parent)
  }
}
// 获取当时间树节点
const getTreeNode = ()=>{
  let currentNode = menuTree.value.getNode(defaultUrl.value)
  if(currentNode){
    currentNode.expanded = true
    currentNode.selected = true
    expendAllParent(currentNode.parent)
  }
  return currentNode
}

onMounted(() => {
  if (location.pathname != '/emis/docs/') {
    // 以 / 结尾代表指向的是目录，展开目录 手工拼接 md 内容
    if(location.pathname.endsWith("/")){
      defaultUrl.value = location.pathname.replace('/emis', '')
      let currentNode = getTreeNode()
      // 拼接 md 文档内容
      let content = '# ' + currentNode.label + "\r\n"
      content += currentNode.childNodes.map(item=> `### [${item.label}](/emis${item.key.replace('.md', '')}) `).join('\r\n')
      emits('menuContent', content)

    }else{
      // 根所路径读取文件和节点
      defaultUrl.value = (location.pathname + ".md").replace('/emis', '')
      getTreeNode()
      getMdContent()
    } 
  }else{
    getMdContent()
  }
})
</script>
<style scoped>
.el-tree {
  background: transparent;
}

.el-text {
  font-size: 16px;
}
</style>
