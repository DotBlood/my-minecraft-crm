<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <NuxtImg
    class="size-60 absolute top-35"
    src="https://psv4.userapi.com/s/v1/d/JRIXAH1jYAEmTawlFn1Wp-MgS_gokJSWk_mMkgKFYkh6eK0ZFTgegV-qcwfI7XMAhOzY88Zl3bkHFI0vVIcw0W5JI3WuJuvKdfsIA0pcBuo1Y_sAyY950Q/drakon.png"
  />
    <div class="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
      <h2 class="text-2xl font-bold text-center mb-6">🔑 Восстановление пароля</h2>

      <!-- Шаг 1: Ввод email -->
      <form v-if="step === 1" @submit.prevent="sendOtp" class="space-y-4">
        <input
          v-model="email"
          type="email"
          class="input input-bordered w-full"
          placeholder="Введите ваш email"
          required
        />
        <button type="submit" class="btn btn-primary w-full">Отправить код</button>
      </form>

      <!-- Шаг 2: Ввод OTP -->
      <form v-if="step === 2" @submit.prevent="verifyOtp" class="space-y-4">
        <input
          v-model="otpCode"
          type="text"
          class="input input-bordered w-full"
          placeholder="Введите код из email"
          required
        />
        <button type="submit" class="btn btn-success w-full">Подтвердить</button>
      </form>

      <!-- Шаг 3: Новый пароль -->
      <form v-if="step === 3" @submit.prevent="resetPassword" class="space-y-4">
        <input
          v-model="newPassword"
          type="password"
          class="input input-bordered w-full"
          placeholder="Введите новый пароль"
          required
        />
        <button type="submit" class="btn btn-success w-full">Сохранить новый пароль</button>
      </form>

      <p class="text-center mt-4 text-sm">
        <NuxtLink to="/auth/login" class="text-blue-500">Вернуться к входу</NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup>
import useRecover from "../model/useRecover";

const { step, email, otpCode, newPassword, sendOtp, verifyOtp, resetPassword } = useRecover();
</script>
