<template>
  <div class="min-h-screen bg-base-200 p-6 w-full">
    <!-- Заголовок -->
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-base-content">Добавить новый пост</h1>
      <p class="text-base-content/70">Заполните форму для публикации</p>
    </div>

    <!-- Форма для создания поста -->
    <div class="bg-white p-6 rounded-xl shadow-md w-full max-w-2xl mx-auto">
      <form @submit.prevent="submitPost" class="space-y-4">
        <!-- Заголовок поста -->
        <div>
          <label class="block text-lg font-semibold mb-2"
            >Заголовок поста</label
          >
          <input
            v-model="post.title"
            type="text"
            class="input input-bordered w-full"
            placeholder="Введите заголовок"
            required
          />
        </div>

        <!-- Контент поста -->
        <div>
          <label class="block text-lg font-semibold mb-2">Контент</label>
          <textarea
            v-model="post.content"
            class="textarea textarea-bordered w-full"
            rows="6"
            placeholder="Введите текст поста"
            required
          ></textarea>
        </div>

        <!-- Загрузка изображения -->
        <div>
          <label class="block text-lg font-semibold mb-2"
            >Изображение (опционально)</label
          >
          <input
            type="file"
            @change="handleImageUpload"
            class="file-input file-input-bordered w-full"
          />
        </div>

        <!-- Превью изображения -->
        <div v-if="post.imageUrl" class="mt-4">
          <p class="text-sm text-base-content/70">Превью изображения:</p>
          <img
            :src="post.imageUrl"
            alt="Preview"
            class="mt-2 rounded-lg shadow-md max-h-40"
          />
        </div>

        <!-- Кнопка публикации -->
        <button type="submit" class="btn btn-primary w-full">
          📢 Опубликовать пост
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import usePosts from "@widgets/admin/posts/model/usePosts"; // Подключаем API

const { addPost } = usePosts();

// Данные поста
const post = ref({
  title: "",
  content: "",
  imageUrl: "",
});

// Обработка загрузки изображения
const handleImageUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      post.value.imageUrl = e.target.result;
    };
    reader.readAsDataURL(file);
  }
};

// Отправка поста
const submitPost = async () => {
  if (!post.value.title.trim() || !post.value.content.trim()) {
    alert("Заполните заголовок и контент!");
    return;
  }

  await addPost({
    title: post.value.title,
    content: post.value.content,
    imageUrl: post.value.imageUrl || null,
    createdAt: new Date().toISOString(),
  });

  alert("Пост успешно опубликован!");

  // Очистка формы
  post.value = {
    title: "",
    content: "",
    imageUrl: "",
  };
};

definePageMeta({
  layout: "admin",
});
</script>
