<template>
  <div class="flex w-full">
    <Dashboard />
    <slot />
  </div>
</template>

<script lang="ts" setup>
import Dashboard from "@/widgets/admin/dashboard/ui/Dashboard.vue";
</script>

<style></style>
