<template>
  <div class="w1000 top">
    <div ref="divRef">
      fafa
    </div>
    <button @click="clickImage">生成图片</button>
    <PrintImage :divRef="divRef" ref="PrintRef"/>
  </div>
</template>
<script setup>
import { ref } from "vue";
import PrintImage from "@/components/image.vue";
const divRef = ref();

const PrintRef = ref();
const clickImage = () => {
  PrintRef.value.clickImage()
};

</script>
