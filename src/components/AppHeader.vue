<script setup lang="ts">
import LogoIcon from '@/assets/icons/LogoIcon.vue'
import LoginIcon from '@/assets/icons/LoginIcon.vue'
import SearchIcon from '@/assets/icons/SearchIcon.vue'

</script>

<template>
  <el-menu
    mode="horizontal"
    :ellipsis="false"
    class="bg-yellow !border-none"
  >
    <!-- Первый блок -->
    <el-menu-item index="0">
      <LogoIcon class="mr-2" />
      <span class="font-bold text-[18px]/[24px]">StartupLand</span>
    </el-menu-item>
    <div class="flex-grow" />
    <!-- Второй блок -->
     <div class="flex items-center gap-2.5">
        <el-menu-item>
          <span class="text-main-text-color">Home</span>
        </el-menu-item>
        <el-sub-menu index="1">
          <template #title>
            <span class="text-main-text-color">Adversite</span>
          </template>
        </el-sub-menu>
        <el-sub-menu index="2">
          <template #title>
            <span class="text-main-text-color">Supports</span>
          </template>
        </el-sub-menu>
        <el-menu-item>
          <span class="text-main-text-color">About</span>
        </el-menu-item>
        <SearchIcon />
     </div>
    <div class="flex-grow" />
    <!-- Третий блок -->
    <div class="flex items-center gap-2.5">
      <button class="w-fit h-[45px]">
        <div class="flex items-center gap-2">
          <LoginIcon />
          <span class="text-main-text-color text-[16px]/[33px] font-medium">Login</span>
        </div>
      </button>
      <button class="w-[124px] h-[45px] bg-[#FFF0D7] rounded-[5px]">
        <span class="text-[#E5A740] text-[16px]/[33px] font-bold">Get Started</span>
      </button>
    </div>
  </el-menu>
</template>
