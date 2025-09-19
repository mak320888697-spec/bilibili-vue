<template>
  <div class="video-grid">
    <VideoCard
      v-for="video in videos"
      :key="video.id"
      :title="video.title"
      :author="video.author"
      :views="video.views"
      :coverUrl="video.coverUrl"
      :duration="video.duration"
      @click="goDetail(video.id)"
    />
  </div>
</template>

<script setup lang="ts">
import VideoCard from '@/components/VideoCard.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
// 模拟一些视频数据
const videos = [
  {
    id: 1,
    title: 'Vue3 Full Tutorial',
    author: 'Alice',
    views: 12345,
    coverUrl: 'https://picsum.photos/seed/v101/640/360',
    duration: 600,
  },
  {
    id: 2,
    title: 'Element Plus UI Guide',
    author: 'Bob',
    views: 67890,
    coverUrl: 'https://picsum.photos/seed/v102/640/360',
    duration: 300,
  },
  {
    id: 3,
    title: 'Bilibili Clone Demo',
    author: 'Charlie',
    views: 4567,
    coverUrl: 'https://picsum.photos/seed/v103/640/360',
    duration: 180,
  },
]

function goDetail(id: number) {
  console.log('goDetail', id)   // 看看点卡片时控制台是否打印
  router.push(`/video/${id}`)
}
</script>

<style scoped>
.video-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 16px;
  padding: 16px;
}
</style>
