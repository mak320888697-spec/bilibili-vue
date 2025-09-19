<template>
  <el-card shadow="hover" class="video-card" :body-style="{ padding: '10px' }" @click="$emit('click')">
    <!-- 封面占位：16:9 比例盒，后面换成真实封面图 -->
    <div class="cover" :style="{ backgroundImage: `url(${coverUrl})` }" >
      <span class="badge">{{ formatDuration(duration) }}</span>
    </div>

    <!-- 标题，两行省略 -->
    <div class="title" :title="title">{{ title }}</div>

    <!-- 次要信息：作者 + 播放量 -->
    <div class="meta">
      <span class="author">{{ author }}</span>
      <span class="dot">.</span>
      <span class="views">{{ formatViews(views) }} views</span>
    </div>
  </el-card>
</template>

<script lang="ts" setup>
/**
 * 接收父组件传入的数据（最小必要字段）
 * - title: 标题
 * - author: 作者
 * - views: 播放量
 */
const { title, author, views, coverUrl, duration } = defineProps<{
  title: string
  author: string
  views: number
  coverUrl: string
  duration: number
}>()

function formatViews(n: number) {
  if (n >= 1e8) return (n / 1e8).toFixed(1).replace(/\.0$/, '') + 'B'
  if (n >= 1e4) return (n / 1e4).toFixed(1).replace(/\.0$/, '') + 'K'
  return String(n)
}

function formatDuration(s: number) {
  const m = Math.floor(s / 60),
    ss = s % 60
  return `${m}:${String(ss).padStart(2, '0')}`
}
</script>

<style scoped>
.video-card {
  cursor: pointer;
  transition:
    transform 0.12s ease,
    box-shadow 0.12s ease;
}
.video-card:hover {
  transform: translateY(-2px);
}
/* 16:9 封面占位；后续可把背景图写到 .cover 的 background-image */
.cover {
  width: 100%;
  aspect-ratio: 16 / 9;
  background: #111;
  border-radius: 6px;
  margin-bottom: 8px;
  background-size: cover;
  background-position: center;
  position: relative;
}
.badge {
  position: absolute;
  bottom: 6px;
  right: 6px;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 4px;
}
/* 标题两行省略 */
.title {
  font-size: 14px;
  font-weight: 600;
  line-height: 1.45;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* 显示两行 */
  line-clamp: 2; /* Standard property for compatibility */
  -webkit-box-orient: vertical;
  min-height: 2.7em;
}

/* 次要信息 */
.meta {
  font-size: 12px;
  color: #909399;
  margin-top: 6px;
  align-items: center;
  gap: 6px;
}
.dot {
  color: #c0c4cc;
}
.author {
  color: #606266;
}
</style>
