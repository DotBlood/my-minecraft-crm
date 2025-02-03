<template>
  <ULoading v-if="!isLoad" />
  <NuxtLayout v-else>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { ULoading } from "@shared/ui";
const isLoad = ref(false);

onMounted(async () => {
  isLoad.value = true;
});
</script>

<style scoped>
body {
  font-family: "Source Code Pro";
}
</style>
