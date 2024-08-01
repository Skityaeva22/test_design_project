<script setup lang="ts">
const nameModel = ref('')
const phoneModel = ref('')
</script>

<template>
  <form class="flex h-auto w-[420px] flex-col sm:flex-grow ">
    <h3 class="mb-[34px] text-2xl font-bold text-white smPre:mb-7 smPre:font-normal">
      Остались вопросы?
    </h3>
    <InputComponent v-model="nameModel" placeholder="Имя" class="mb-5 border-grey bg-dark-grey pt-4 placeholder-grey" />
    <InputComponent v-model="phoneModel" placeholder="Телефон" class="mb-10 border-grey bg-dark-grey pt-4 placeholder-grey" />
    <CheckboxComponent class="text-base font-normal text-light-grey">
      <span>
        Даю согласие на обработку
        <a class="text-white underline decoration-grey underline-offset-4"> Персональных данных</a>
      </span>
    </CheckboxComponent>
    <button class="h-14 rounded-full bg-white font-normal text-black hover:bg-main-orange md:max-w-[240px] lg:max-w-[240px] largePost:max-w-[320px]">
      Оставить заявку
    </button>
  </form>
</template>
