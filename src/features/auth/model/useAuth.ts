import { ref } from "vue";

const form = ref({
  username: "",
  email: "",
  password: "",
});

const handleLogin = () => {
  console.log("Вход:", form.value);
  // TODO: Добавить API-запрос для входа
};

const handleRegister = () => {
  console.log("Регистрация:", form.value);
  // TODO: Добавить API-запрос для регистрации
};

export default function useAuth() {
  return { form, handleLogin, handleRegister };
}
