<script setup lang="ts">
import LogoIcon from '@/assets/icons/LogoIcon.vue'
import LoginIcon from '@/assets/icons/LoginIcon.vue'
import SearchIcon from '@/assets/icons/SearchIcon.vue'
</script>

<template>
  <ElMenu
    mode="horizontal"
    :ellipsis="false"
    class="!border-none bg-yellow"
  >
    <!-- Первый блок -->
    <ElMenuItem index="0">
      <LogoIcon class="mr-2" />
      <span class="text-[18px]/[24px] font-bold">StartupLand</span>
    </ElMenuItem>
    <div class="flex-grow" />
    <!-- Второй блок -->
    <div class="flex items-center gap-2.5">
      <ElMenuItem>
        <span class="text-main-text-color">Home</span>
      </ElMenuItem>
      <ElSubMenu index="1">
        <template #title>
          <span class="text-main-text-color">Adversite</span>
        </template>
      </ElSubMenu>
      <ElSubMenu index="2">
        <template #title>
          <span class="text-main-text-color">Supports</span>
        </template>
      </ElSubMenu>
      <ElMenuItem>
        <span class="text-main-text-color">About</span>
      </ElMenuItem>
      <SearchIcon />
    </div>
    <div class="flex-grow" />
    <!-- Третий блок -->
    <div class="flex items-center gap-2.5">
      <button class="h-[45px] w-fit">
        <div class="flex items-center gap-2">
          <LoginIcon />
          <span class="text-[16px]/[33px] font-medium text-main-text-color">Login</span>
        </div>
      </button>
      <button class="h-[45px] w-[124px] rounded-[5px] bg-[#FFF0D7]">
        <span class="text-[16px]/[33px] font-bold text-[#E5A740]">Get Started</span>
      </button>
    </div>
  </ElMenu>
</template>
