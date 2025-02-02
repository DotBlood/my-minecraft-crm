import { ref } from "vue";

const posts = ref([
  { id: 1, title: "Как настроить уведомления?", author: "User123" },
  { id: 2, title: "Обновление сайта", author: "Admin" },
]);

const deletePost = (id: number) => {
  posts.value = posts.value.filter((post) => post.id !== id);
};

export default function usePosts() {
  return { posts, deletePost };
}
