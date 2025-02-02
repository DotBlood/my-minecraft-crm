<template>
  <div class="card bg-base-100 h-full transition-all hover:shadow-2xl border border-base-100/10 hover:border-base-100/20">
    <div class="flex flex-col h-full p-6">
      <!-- Заголовок -->
      <h3 class="text-2xl font-bold text-dark mb-6">
        {{ title }}
      </h3>

      <!-- Список игроков -->
      <div class="space-y-4">
        <div
          v-for="(player, index) in players"
          :key="player.name"
          class="flex items-center justify-between"
        >
          <div class="flex items-center">
            <!-- Место -->
            <span class="text-lg font-bold text-dark mr-4">
              {{ index + 1 }}.
            </span>

            <!-- Аватар и имя -->
            <NuxtImg
              :src="player.avatar"
              :alt="player.name"
              class="w-10 h-10 rounded-full object-cover mr-4"
            />
            <span class="text-lg text-dark">
              {{ player.name }}
            </span>
          </div>

          <!-- Значение (деньги, клан, онлайн) -->
          <span class="text-lg font-bold text-dark">
            {{ player.value }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

defineProps({
  title: {
    type: String,
    required: true,
  },
  players: {
    type: Array,
    required: true,
  },
});
</script>
