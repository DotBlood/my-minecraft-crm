<template>
  <Dashboard>
    <h1 class="text-3xl font-bold mb-6">🛒 Управление товарами</h1>

    <!-- Форма добавления товара -->
    <div class="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 class="text-xl font-bold mb-4">➕ Добавить товар</h2>
      <form @submit.prevent="addProduct(newProduct.name, newProduct.price, newProduct.stock)">
        <div class="flex gap-4">
          <input v-model="newProduct.name" type="text" class="input input-bordered w-full" placeholder="Название товара" required />
          <input v-model.number="newProduct.price" type="number" class="input input-bordered w-32" placeholder="Цена" required min="1" />
          <input v-model.number="newProduct.stock" type="number" class="input input-bordered w-32" placeholder="Кол-во" required min="0" />
          <button type="submit" class="btn btn-primary">Добавить</button>
        </div>
      </form>
    </div>

    <!-- Список товаров -->
    <table class="w-full border-collapse border border-gray-300">
      <thead>
        <tr class="bg-gray-200">
          <th class="border p-2">ID</th>
          <th class="border p-2">Название</th>
          <th class="border p-2">Цена</th>
          <th class="border p-2">Остаток</th>
          <th class="border p-2">Действия</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td class="border p-2">{{ product.id }}</td>
          <td class="border p-2">{{ product.name }}</td>
          <td class="border p-2">{{ product.price }} ₽</td>
          <td class="border p-2">{{ product.stock }}</td>
          <td class="border p-2">
            <button @click="deleteProduct(product.id)" class="bg-red-500 text-white px-2 py-1 rounded">Удалить</button>
          </td>
        </tr>
      </tbody>
    </table>
  </Dashboard>
</template>

<script setup>
import Dashboard from "@widgets/admin/dashboard/ui/Dashboard.vue";
import useProducts from "@widgets/admin/products/model/useProducts";

const { products, addProduct, deleteProduct } = useProducts();
const newProduct = ref({ name: "", price: 0, stock: 0 });
</script>
