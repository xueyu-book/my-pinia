import{h as n,o as c,c as i,g as s,a as d}from"./index-6bedc52c.js";const l=d("video",{autoplay:"",playsinline:""},null,-1),g={__name:"getUserMedia",setup(u){const a={video:!0,audio:!0},o=document.querySelector("video");function t(e){o.srcObject=e}function r(e){console.log("navigator.getUserMedia error: ",e)}return n(()=>{navigator.mediaDevices.getUserMedia(a).then(t).catch(r)}),(e,m)=>(c(),i("div",null,[s(" webRTCGetUserMedia "),l]))}};export{g as default};
