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
            <NuxtLink to="/forum" class="btn btn-ghost font-medium text-[16px]">
              Форум
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/shop" class="btn btn-ghost font-medium text-[16px]">
              Магазин
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/bank" class="btn btn-ghost font-medium text-[16px]">
              Банк
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/stats" class="btn btn-ghost font-medium text-[16px]">
              Статистика
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div class="navbar-end gap-2">
        <template v-if="authStore.isAuthenticated">
          <details class="dropdown">
            <summary class="btn btn-ghost">
              <PlayerHead nick="TeddyR1p" />
            </summary>

            <ul
              class="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm mt-6"
            >
              <li><a>Профиль</a></li>
              <li><a>Личный кабинет</a></li>
              <li><a>Сообщения</a></li>
              <li><a>Уведомления</a></li>
              <div class="divider"></div>
              <li><a>Настройки</a></li>
              <li><a>Выход</a></li>
            </ul>
          </details>

          <button @click="logout" class="btn btn-ghost font-medium text-[16px]">
            Выйти
          </button>
        </template>
        <template v-else>
          <NuxtLink
            to="/auth/login"
            class="btn btn-ghost font-medium text-[16px]"
          >
            Войти
          </NuxtLink>
          <NuxtLink
            to="/auth/register"
            class="btn btn-ghost font-medium text-[16px]"
          >
            Регистрация
          </NuxtLink>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, watch } from "vue";
import { useAuthStore } from "~/stores/auth";
import { PlayerHead } from "@shared/ui";

const authStore = useAuthStore();
const isAuthenticated = computed(() => authStore.isAuthenticated);

const logout = () => {
  authStore.clearToken();
};

watch(
  () => authStore.token,
  async (newToken) => {
    if (newToken) {
      await authStore.fetchUser();
    } else {
      authStore.user = null;
    }
  },
  { immediate: true }
);
</script>
