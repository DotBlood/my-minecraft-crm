<template>
  <div class="bg-white p-6 rounded-xl shadow-lg">
    <h2 class="text-2xl font-bold mb-4">👥 Список пользователей</h2>

    <div v-if="users.length" class="overflow-x-auto">
      <table class="table w-full">
        <thead>
          <tr>
            <th>ID</th>
            <th>Имя</th>
            <th>Роль</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>
              <select v-model="user.role" @change="updateRole(user.id, user.role)" class="select select-bordered w-full">
                <option value="Администратор">Администратор</option>
                <option value="Модератор">Модератор</option>
                <option value="Пользователь">Пользователь</option>
              </select>
            </td>
            <td>
              <button @click="deleteUser(user.id)" class="btn btn-sm btn-error">🗑️ Удалить</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <p v-else class="text-center text-lg text-base-content/50">Нет пользователей</p>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  users: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(["updateRole", "deleteUser"]);

const updateRole = (id, newRole) => {
  emit("updateRole", id, newRole);
};

const deleteUser = (id) => {
  emit("deleteUser", id);
};
</script>
