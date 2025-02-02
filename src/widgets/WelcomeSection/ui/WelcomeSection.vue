<template>
  <section
    class="welcome h-[calc(100vh-80px)] relative flex items-center justify-center"
  >
    <!-- Затемнение фона -->
    <div class="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

    <!-- Контент -->
    <div
      class="relative z-10 container mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-8"
    >
      <!-- Левая часть: текст и кнопки -->
      <WelcomeContent />

      <!-- Правая часть: изображение -->
      <WelcomeImage />
    </div>
  </section>
</template>

<script setup>
import { WelcomeContent } from "@widgets/WelcomeSection";
import { WelcomeImage } from "@widgets/WelcomeSection";
</script>

<style scoped>
.welcome {
  background-image: url("https://p4.wallpaperbetter.com/wallpaper/897/632/977/minecraft-shaders-landscape-video-games-hd-wallpaper-preview.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
