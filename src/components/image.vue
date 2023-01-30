<template>
  <img :src="imgSrc">
</template>
<script setup>
import { ref } from 'vue'
import html2canvas from 'html2canvas'
const props = defineProps({
  divRef: {
    required: true
  }
})
const imgSrc = ref()
const clickImage = () => {
  html2canvas(props.divRef)
    .then((canvas) => {
      let dataURL = canvas.toDataURL('image/png', 1)
      imgSrc.value = dataURL
    })
    .catch((e) => {
      console.log('不知道为什么生成错误')
    })
    .finally(() => {
      console.log('已完成')
    })
}
defineExpose({
  clickImage
})

</script>
