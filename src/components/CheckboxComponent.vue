<script setup>
</script>

<template>
  <div class="mb-6">
    <label class="custom-checkbox">
      <input class="visually-hidden hidden" type="checkbox">
      <span class="checker flex">
        <slot />
      </span>
    </label>
  </div>
</template>

<style scoped>
  .visually-hidden + .checker::before {
    content: '';
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 1px solid #E1E1E1;
    margin-right: 12px;
    flex-shrink: 0;
  }

  .visually-hidden:checked + .checker::before {
    border-color: #FFF;
    background-color: #57595B;
    background-image: url("../assets/images/confirm.svg");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 90% 90%;
  }
</style>
