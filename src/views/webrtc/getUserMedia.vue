<template>
  <div>
    webRTCGetUserMedia
    <video autoplay playsinline></video>
  </div>
</template>

<script setup>

import {onMounted} from "vue";

const mediaStreamContrains = {
  video: true,
  audio: true
};

const localVideo = document.querySelector('video');

function gotLocalMediaStream(mediaStream) {
  localVideo.srcObject = mediaStream;
}

function handleLocalMediaStreamError(error) {
  console.log('navigator.getUserMedia error: ', error);
}

onMounted(() => {
  navigator.mediaDevices.getUserMedia(mediaStreamContrains).then(
      gotLocalMediaStream
  ).catch(
      handleLocalMediaStreamError
  );
})

</script>

<style lang="scss" scoped>

</style>
