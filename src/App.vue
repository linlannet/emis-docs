<script setup>
import { ref } from 'vue'
import mdPreview from './components/mdPreview.vue'
import menuIndex from './components/menu/index.vue'
const mdUrl = ref('./docs/overview/introduction.md')
const menuClick = (data)=>{
  
  if(data.url){
    mdUrl.value = data.url
  }
}
</script>

<template>
  <section class="mainboard">
    <section class="menu">
      <menuIndex @menuClick="menuClick"></menuIndex>
    </section>
    <section class="content">
      <mdPreview :mdUrl="mdUrl" />
    </section>
  </section>

</template>

<style scoped>
.mainboard {
  position: relative;
  width: 100%;
  height: 100%;
  padding-left: 220px;

  .menu {
    position: fixed;
    border-right: 1px solid #eaeaea;
    width: 220px;
    height: 100%;
    left: 0;
    top: 0;
  }

  .content {
    width: 100%;
    min-height: 100%;
  }
}
</style>
