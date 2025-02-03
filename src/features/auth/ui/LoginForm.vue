<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <NuxtImg
      class="size-60 absolute top-35"
      src="https://psv4.userapi.com/s/v1/d/JRIXAH1jYAEmTawlFn1Wp-MgS_gokJSWk_mMkgKFYkh6eK0ZFTgegV-qcwfI7XMAhOzY88Zl3bkHFI0vVIcw0W5JI3WuJuvKdfsIA0pcBuo1Y_sAyY950Q/drakon.png"
    />
    <div class="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
      <h2 class="text-2xl font-bold text-center mb-6">Вход</h2>

      <div
        v-if="alert.message"
        :class="`alert alert-${alert.type} p-3 rounded-lg text-center mb-4`"
      >
        <span>{{ alert.message }}</span>
      </div>

      <form @submit.prevent="handleSubmit" class="space-y-4">
        <input
          v-model="form.email"
          type="email"
          class="input input-bordered w-full"
          placeholder="Email"
          required
        />
        <input
          v-model="form.password"
          type="password"
          class="input input-bordered w-full"
          placeholder="Пароль"
          required
        />

        <button type="submit" class="btn btn-primary w-full">Войти</button>
      </form>

      <p class="text-center mt-4 text-sm">
        Нет аккаунта?
        <NuxtLink to="/auth/register" class="text-blue-500"
          >Зарегистрироваться</NuxtLink
        >
      </p>
      <p class="text-center mt-2 text-sm">
        Забыли пароль?
        <NuxtLink to="/auth/recover" class="text-blue-500"
          >Восстановить</NuxtLink
        >
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useAuthStore } from "~/stores/auth";
import useAuth from "../model/useAuth";

const { form, handleLogin } = useAuth();
const authStore = useAuthStore();
const alert = ref({ message: "", type: "" });

const handleSubmit = async () => {
  try {
    const response = await handleLogin();
    console.log("Ответ сервера в handleSubmit:", response);

    if (response.token) {
      authStore.setToken(response.token);
      await authStore.fetchUser();
      alert.value = { message: response.text, type: response.type };
    } else {
      alert.value = { message: response.text, type: response.type };
    }

    setTimeout(() => {
      alert.value = { message: "", type: "" };
    }, 5000);
  } catch (error) {
    console.error("Ошибка при обработке входа:", error);
    alert.value = {
      message: "Ошибка при входе. Попробуйте снова.",
      type: "error",
    };
  }
};
</script>
