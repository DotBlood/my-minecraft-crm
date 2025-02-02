<template>
    <section class="py-16 bg-base-200">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl md:text-5xl font-bold text-dark text-center mb-12">
          Частые вопросы
        </h2>
  
        <div class="max-w-2xl mx-auto">
          <div
            v-for="(faq, index) in faqs"
            :key="index"
            class="mb-6"
          >
            <h3 class="text-xl font-bold text-dark mb-2">
              {{ faq.question }}
            </h3>
            <p class="text-dark/70">
              {{ faq.answer }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const faqs = [
    {
      question: 'Как присоединиться к серверу?',
      answer: 'Просто введи IP-адрес сервера в клиенте Minecraft и нажми "Подключиться".',
    },
    {
      question: 'Есть ли на сервере донат?',
      answer: 'Да, на сервере есть магазин, где можно приобрести привилегии и другие полезные вещи.',
    },
    {
      question: 'Как стать модератором?',
      answer: 'Для этого нужно проявить активность на сервере и подать заявку в Discord.',
    },
  ];
  </script>