<template>
  <div v-if="product" class="bg-base-100 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
    <NuxtImg 
      v-if="product.image"
      :src="product.image" 
      class="w-full h-48 object-cover"
      alt="Изображение товара"
    />
    <div class="p-4">
      <h3 class="text-lg font-bold">{{ product.name || "Без названия" }}</h3>
      <p class="text-sm text-base-content/70 mt-1">{{ product.description || "Нет описания" }}</p>
      <div class="flex items-center justify-between mt-4">
        <span class="text-xl font-semibold text-primary">{{ formattedPrice }}</span>
        <button @click="addToCart" class="btn btn-primary">Купить</button>
      </div>
    </div>
  </div>
  <div v-else class="text-center text-base-content/50">Ошибка загрузки товара</div>
</template>

<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
  product: {
    type: Object,
    required: true,
    default: () => ({
      name: "Без названия",
      description: "Нет описания",
      price: 0,
      image: "",
    }),
  },
});

const formattedPrice = computed(() => {
  return new Intl.NumberFormat("ru-RU", { style: "currency", currency: "RUB" }).format(props.product.price || 0);
});

const addToCart = () => {
  console.log(`Товар "${props.product.name}" добавлен в корзину!`);
};
</script>
