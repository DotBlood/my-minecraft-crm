<template>
  <footer class="footer flex justify-between p-10 bg-base-200 text-base-content w-full">
    <!-- Лого и описание -->
    <div>
      <div class="flex items-center gap-2">
        <NuxtImg
          src="https://psv4.userapi.com/s/v1/d/JRIXAH1jYAEmTawlFn1Wp-MgS_gokJSWk_mMkgKFYkh6eK0ZFTgegV-qcwfI7XMAhOzY88Zl3bkHFI0vVIcw0W5JI3WuJuvKdfsIA0pcBuo1Y_sAyY950Q/drakon.png"
          alt="Логотип"
          class="w-12 h-12"
        />
        <span class="text-2xl font-bold">Minecraft Server</span>
      </div>
      <p class="mt-4 text-base-content/70">
        Лучший сервер для приключений, творчества и веселья!
      </p>
    </div>

    <!-- Навигация -->
    <div>
      <span class="footer-title">Навигация</span>
      <a class="link link-hover">Главная</a>
      <a class="link link-hover">Режимы игры</a>
      <a class="link link-hover">Отзывы</a>
      <a class="link link-hover">Топы игроков</a>
    </div>

    <!-- Социальные сети -->
    <div>
      <span class="footer-title">Социальные сети</span>
      <div class="flex gap-4">
        <a
          href="https://discord.gg/example"
          target="_blank"
          class="text-base-content hover:text-blue-500"
        >
          <Icon name="logos:discord-icon" class="w-6 h-6" />
        </a>
        <a
          href="https://vk.com/example"
          target="_blank"
          class="text-base-content hover:text-blue-500"
        >
          <Icon name="logos:vk" class="w-6 h-6" />
        </a>
        <a
          href="https://youtube.com/example"
          target="_blank"
          class="text-base-content hover:text-blue-500"
        >
          <Icon name="logos:youtube-icon" class="w-6 h-6" />
        </a>
      </div>
    </div>

    <!-- Контактная информация -->
    <div>
      <span class="footer-title">Контакты</span>
      <p class="text-base-content/70">Email: support@example.com</p>
      <p class="text-base-content/70">Телефон: +7 (123) 456-78-90</p>
    </div>
  </footer>

  <!-- Копирайт -->
  <div class="footer footer-center p-4 bg-base-300 text-base-content">
    <p>© 2023 Minecraft Server. Все права защищены.</p>
  </div>
</template>

<script setup></script>
