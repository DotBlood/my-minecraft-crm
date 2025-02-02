<template>
  <div class="container mx-auto px-4 py-8">
    <h2 class="text-3xl font-bold mb-6 text-center">{{ title }}</h2>
    <div
      v-if="products.length"
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
    >
      <ShopProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
    <p v-else class="text-center text-lg text-base-content/50">
      Нет доступных товаров
    </p>
  </div>
</template>

<script setup>
import { ShopProductCard } from "@widgets/ShopSection";

defineProps({
  title: {
    type: String,
    default: "Наши товары",
  },
  products: {
    type: Array,
    required: true,
    default: () => [],
  },
});
</script>
