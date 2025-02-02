<template>
  <NuxtLink :to="`/forum/${topic?.id}`" class="block p-4 hover:bg-base-200 transition-colors">
    <div class="flex items-start gap-4">
      <NuxtImg 
        :src="topic?.author?.avatar || '/default-avatar.png'" 
        class="w-12 h-12 rounded-full"
      />
      <div class="flex-1">
        <div class="flex items-center gap-2">
          <h3 class="text-lg font-semibold">{{ topic?.title || "Без заголовка" }}</h3>
          <span v-if="pinned" class="text-xs text-red-500">📌 Закреплено</span>
        </div>
        <p class="text-sm text-base-content/70 mt-1">{{ topic?.content || "Нет описания" }}</p>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
defineProps({
  topic: {
    type: Object,
    required: true,
    default: () => ({
      id: 0,
      title: "Без заголовка",
      content: "Нет описания",
      author: { avatar: "/default-avatar.png" },
    }),
  },
  pinned: {
    type: Boolean,
    default: false,
  },
});
</script>
