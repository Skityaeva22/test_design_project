<script setup lang="ts">
</script>

<template>
  <div>
    <ElContainer>
      <ElHeader><AppHeader /></ElHeader>
      <ElMain><RouterView /></ElMain>
      <ElFooter><AppFooter /></ElFooter>
    </ElContainer>
  </div>
</template>

<style lang="scss" scoped>
:deep(.el-header) {
  padding: 0;
  height: fit-content;
}

:deep(.el-footer) {
  padding: 0;
  height: fit-content;
}

:deep(.el-main) {
  padding: 50px;
}
</style>
