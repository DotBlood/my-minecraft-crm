<template>
  <div class="h-screen overflow-hidden overflow-y-auto  bg-base-200 p-6 w-full">
    <!-- Заголовок -->
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-base-content">🛍️ Управление товарами</h1>
      <p class="text-base-content/70">Добавляйте, редактируйте и удаляйте товары</p>
    </div>

    <!-- Форма добавления или редактирования -->
    <form @submit.prevent="handleSubmit" class="space-y-6 bg-white p-6 rounded-lg shadow-md">
      <h2 class="text-2xl font-bold">{{ isEditing ? "✏️ Редактирование товара" : "➕ Добавить новый товар" }}</h2>

      <label class="form-control w-full">
        <span class="label-text">Название товара</span>
        <input v-model="currentProduct.name" type="text" class="input input-bordered w-full" required placeholder="Введите название..." />
      </label>

      <label class="form-control w-full">
        <span class="label-text">Категория</span>
        <select v-model="currentProduct.category" class="select select-bordered w-full">
          <option disabled value="">Выберите категорию</option>
          <option>Ранги</option>
          <option>Кейсы</option>
          <option>Вещи</option>
        </select>
      </label>

      <label class="form-control w-full">
        <span class="label-text">Цена (₽)</span>
        <input v-model="currentProduct.price" type="number" class="input input-bordered w-full" required min="1" placeholder="Введите цену..." />
      </label>

      <label class="form-control w-full">
        <span class="label-text">Описание</span>
        <textarea v-model="currentProduct.description" class="textarea textarea-bordered w-full" rows="3" placeholder="Введите описание..."></textarea>
      </label>

      <label class="form-control w-full">
        <span class="label-text">Изображение товара (URL)</span>
        <input v-model="currentProduct.image" type="text" class="input input-bordered w-full" placeholder="Вставьте ссылку на изображение..." />
      </label>

      <div class="mt-4 flex justify-center">
        <img v-if="currentProduct.image" :src="currentProduct.image" class="w-40 h-40 object-cover rounded-lg shadow-md" />
      </div>

      <button type="submit" class="btn btn-primary w-full">
        {{ isEditing ? "💾 Сохранить изменения" : "✅ Добавить товар" }}
      </button>
    </form>

    <!-- Список товаров -->
    <div class="mt-8">
      <h2 class="text-2xl font-bold">📦 Список товаров</h2>
      <div class="overflow-x-auto bg-white p-6 rounded-lg shadow-md mt-4">
        <table class="table w-full">
          <thead>
            <tr>
              <th>Название</th>
              <th>Категория</th>
              <th>Цена (₽)</th>
              <th>Действия</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in products" :key="product.id">
              <td>{{ product.name }}</td>
              <td>{{ product.category }}</td>
              <td>{{ product.price }} ₽</td>
              <td>
                <button @click="editProduct(product)" class="btn btn-sm btn-warning mr-2">✏️</button>
                <button @click="deleteProduct(product.id)" class="btn btn-sm btn-error">🗑️</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import useProducts from "@widgets/admin/products/model/useProducts";

const { products, addNewProduct, updateProduct, removeProduct } = useProducts();

const currentProduct = ref({ name: "", category: "", price: "", description: "", image: "" });
const isEditing = ref(false);
let editingId = null;

// Функция отправки формы (добавление/редактирование)
const handleSubmit = () => {
  if (!currentProduct.value.name || !currentProduct.value.category || !currentProduct.value.price) {
    alert("Заполните все обязательные поля!");
    return;
  }

  if (isEditing.value) {
    updateProduct(editingId, currentProduct.value);
    isEditing.value = false;
  } else {
    addNewProduct(currentProduct.value);
  }

  resetForm();
};

// Удаление товара
const deleteProduct = (id) => {
  removeProduct(id);
};

// Редактирование товара
const editProduct = (product) => {
  currentProduct.value = { ...product };
  editingId = product.id;
  isEditing.value = true;
};

// Сброс формы
const resetForm = () => {
  currentProduct.value = { name: "", category: "", price: "", description: "", image: "" };
  isEditing.value = false;
};

definePageMeta({
  layout: "admin",
});
</script>
