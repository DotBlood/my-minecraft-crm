<template>
  <section class="py-16 bg-base-100">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl md:text-5xl font-bold text-dark text-center mb-12">
        Новости сервера
      </h2>

      <div class="">
        <!-- Карточка новости -->
        <div
          v-for="news in serverNews"
          :key="news.id"
          class="card bg-base-200 shadow-xl transition-all hover:shadow-2xl"
        >
          <!-- Изображение -->
          <NuxtImg
            :src="news.image"
            :alt="news.title"
            class="w-full h-100 object-cover rounded-t-lg"
          />

          <!-- Контент -->
          <div class="card-body">
            <h3 class="card-title text-2xl font-bold text-dark">
              {{ news.title }}
            </h3>
            <p class="text-dark/70 mb-4">
              {{ news.description }}
            </p>
            <div class="card-actions justify-end">
              <NuxtLink
                class="btn bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
              >
                Читать дальше
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const serverNews = [
  {
    id: 1,
    title: "Новый режим: Выживание+",
    description:
      "Мы добавили новый режим с улучшенной механикой выживания и уникальными мобами.",
    image: "https://i.imgur.com/1QZQZQz.png",
  },
];
</script>
