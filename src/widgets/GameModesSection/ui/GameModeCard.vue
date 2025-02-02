<template>
  <div
    class="card h-full transform transition-all bg-base-100 duration-300 hover:shadow-2xl border border-base-100/10 hover:border-base-100/20"
  >
    <div class="flex flex-col h-full">
      <!-- Изображение -->
      <NuxtImg
        :src="image"
        :alt="title"
        class="w-full h-48 object-cover rounded-t-lg"
      />

      <!-- Контент -->
      <div class="p-6 flex flex-col flex-grow">
        <!-- Заголовок -->
        <h3 class="text-2xl font-bold text-dark mb-4">
          {{ title }}
        </h3>

        <!-- Описание -->
        <p class="text-dark/50 flex-grow mb-6">
          {{ description }}
        </p>

        <!-- Кнопка -->
        <button class="btn w-fit btn-ghost"> Подробнее </button>
      </div>
    </div>
  </div>
</template>

<script setup>

defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
/* Дополнительные стили для плавного hover-эффекта */
</style>
