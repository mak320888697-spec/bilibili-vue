<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute()
const id = String(route.params.id)
// 在真实项目里，你会根据 id 去请求视频详情 & 播放地址
</script>

<template>
  <div style="padding: 16px;">
    <h2>Video #{{ id }}</h2>
    <video
      controls
      style="width:100%; max-width: 960px; margin-top: 12px; background:#000; border-radius: 8px;"
      src="/src/assets/sample.mp4"
    ></video>
    <p style="margin-top:12px; color:#666;">
      This is a demo player. Replace <code>/sample.mp4</code> with a real URL later.
    </p>
  </div>
</template>
