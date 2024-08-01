<script setup lang="ts">
import { Close, Expand } from '@element-plus/icons-vue'
import { useRoute } from 'vue-router'

const handleScrollToFooter = function (): void {
  window.scrollTo({
    top: 100000,
    behavior: 'smooth',
  })
}

const route = useRoute()
const headerDisplay = computed(() => route.path === '/home')
const navigationDisplay = ref('md:hidden')

function changeNavigationDisplay() {
  if (navigationDisplay.value === 'md:flex') {
    navigationDisplay.value = 'md:hidden'
  }
  else {
    navigationDisplay.value = 'md:flex'
  }
}
</script>

<template>
  <RouterLink v-if="headerDisplay" to="/menu" class="flex h-[80px] items-center justify-end px-6 lg:hidden largePost:hidden" @click="changeNavigationDisplay">
    <Expand class="w-9 text-main-orange" />
  </RouterLink>

  <div v-if="!headerDisplay" class="flex flex-col gap-16 px-5 py-2.5" @click="changeNavigationDisplay">
    <RouterLink to="/" class="self-end ">
      <Close class="w-9 text-main-orange" />
    </RouterLink>
  </div>

  <div :class="navigationDisplay" class="mx-32 flex h-[100px] items-center justify-between text-font-color md:mb-24 md:h-auto md:flex-col md:gap-14">
    <RouterLink to="/">
      <img src="@/assets/images/header_main_image.svg" class="md:min-w-[153px]" alt="header image">
    </RouterLink>
    <nav class="flex w-1/2 justify-between font-Gilroy text-xl font-medium md:flex-col md:gap-3.5">
      <RouterLink class="md:self-center" to="/">
        Информация
      </RouterLink>
      <RouterLink class="text-nowrap md:self-center" to="/bot">
        Чат-бот
      </RouterLink>
      <div class="cursor-pointer md:self-center" @click="handleScrollToFooter()">
        Контакты
      </div>
    </nav>
    <div class="flex gap-5 md:hidden">
      <button>
        <img src="@/assets/images/email_button.svg" alt="email button">
      </button>
      <button>
        <img src="@/assets/images/telegram_image.svg" alt="email button">
      </button>
    </div>
  </div>
</template>
