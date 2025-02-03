// useAuth.ts
import { ref } from "vue";

const form = ref({
  username: "",
  email: "",
  password: "",
});

const token = ref("");

if (typeof window !== "undefined") {
  token.value = localStorage.getItem("token") || "";
}

type AuthResponse =
  | { message: string; token: string; alert: { type: string; text: string } }
  | { error: string; alert?: { type: string; text: string } };

const handleLogin = async () => {
  try {
    const response: AuthResponse = await $fetch("/api/auth/v1/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: form.value.email,
        password: form.value.password,
      }),
    });

    if ("token" in response) {
      token.value = response.token;

      if (typeof window !== "undefined") {
        localStorage.setItem("token", response.token);
      }

      return {
        token: response.token,
        text: response.alert?.text ?? "Вход успешен!",
        type: response.alert?.type ?? "success",
      };
    } else {
      return {
        text: response.alert?.text ?? response.error ?? "Ошибка при входе",
        type: "error",
      };
    }
  } catch (error) {
    return { text: "Ошибка при входе. Попробуйте снова.", type: "error" };
  }
};

const handleRegister = async () => {
  try {
    const response: AuthResponse = await $fetch("/api/auth/v1/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: form.value.email,
        password: form.value.password,
        username: form.value.username,
      }),
    });

    if ("token" in response) {
      return { text: "Регистрация успешна!", type: "success" };
    } else {
      return { text: response.error ?? "Неизвестная ошибка", type: "error" };
    }
  } catch (error) {
    return { text: "Ошибка сервера. Попробуйте позже.", type: "error" };
  }
};

const handleRecoverPassword = async () => {
  try {
    const response: AuthResponse = await $fetch("/api/auth/v1/recover", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token.value}`,
      },
      body: JSON.stringify({
        email: form.value.email,
        newPassword: form.value.password,
      }),
    });

    if ("message" in response) {
      return { text: "Пароль успешно сброшен", type: "success" };
    } else {
      return { text: response.error ?? "Ошибка сброса пароля", type: "error" };
    }
  } catch (error) {
    return { text: "Ошибка сервера. Попробуйте позже.", type: "error" };
  }
};

export default function useAuth() {
  return { form, handleLogin, handleRegister, handleRecoverPassword, token };
}