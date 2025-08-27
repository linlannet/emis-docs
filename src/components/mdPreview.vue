<template>
    <MdPreview :editorId="id" :modelValue="mdContent" style="padding: 0 300px 0 80px;" />
    <MdCatalog :editorId="id" :scrollElement="scrollElement" style="position: fixed;width: 220px; top:50px; right: 70px;" />
</template>

<script setup>
import { MdPreview, MdCatalog } from 'md-editor-v3';
import 'md-editor-v3/lib/preview.css';

const props = defineProps(["mdContent"])
const id = 'preview-only';
const scrollElement = document.documentElement;

</script>