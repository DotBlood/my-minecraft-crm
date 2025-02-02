<template>
  <div class="h-screen flex">
    <!-- Боковая панель -->
    <aside class="bg-white shadow-lg p-4 w-70 h-full">
      <h2 class="text-2xl font-bold text-center mb-6">⚙️ Админ-панель</h2>
      <nav class="space-y-4">
        <NuxtLink to="/admin" class="btn block text-lg">Информация</NuxtLink>
        <NuxtLink to="/admin/users" class="btn block text-lg"
          >👥 Пользователи</NuxtLink
        >
        <NuxtLink to="/admin/posts" class="btn block text-lg"
          >📝 Посты</NuxtLink
        >
        <NuxtLink to="/admin/products" class="btn block text-lg"
          >🛒 Товары</NuxtLink
        >
      </nav>
    </aside>
  </div>
</template>
