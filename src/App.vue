<script setup>
import { ref } from 'vue'
import mdPreview from './components/mdPreview.vue'
import menuIndex from './components/menu/index.vue'
const mdContent = ref('')
const menuContent = (data)=>{
  mdContent.value = data
}
</script>

<template>
  <section class="mainboard">
    <section class="menu">
      <menuIndex @menuContent="menuContent"></menuIndex>
    </section>
    <section class="content">
      <mdPreview :mdContent="mdContent" />
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
    background: #fefefe;
  }

  .content {
    width: 100%;
    min-height: 100%;
  }
}
</style>
