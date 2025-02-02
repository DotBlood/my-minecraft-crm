<template>
  <div class="bg-white p-6 rounded-xl shadow-lg mt-10">
    <h2 class="text-2xl font-bold mb-4">📝 Список постов</h2>

    <div v-if="posts.length" class="overflow-x-auto">
      <table class="table w-full">
        <thead>
          <tr>
            <th>ID</th>
            <th>Заголовок</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="post in posts" :key="post.id">
            <td>{{ post.id }}</td>
            <td>{{ post.title }}</td>
            <td>
              <button @click="editPost(post)" class="btn btn-sm btn-warning">✏️ Редактировать</button>
              <button @click="deletePost(post.id)" class="btn btn-sm btn-error ml-2">🗑️ Удалить</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <p v-else class="text-center text-lg text-base-content/50">Нет постов</p>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  posts: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(["editPost", "deletePost"]);

const editPost = (post) => {
  emit("editPost", post);
};

const deletePost = (id) => {
  emit("deletePost", id);
};
</script>
