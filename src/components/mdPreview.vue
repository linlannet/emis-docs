<template>
    <MdPreview :editorId="id" :modelValue="content" style="padding: 0 300px 0 80px;" />
    <MdCatalog :editorId="id" :scrollElement="scrollElement" style="position: fixed;width: 220px; top:50px; right: 70px;" />
</template>

<script setup>
import { ref, watch } from 'vue';
import { MdPreview, MdCatalog } from 'md-editor-v3';
import 'md-editor-v3/lib/preview.css';

const props = defineProps(["mdUrl"])

const id = 'preview-only';
const content = ref('# Hello Editor');
const scrollElement = document.documentElement;
const getMdContent = (url) => {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(text => {
            content.value = text
        })
}

watch(()=> props.mdUrl, () => {
    getMdContent(props.mdUrl)
}, {
    immediate: true,
    deep:true
})
</script>