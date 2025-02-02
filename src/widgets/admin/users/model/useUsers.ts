import { ref } from "vue";

const users = ref([
  { id: 1, name: "Admin", role: "Администратор" },
  { id: 2, name: "User123", role: "Пользователь" },
]);

const deleteUser = (id: number) => {
  users.value = users.value.filter(user => user.id !== id);
};

export default function useUsers() {
  return { users, deleteUser };
}
