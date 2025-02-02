<template>
  <div class="bg-white p-6 rounded-xl shadow-lg">
    <h2 class="text-2xl font-bold mb-4">🎟️ Список промокодов</h2>

    <div v-if="promocodes.length" class="overflow-x-auto">
      <table class="table w-full">
        <thead>
          <tr>
            <th>ID</th>
            <th>Код</th>
            <th>Скидка</th>
            <th>Использований</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="promo in promocodes" :key="promo.id">
            <td>{{ promo.id }}</td>
            <td>{{ promo.code }}</td>
            <td>{{ promo.discount }}%</td>
            <td>{{ promo.usageCount }}</td>
            <td>
              <button @click="deletePromo(promo.id)" class="btn btn-sm btn-error">🗑️ Удалить</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <p v-else class="text-center text-lg text-base-content/50">Нет активных промокодов</p>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  promocodes: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(["deletePromo"]);

const deletePromo = (id) => {
  emit("deletePromo", id);
};
</script>