<template>
  <div class="card bg-base-100   h-full hover:shadow-2xl border border-base-100/10 hover:border-base-100/20">
    <div class="flex flex-col h-full p-6">
      <!-- Аватар и имя -->
      <div class="flex items-center mb-4">
        <NuxtImg
          :src="avatar"
          :alt="name"
          class="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h3 class="text-xl font-bold text-dark">
            {{ name }}
          </h3>
          <div class="flex items-center mt-1">
            <span class="text-yellow-400 text-lg">★</span>
            <span class="text-dark ml-1">{{ rating }}/5</span>
          </div>
        </div>
      </div>

      <!-- Текст отзыва -->
      <p class="text-dark/70 flex-grow mb-6">
        {{ text }}
      </p>

      <!-- Дата (опционально) -->
      <p class="text-sm text-dark/50">
        2 недели назад
      </p>
    </div>
  </div>
</template>

<script setup>
import { Card } from '@entities/card';

defineProps({
  name: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
});
</script>

<style scoped>
/* Дополнительные стили для плавного hover-эффекта */
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  border-color: rgba(255, 255, 255, 0.3);
}
</style>