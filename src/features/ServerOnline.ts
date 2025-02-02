import { ref, onMounted } from "vue";

export const useServerOnline = () => {
  const online = ref(0);

  onMounted(() => {
    setTimeout(() => {
      // Здесь можно заменить на запрос к API
      online.value = 42; // Пример данных
    }, 1000);
  });

  return { online };
};
