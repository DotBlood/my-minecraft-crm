<template>
  <section class="py-16 bg-base-300 h-screen">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl md:text-5xl font-bold text-dark text-center mb-12">
        Магазин
      </h2>

      <!-- Категории -->
      <div class="flex justify-center gap-4 mb-8">
        <button
          v-for="category in categories"
          :key="category"
          @click="selectedCategory = category"
          :class="[
            'btn',
            selectedCategory === category ? 'btn-primary' : 'btn-ghost',
          ]"
        >
          {{ category }}
        </button>
      </div>

      <!-- Товары -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ShopProductCard
          v-for="product in filteredProducts"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import { ShopProductCard } from "@widgets/ShopSection";
import { shopProducts } from "../config/index";

const categories = ["Привилегии", "Валюта", "Кейсы", "Другое"];
const selectedCategory = ref("Привилегии");

const filteredProducts = computed(() => {
  return shopProducts.filter(
    (product) => product.category === selectedCategory.value
  );
});
</script>
