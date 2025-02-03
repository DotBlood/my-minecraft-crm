<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <NuxtImg
      class="size-60 absolute top-35"
      src="https://psv4.userapi.com/s/v1/d/JRIXAH1jYAEmTawlFn1Wp-MgS_gokJSWk_mMkgKFYkh6eK0ZFTgegV-qcwfI7XMAhOzY88Zl3bkHFI0vVIcw0W5JI3WuJuvKdfsIA0pcBuo1Y_sAyY950Q/drakon.png"
    />
    <div class="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
      <h2 class="text-2xl font-bold text-center mb-6">Регистрация</h2>

      <!-- Alert -->
      <div v-if="alert.message" :class="`alert alert-${alert.type} p-3 rounded-lg text-center mb-4`">
        <span>{{ alert.message }}</span>
      </div>

      <form @submit.prevent="handleSubmit" class="space-y-4">
        <input
          v-model="form.username"
          type="text"
          class="input input-bordered w-full"
          placeholder="Имя пользователя"
          required
        />
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

        <button type="submit" class="btn btn-primary w-full">
          Зарегистрироваться
        </button>
      </form>

      <p class="text-center mt-4 text-sm">
        Уже есть аккаунт?
        <NuxtLink to="/auth/login" class="text-blue-500">Войти</NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import useAuth from "../model/useAuth";

const { form, handleRegister } = useAuth();
const alert = ref({ message: "", type: "" });

const handleSubmit = async () => {
  try {
    const response = await handleRegister();
    
    console.log("Ответ сервера:", response);

    if (response?.text) {
      alert.value.message = response.text;
      alert.value.type = response.type;
    } else {
      alert.value.message = "Неизвестная ошибка";
      alert.value.type = "error";
    }

    setTimeout(() => {
      alert.value.message = "";
      alert.value.type = "";
    }, 5000);
  } catch (error) {
    console.error("Ошибка при регистрации:", error);
    alert.value.message = "Ошибка при регистрации. Попробуйте снова.";
    alert.value.type = "error";
  }
};
</script>
