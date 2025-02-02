<template>
  <Dashboard>
    <h1 class="text-3xl font-bold mb-6">📝 Управление постами</h1>
    <table class="w-full border-collapse border border-gray-300">
      <thead>
        <tr class="bg-gray-200">
          <th class="border p-2">ID</th>
          <th class="border p-2">Заголовок</th>
          <th class="border p-2">Автор</th>
          <th class="border p-2">Действия</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="post in posts" :key="post.id">
          <td class="border p-2">{{ post.id }}</td>
          <td class="border p-2">{{ post.title }}</td>
          <td class="border p-2">{{ post.author }}</td>
          <td class="border p-2">
            <button
              @click="deletePost(post.id)"
              class="bg-red-500 text-white px-2 py-1 rounded"
            >
              Удалить
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </Dashboard>
</template>

<script setup>
import { Dashboard } from "@widgets/admin";
import usePosts from "../model/usePosts";

const { posts, deletePost } = usePosts();
</script>
