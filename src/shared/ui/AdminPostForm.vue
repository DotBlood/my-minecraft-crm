<template>
  <div class="bg-white p-6 rounded-xl shadow-lg">
    <h2 class="text-2xl font-bold mb-4">{{ editingPost ? "Редактировать пост" : "Добавить новый пост" }}</h2>
    
    <div class="grid grid-cols-1 gap-4">
      <input v-model="postForm.title" type="text" class="input input-bordered w-full" placeholder="Заголовок поста" />
      <textarea v-model="postForm.content" class="textarea textarea-bordered w-full" placeholder="Содержание поста"></textarea>
      <input v-model="postForm.image" type="text" class="input input-bordered w-full" placeholder="Ссылка на изображение" />
    </div>

    <div class="mt-4 flex justify-end gap-2">
      <button @click="resetForm" class="btn btn-ghost">Отмена</button>
      <button @click="savePost" class="btn btn-primary">{{ editingPost ? "Сохранить" : "Добавить" }}</button>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(["postAdded"]);

const props = defineProps({
  post: Object,
});

const postForm = ref({
  title: "",
  content: "",
  image: "",
});

const editingPost = ref(false);

watch(() => props.post, (newPost) => {
  if (newPost) {
    postForm.value = { ...newPost };
    editingPost.value = true;
  } else {
    resetForm();
  }
});

const savePost = () => {
  if (!postForm.value.title || !postForm.value.content) return;

  emit("postAdded", { ...postForm.value, id: props.post ? props.post.id : Date.now() });
  resetForm();
};

const resetForm = () => {
  postForm.value = { title: "", content: "", image: "" };
  editingPost.value = false;
};
</script>
