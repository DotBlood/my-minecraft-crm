<template>
  <div class="min-h-screen bg-base-100 p-6">
    <div class="container mx-auto">
      <h1 class="text-3xl font-bold mb-6">Личный кабинет</h1>

      <!-- Блок с информацией о пользователе -->
      <div class="bg-base-200 p-6 rounded-lg shadow-md">
        <div class="flex items-center gap-4 mb-6">
          <!-- Иконка пользователя -->
          <div class="avatar">
            <div class="w-24 rounded-full">
              <img :src="user.avatar || '/default-avatar.png'" alt="Аватар" />
            </div>
          </div>

          <!-- Никнейм и репутация -->
          <div>
            <h2 class="text-2xl font-bold">{{ user.username }}</h2>
            <p class="text-gray-500">Репутация: {{ user.reputation }}</p>
          </div>
        </div>

        <!-- Привязка к персонажу -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Привязка к персонажу</h3>
          <div v-if="user.character">
            <p class="text-gray-500">
              Персонаж: {{ user.character.name }} (Уровень: {{ user.character.level }})
            </p>
          </div>
          <div v-else>
            <p class="text-gray-500">Персонаж не привязан.</p>
            <button class="btn btn-primary mt-2" @click="linkCharacter">
              Привязать персонажа
            </button>
          </div>
        </div>

        <!-- Настройки OTP -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Двухфакторная аутентификация (OTP)</h3>
          <div class="flex items-center gap-2">
            <p class="text-gray-500">
              OTP: {{ user.otpEnabled ? "Включен" : "Выключен" }}
            </p>
            <button
              class="btn btn-sm"
              :class="user.otpEnabled ? 'btn-error' : 'btn-success'"
              @click="toggleOTP"
            >
              {{ user.otpEnabled ? "Выключить" : "Включить" }}
            </button>
          </div>
        </div>

        <!-- Смена пароля -->
        <div class="mb-6">
          <h3 class="text-xl font-semibold mb-2">Смена пароля</h3>
          <div v-if="user.otpEnabled">
            <form @submit.prevent="changePassword">
              <div class="space-y-4">
                <input
                  v-model="passwordForm.oldPassword"
                  type="password"
                  class="input input-bordered w-full"
                  placeholder="Старый пароль"
                  required
                />
                <input
                  v-model="passwordForm.newPassword"
                  type="password"
                  class="input input-bordered w-full"
                  placeholder="Новый пароль"
                  required
                />
                <button type="submit" class="btn btn-primary">
                  Сменить пароль
                </button>
              </div>
            </form>
          </div>
          <div v-else>
            <p class="text-gray-500">
              Для смены пароля через сайт включите OTP. Или смените пароль через игру.
            </p>
          </div>
        </div>

        <!-- Репутация -->
        <div>
          <h3 class="text-xl font-semibold mb-2">Репутация</h3>
          <p class="text-gray-500">
            Ваша репутация: {{ user.reputation }} очков.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useAuthStore } from "~/stores/auth";

const authStore = useAuthStore();

// Данные пользователя
const user = ref({
  username: "",
  avatar: "",
  reputation: 0,
  character: null, // { name: "Имя персонажа", level: 10 }
  otpEnabled: false,
});

// Форма для смены пароля
const passwordForm = ref({
  oldPassword: "",
  newPassword: "",
});

// Загрузка данных пользователя
onMounted(async () => {
  if (authStore.isAuthenticated) {
    await authStore.fetchUser();
    user.value = {
      username: authStore.user?.username || "Пользователь",
      avatar: authStore.user?.avatar || "/default-avatar.png",
      reputation: authStore.user?.reputation || 0,
      character: authStore.user?.character || null,
      otpEnabled: authStore.user?.otpEnabled || false,
    };
  }
});

// Привязка персонажа
const linkCharacter = () => {
  // Здесь можно добавить логику для привязки персонажа
  console.log("Привязка персонажа...");
  user.value.character = { name: "Новый персонаж", level: 1 };
};

// Включение/выключение OTP
const toggleOTP = async () => {
  try {
    const response = await $fetch("/api/user/toggle-otp", {
      method: "POST",
      headers: { Authorization: `Bearer ${authStore.token}` },
    });

    if (response.success) {
      user.value.otpEnabled = !user.value.otpEnabled;
    }
  } catch (error) {
    console.error("Ошибка при изменении OTP:", error);
  }
};

// Смена пароля
const changePassword = async () => {
  try {
    const response = await $fetch("/api/user/change-password", {
      method: "POST",
      headers: { Authorization: `Bearer ${authStore.token}` },
      body: passwordForm.value,
    });

    if (response.success) {
      alert("Пароль успешно изменён!");
      passwordForm.value = { oldPassword: "", newPassword: "" };
    } else {
      alert("Ошибка при смене пароля: " + response.message);
    }
  } catch (error) {
    console.error("Ошибка при смене пароля:", error);
    alert("Ошибка при смене пароля. Попробуйте снова.");
  }
};
</script>