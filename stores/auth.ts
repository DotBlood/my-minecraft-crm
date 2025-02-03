// stores/auth.ts
import { defineStore } from "pinia";
import { computed, ref } from "vue";

interface User {
  id: string;
  username: string;
  avatar: string;
  reputation: number;
  character: { name: string; level: number } | null;
  otpEnabled: boolean;
}

export const useAuthStore = defineStore("auth", () => {
  const token = ref<string>(localStorage.getItem("token") || "");
  const user = ref<User | null>(null);

  const isAuthenticated = computed(() => !!token.value);

  const setToken = (newToken: string) => {
    token.value = newToken;
    localStorage.setItem("token", newToken);
  };

  const clearToken = () => {
    token.value = "";
    localStorage.removeItem("token");
    user.value = null;
  };

  const fetchUser = async () => {
    if (!token.value) return;
    try {
      const response = await $fetch("/api/auth/v1/user", {
        headers: { Authorization: `Bearer ${token.value}` },
      });
      if (response.user) {
        user.value = response.user;
      }
    } catch (error) {
      console.error("Ошибка получения пользователя:", error);
      clearToken();
    }
  };

  return {
    token,
    user,
    isAuthenticated,
    setToken,
    clearToken,
    fetchUser,
  };
});