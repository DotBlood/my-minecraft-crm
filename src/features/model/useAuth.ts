import { ref } from "vue";

export default function useAuth() {
  const isRegister = ref(false);
  const form = ref({
    email: "",
    password: "",
    username: "",
  });

  const toggleMode = () => {
    isRegister.value = !isRegister.value;
  };

  const handleSubmit = () => {
    if (isRegister.value) {
      console.log("Регистрация:", form.value);
      // TODO: Добавить API-запрос для регистрации
    } else {
      console.log("Вход:", form.value);
      // TODO: Добавить API-запрос для входа
    }
  };

  return { isRegister, form, toggleMode, handleSubmit };
}
