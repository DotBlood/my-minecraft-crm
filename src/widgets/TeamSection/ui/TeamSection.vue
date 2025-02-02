<template>
    <section class="py-16 bg-base-100">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl md:text-5xl font-bold text-dark text-center mb-12">
          Наша команда
        </h2>
  
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="member in teamMembers"
            :key="member.name"
            class="text-center"
          >
            <NuxtImg
              :src="member.avatar"
              :alt="member.name"
              class="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 class="text-2xl font-bold text-dark mb-2">
              {{ member.name }}
            </h3>
            <p class="text-dark/70">
              {{ member.role }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const teamMembers = [
    {
      name: 'Админ',
      role: 'Главный администратор',
      avatar: 'https://i.imgur.com/1QZQZQz.png',
    },
    {
      name: 'Модератор',
      role: 'Модератор сервера',
      avatar: 'https://i.imgur.com/2QZQZQz.png',
    },
    {
      name: 'Разработчик',
      role: 'Разработчик плагинов',
      avatar: 'https://i.imgur.com/3QZQZQz.png',
    },
  ];
  </script>