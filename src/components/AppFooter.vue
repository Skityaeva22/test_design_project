<script setup lang="ts">
</script>

<template>
  <footer id="footer" class="md:py-18 flex min-h-96 flex-col rounded-t-2xl bg-dark-grey px-32 py-20 smPre:px-3 smPre:py-8 md:px-8">
    <div class="flex flex-row justify-between gap-10 leading-[120%] smPre:flex-wrap largePost:justify-start largePost:gap-[276px]">
      <AppFooterFeedbackForm />
      <div class=" flex flex-col flex-nowrap sm:flex-grow sm:flex-row sm:items-center sm:justify-between md:mr-10 ">
        <h3 class="mb-[50px] text-2xl font-bold text-white little:mb-5 smPre:mb-0 smPre:text-[22px] smPre:font-normal">
          Контакты:
        </h3>
        <a class="mb-1 text-xl font-medium text-white smPre:mb-0 smPre:text-[14px] smPre:font-normal md:text-[16px]" href="tel:+7-999-999-99-99">+7 999 999 99 99</a>
        <a class="text-xl font-medium text-white smPre:text-[14px] smPre:font-normal md:text-[16px]" href="mailto:example@mail.ru">example@mail.ru</a>
      </div>
    </div>
    <div class="mt-12 w-full flex-auto self-center border-b border-grey smPre:mb-4 smPre:mt-8 md:mt-10" />
  </footer>
</template>
