<template>
  <div class="flex items-start gap-3">
    <NuxtImg 
      :src="message?.author?.avatar || '/default-avatar.png'" 
      class="w-8 h-8 rounded-full mt-1" 
    />
    <div class="flex-1 bg-base-300 rounded-lg p-3">
      <div class="flex items-center gap-2">
        <span class="font-semibold">{{ message?.author?.name || "Аноним" }}</span>
        <span class="text-xs text-base-content/50">{{
          formatTime(message?.timestamp)
        }}</span>
      </div>
      <p class="mt-1">{{ message?.content || "Нет сообщения" }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  message: {
    type: Object,
    required: true,
    default: () => ({
      author: { name: "Аноним", avatar: "/default-avatar.png" },
      content: "Нет сообщения",
      timestamp: new Date(),
    }),
  },
});

const formatTime = (timestamp) => {
  return new Date(timestamp).toLocaleTimeString();
};
</script>
