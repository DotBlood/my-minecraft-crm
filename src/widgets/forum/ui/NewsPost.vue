<template>
  <NuxtLink :to="`/forum/${news?.id}`" class="block p-4 hover:bg-base-200 transition-colors">
    <template v-if="news?.image">
      <NuxtImg 
        :src="news.image" 
        class="w-full h-40 object-cover rounded-lg mb-4"
      />
    </template>
    <h3 class="text-xl font-bold">{{ news?.title || "Без заголовка" }}</h3>
    <p class="text-base-content/70 mt-2 line-clamp-3">{{ news?.content || "Нет контента" }}</p>
    <div class="flex items-center justify-between mt-4">
      <span class="text-sm">{{ news?.createdAt || "Неизвестно" }}</span>
      <button class="btn btn-ghost btn-sm">Читать →</button>
    </div>
  </NuxtLink>
</template>

<script setup>
defineProps({
  news: {
    type: Object,
    required: true,
    default: () => ({
      id: 0,
      title: "Без заголовка",
      content: "Нет контента",
      createdAt: "Неизвестно",
      image: null,
    }),
  },
});
</script>
