<template>
  <div class="min-h-screen bg-base-200 p-6 w-full">
    <!-- Заголовок -->
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-base-content">👥 Управление пользователями</h1>
      <p class="text-base-content/70">Здесь можно управлять игроками и стаффом</p>
    </div>

    <!-- Вкладки -->
    <div class="tabs mb-6">
      <a :class="['tab', currentTab === 'users' ? 'tab-active' : '']" @click="currentTab = 'users'">Игроки</a>
      <a :class="['tab', currentTab === 'staff' ? 'tab-active' : '']" @click="currentTab = 'staff'">Стафф</a>
    </div>

    <!-- Поиск -->
    <div class="mb-4">
      <input
        v-model="searchQuery"
        type="text"
        class="input input-bordered w-full"
        placeholder="🔍 Поиск по нику..."
      />
    </div>

    <!-- Таблица пользователей -->
    <div class="overflow-x-auto">
      <table class="table w-full">
        <thead>
          <tr>
            <th>Ник</th>
            <th>Роль</th>
            <th>Дата регистрации</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in filteredUsers" :key="user.id">
            <td>{{ user.name }}</td>
            <td>
              <span :class="roleClass(user.role)">{{ user.role }}</span>
            </td>
            <td>{{ formatDate(user.registeredAt) }}</td>
            <td>
              <button @click="toggleRole(user)" class="btn btn-sm btn-info mr-2">
                🔄 Изменить роль
              </button>
              <button @click="deleteUser(user.id)" class="btn btn-sm btn-error">
                ❌ Удалить
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import useUsers from "@widgets/admin/users/model/useUsers"; // Подключаем API

const { users, deleteUser, toggleRole } = useUsers();
const currentTab = ref("users"); // Текущая вкладка
const searchQuery = ref("");

// Фильтрация списка в зависимости от вкладки и поиска
const filteredUsers = computed(() => {
  const query = searchQuery.value.toLowerCase();
  return users.value
    .filter(user => currentTab.value === "users" ? user.role === "Игрок" : user.role !== "Игрок")
    .filter(user => user.name.toLowerCase().includes(query));
});

// Форматирование даты
const formatDate = (date) => new Date(date).toLocaleDateString("ru-RU");

// Классы для ролей
const roleClass = (role) => {
  return role === "Игрок"
    ? "badge badge-primary"
    : role === "Модератор"
    ? "badge badge-warning"
    : "badge badge-error";
};

definePageMeta({
  layout: "admin",
});
</script>

<style>

</style>