<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <NuxtImg
      class="size-60 absolute top-35"
      src="https://psv4.userapi.com/s/v1/d/JRIXAH1jYAEmTawlFn1Wp-MgS_gokJSWk_mMkgKFYkh6eK0ZFTgegV-qcwfI7XMAhOzY88Zl3bkHFI0vVIcw0W5JI3WuJuvKdfsIA0pcBuo1Y_sAyY950Q/drakon.png"
    />
    <div class="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
      <h2 class="text-2xl font-bold text-center mb-6">Регистрация</h2>

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
import useAuth from "../model/useAuth";

const { form, handleRegister } = useAuth();
const handleSubmit = () => handleRegister();
</script>
