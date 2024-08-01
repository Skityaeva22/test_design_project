<script setup lang="ts">
const handleScrollToFooter = function (): void {
  window.scrollTo({
    top: 100000,
    behavior: 'smooth',
  })
}
</script>

<template>
  <div class="mx-32 flex h-[100px] items-center justify-between text-font-color md:mb-24 md:h-auto md:flex-col md:gap-14">
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
