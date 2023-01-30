<template>
  <div class="w1000 top">
    <div ref="divRef">fafa</div>
    <button @click="clickImage">生成图片</button>
    <canvas-to-image :divRef="divRef" ref="PrintRef" />
  </div>
</template>
<script setup>
import { ref } from "vue";
import canvasToImage from "@/components/canvasToImage.vue";
const divRef = ref();

const PrintRef = ref();
const clickImage = () => {
  PrintRef.value.clickImage();
};
</script>
