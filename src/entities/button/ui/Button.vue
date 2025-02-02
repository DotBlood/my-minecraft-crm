<template>
  <button class="btn btn-ghost size-8 rounded transition-colors" @click="$emit('click')">
    <slot />
  </button>
</template>

<script setup>
defineEmits(["click"]);
</script>
