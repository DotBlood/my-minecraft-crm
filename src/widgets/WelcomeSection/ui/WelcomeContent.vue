<template>
  <div class="text-white max-w-2xl text-center md:text-left">
    <!-- Заголовок -->
    <h1 class="text-4xl md:text-5xl font-bold mb-6">Добро пожаловать!</h1>

    <!-- Описание -->
    <p class="text-lg mb-8">
      Присоединяйся к увлекательному миру приключений, где ты сможешь строить,
      исследовать и сражаться вместе с друзьями. Наш сервер предлагает
      уникальные возможности для творчества и веселья. Стань частью нашего
      сообщества уже сегодня!
    </p>

    <!-- Блок с IP и онлайн -->
    <Card>
      <!-- IP-адрес -->
      <div class="flex">
        <span class="text-xl relative flex justify-center items-center">
          <div class="status status-success mr-5 animate-ping"></div>
          IP:
        </span>
        <span class="text-xl">mc.example.com</span>
        <Button @click="copyIP" title="Скопировать IP"> 📋 </Button>
      </div>

      <!-- Онлайн -->
      <div class="text-lg">
        Онлайн: <span class="font-bold">{{ online }}</span> игроков
      </div>
    </Card>
  </div>
</template>

<script setup>
import { Card } from "@entities/card";
import { Button } from "@entities/button";
import { useCopyIP } from "@features/CopyIP";
import { useServerOnline } from "@features/ServerOnline";

const { copyIP } = useCopyIP();
const { online } = useServerOnline();
</script>
