import { ref } from "vue";

const email = ref("");
const otpCode = ref("");
const otpSent = ref(false);

const handleRecover = () => {
  console.log("Запрос OTP для:", email.value);
  otpSent.value = true;
  // TODO: Отправить код на email через API
};

const verifyOtp = () => {
  console.log("Проверка OTP:", otpCode.value);
  // TODO: Проверить код через API
};

export default function useOtp() {
  return { email, otpCode, otpSent, handleRecover, verifyOtp };
}
