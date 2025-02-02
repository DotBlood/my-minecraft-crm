<template>
  <div class="min-h-screen bg-base-200">
    <main class="container mx-auto px-4 py-8">
      <div v-if="topic" class="bg-base-100 rounded-xl shadow-lg p-6">
        <!-- Заголовок -->
        <h1 class="text-3xl font-bold">{{ topic.title }}</h1>
        <div class="flex items-center gap-4 mt-2 text-sm text-base-content/60">
          <NuxtImg 
            :src="topic.author?.avatar || '/default-avatar.png'" 
            class="w-10 h-10 rounded-full" 
          />
          <span>{{ topic.author?.name || "Аноним" }}</span>
          <span>•</span>
          <span>{{ formatDate(topic.createdAt) }}</span>
        </div>

        <!-- Описание -->
        <p class="mt-4 text-lg">{{ topic.content }}</p>
      </div>
      <div v-else class="text-center text-lg font-semibold text-base-content/70">Загрузка...</div>

      <!-- Комментарии -->
      <div class="mt-8 bg-base-100 rounded-xl shadow-lg p-6">
        <h2 class="text-2xl font-bold">💬 Комментарии</h2>
        <div v-if="comments.length" class="mt-4 space-y-4">
          <div v-for="comment in comments" :key="comment.id" class="p-4 border-b border-base-300">
            <div class="flex items-center gap-3">
              <NuxtImg 
                :src="comment.author.avatar || '/default-avatar.png'" 
                class="w-8 h-8 rounded-full" 
              />
              <span class="font-semibold">{{ comment.author.name }}</span>
              <span class="text-xs text-base-content/50">{{ formatDate(comment.createdAt) }}</span>
            </div>
            <p class="mt-2">{{ comment.content }}</p>
          </div>
        </div>
        <p v-else class="mt-4 text-base-content/50">Комментариев пока нет.</p>
      </div>

      <!-- Форма добавления комментария -->
      <div class="mt-8 bg-base-100 rounded-xl shadow-lg p-6">
        <h2 class="text-2xl font-bold">➕ Добавить комментарий</h2>
        <textarea
          v-model="newComment"
          class="textarea textarea-bordered w-full mt-4"
          placeholder="Введите ваш комментарий..."
        ></textarea>
        <button @click="submitComment" class="btn btn-primary mt-4" :disabled="loading">Отправить</button>
      </div>
    </main>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';

const route = useRoute();
const topic = ref(null);
const comments = ref([]);
const newComment = ref("");
const loading = ref(false);

const fetchTopic = async () => {
  try {
    const response = await fetch(`https://api.example.com/forum/${route.params.id}`);
    topic.value = await response.json();
  } catch (error) {
    console.error("Ошибка загрузки темы:", error);
  }
};

const fetchComments = async () => {
  try {
    const response = await fetch(`https://api.example.com/forum/${route.params.id}/comments`);
    comments.value = await response.json();
  } catch (error) {
    console.error("Ошибка загрузки комментариев:", error);
  }
};

const submitComment = async () => {
  if (newComment.value.trim() === "") return;
  loading.value = true;
  try {
    const response = await fetch(`https://api.example.com/forum/${route.params.id}/comments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        author: { name: "Вы", avatar: "/default-avatar.png" },
        content: newComment.value,
        createdAt: new Date().toISOString(),
      }),
    });
    if (response.ok) {
      const newCommentData = await response.json();
      comments.value.push(newCommentData);
      newComment.value = "";
    } else {
      console.error("Ошибка при отправке комментария");
    }
  } catch (error) {
    console.error("Ошибка сети:", error);
  } finally {
    loading.value = false;
  }
};

const formatDate = (date) => {
  return new Date(date).toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

onMounted(() => {
  fetchTopic();
  fetchComments();
});
</script>
