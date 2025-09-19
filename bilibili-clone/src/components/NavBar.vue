<template>
  <header class="h-14 border-b px-4 flex items-center gap-10">
    <!-- <RouterLink to="/" class="font-bold">bili-clone</RouterLink> -->

    <!-- 主站 -->
    <RouterLink to="/" class="link">主站</RouterLink>
    <RouterLink to="/search" class="link">搜索</RouterLink>

    <!-- 创作中心 -->
    <RouterLink to="/creator" class="link">创作中心</RouterLink>

    <!-- 个人中心 -->
    <RouterLink to="/profile" class="link">个人中心</RouterLink>

    <!-- 管理后台 -->
    <RouterLink to="/admin" class="link">管理后台</RouterLink>

    <div class="ml-auto">
      <RouterLink to="/login">
        <el-button type="primary" size="small">登录</el-button>
      </RouterLink>
    </div>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped>
.link {
  color: #666;
  text-decoration: none;
}
.link.router-link-active {
  color: #409eff;
  font-weight: 600;
}
</style>
