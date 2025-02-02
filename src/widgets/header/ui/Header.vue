<template>
  <div class="w-full bg-base-100 shadow-lg sticky top-0 left-0 right-0 z-1000">
    <div class="navbar container mx-auto h-20 p-2">
      <div class="navbar-start">
        <p class="text-2xl font-bold">Web server</p>
      </div>
      <div class="navbar-center">
        <ul class="flex gap-2">
          <li>
            <NuxtLink to="/" class="btn btn-ghost font-medium text-[16px]">
              Главная
            </NuxtLink>
          </li>
          <li>
            <NuxtLink class="btn btn-ghost font-medium text-[16px]">
              Форум
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/shop" class="btn btn-ghost font-medium text-[16px]">
              Магазин
            </NuxtLink>
          </li>
          <li>
            <NuxtLink class="btn btn-ghost font-medium text-[16px]">
              Банк
            </NuxtLink>
          </li>
          <li>
            <NuxtLink class="btn btn-ghost font-medium text-[16px]">
              Статистика
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div class="navbar-end gap-2">

        <NuxtLink v-if="isAuth" class="btn btn-ghost font-medium text-[16px]">
          Выйти
        </NuxtLink>

        <div v-else class="flex gap-2">
          <NuxtLink class="btn btn-ghost font-medium text-[16px]">
            Войти
          </NuxtLink>
          <NuxtLink class="btn btn-ghost font-medium text-[16px]">
            Регистрация
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ThemeSwitch} from '@shared/ui'
const isAuth = ref(false);
</script>
