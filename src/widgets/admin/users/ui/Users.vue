<template>
  <Dashboard>
    <h1 class="text-3xl font-bold mb-6">👥 Управление пользователями</h1>
    <table class="w-full border-collapse border border-gray-300">
      <thead>
        <tr class="bg-gray-200">
          <th class="border p-2">ID</th>
          <th class="border p-2">Имя</th>
          <th class="border p-2">Роль</th>
          <th class="border p-2">Действия</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td class="border p-2">{{ user.id }}</td>
          <td class="border p-2">{{ user.name }}</td>
          <td class="border p-2">{{ user.role }}</td>
          <td class="border p-2">
            <button @click="deleteUser(user.id)" class="bg-red-500 text-white px-2 py-1 rounded">Удалить</button>
          </td>
        </tr>
      </tbody>
    </table>
  </Dashboard>
</template>

<script setup>
import {Dashboard} from "@widgets/admin";
import useUsers from "../model/useUsers";

const { users, deleteUser } = useUsers();
</script>
