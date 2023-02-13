<template>
  <div>
    <router-link v-for="(item, index) in routeList"
                 :key="index"
                 :to="{ name: item.routeName }"
    >
      {{ item.name }}
    </router-link>
  </div>
</template>

<script setup>
import { ref } from "vue";

const routeList = ref([
  {
    name: '访问摄像头',
    routeName: 'webRTCGetUserMedia'
  }
])

</script>

<style lang="scss" scoped>

</style>
