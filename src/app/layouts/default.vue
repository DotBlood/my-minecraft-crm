<template>
  <UHeader />
  <div class="w-full min-h-[calc(100vh-80px)] bg-base-200 overflow-hidden">
    <slot />
  </div>
  <Footer />
</template>

<script lang="ts" setup>
import { UHeader } from "@widgets/header";
import { Footer } from "@widgets/Footer";
</script>

<style></style>
