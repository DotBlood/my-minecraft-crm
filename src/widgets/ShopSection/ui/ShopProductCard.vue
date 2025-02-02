<template>
  <div
    class="card bg-base-100 h-full transform transition-all hover:shadow-2xl border border-base-100/10 hover:border-base-100/20"
  >
    <div class="flex flex-col h-full p-6">
      <!-- Изображение -->
      <NuxtImg
        :src="product.image"
        :alt="product.name"
        class="w-full h-48 object-cover rounded-lg mb-4"
      />

      <!-- Название и описание -->
      <h3 class="text-2xl font-bold text-dark mb-2">
        {{ product.name }}
      </h3>
      <p class="text-dark/70 flex-grow mb-4">
        {{ product.description }}
      </p>

      <!-- Цена и кнопка -->
      <div class="flex items-center justify-between">
        <span class="text-xl font-bold text-dark"> {{ product.price }} ₽ </span>
        <button
          class="btn bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
        >
          Купить
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>
