import { ref } from "vue";

const step = ref(1);
const email = ref("");
const otpCode = ref("");
const newPassword = ref("");

const sendOtp = () => {
  console.log("Отправка OTP на:", email.value);
  step.value = 2;
  // TODO: Запрос на сервер для отправки OTP
};

const verifyOtp = () => {
  console.log("Проверка OTP:", otpCode.value);
  step.value = 3;
  // TODO: Проверить код OTP через API
};

const resetPassword = () => {
  console.log("Сохранение нового пароля:", newPassword.value);
  step.value = 1;
  // TODO: Отправить новый пароль на сервер
};

export default function useRecover() {
  return { step, email, otpCode, newPassword, sendOtp, verifyOtp, resetPassword };
}
