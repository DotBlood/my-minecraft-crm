<template>
  <div class="bg-white p-6 rounded-xl shadow-lg mb-6">
    <h2 class="text-2xl font-bold mb-4">➕ Добавить промокод</h2>

    <div class="grid grid-cols-1 gap-4">
      <input v-model="promoForm.code" type="text" class="input input-bordered w-full" placeholder="Название промокода" />
      <input v-model="promoForm.discount" type="number" class="input input-bordered w-full" placeholder="Скидка (%)" />
    </div>

    <div class="mt-4 flex justify-end gap-2">
      <button @click="resetForm" class="btn btn-ghost">Отмена</button>
      <button @click="addPromo" class="btn btn-primary">Добавить</button>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";

const emit = defineEmits(["promoAdded"]);

const promoForm = ref({
  code: "",
  discount: "",
});

const addPromo = () => {
  if (!promoForm.value.code || !promoForm.value.discount) return;

  emit("promoAdded", { ...promoForm.value });
  resetForm();
};

const resetForm = () => {
  promoForm.value = { code: "", discount: "" };
};
</script>
