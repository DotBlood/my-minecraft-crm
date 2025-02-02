<template>
  <div class="min-h-screen bg-base-200 p-6 w-full">
    <!-- Заголовок -->
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-base-content">
        Админ-панель Minecraft сервера
      </h1>
      <p class="text-base-content/70">Добро пожаловать, Администратор!</p>
    </div>

    <!-- Карточки с метриками -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div class="card bg-base-100 shadow-md">
        <div class="card-body">
          <h2 class="card-title text-lg">Онлайн игроков</h2>
          <p class="text-3xl font-bold">{{ metrics.playersOnline }}</p>
          <p class="text-sm text-base-content/70">
            Максимум за сутки: {{ metrics.maxPlayers }}
          </p>
        </div>
      </div>
      <div class="card bg-base-100 shadow-md">
        <div class="card-body">
          <h2 class="card-title text-lg">Продажи донатов</h2>
          <p class="text-3xl font-bold">{{ metrics.donations }} ₽</p>
          <p class="text-sm text-base-content/70">За последний месяц</p>
        </div>
      </div>
      <div class="card bg-base-100 shadow-md">
        <div class="card-body">
          <h2 class="card-title text-lg">Баланс экономики</h2>
          <p class="text-3xl font-bold">{{ metrics.serverBalance }} монет</p>
          <p class="text-sm text-base-content/70">
            Средний баланс игрока: {{ metrics.avgBalance }} монет
          </p>
        </div>
      </div>
      <div class="card bg-base-100 shadow-md">
        <div class="card-body">
          <h2 class="card-title text-lg">Активные баны</h2>
          <p class="text-3xl font-bold">{{ metrics.bans }}</p>
          <p class="text-sm text-base-content/70">
            Жалобы: {{ metrics.reports }}
          </p>
        </div>
      </div>
    </div>

    <!-- График и таблица -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- График -->
      <div class="card bg-base-100 shadow-md">
        <div class="card-body">
          <h2 class="card-title text-lg">Онлайн игроков за неделю</h2>
          <div ref="chartContainer" class="h-64 bg-base-200 rounded-lg flex items-center justify-center">
            <canvas id="playerChart"></canvas>
          </div>
        </div>
      </div>

      <!-- Таблица -->
      <div class="card bg-base-100 shadow-md">
        <div class="card-body">
          <h2 class="card-title text-lg">Последние покупки донатов</h2>
          <div class="overflow-x-auto">
            <table class="table w-full">
              <thead>
                <tr>
                  <th>Игрок</th>
                  <th>Пакет</th>
                  <th>Сумма</th>
                  <th>Дата</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="purchase in lastDonations" :key="purchase.id">
                  <td>{{ purchase.player }}</td>
                  <td>{{ purchase.package }}</td>
                  <td>{{ purchase.amount }} ₽</td>
                  <td>{{ formatDate(purchase.date) }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Chart from "chart.js/auto";

// Метрики
const metrics = ref({
  playersOnline: 127,
  maxPlayers: 230,
  donations: 25460,
  serverBalance: 123450,
  avgBalance: 3200,
  bans: 12,
  reports: 5,
});

// Последние покупки донатов
const lastDonations = ref([
  { id: 1, player: "Steve", package: "VIP", amount: 500, date: "2024-02-02" },
  { id: 2, player: "Alex", package: "Premium", amount: 1500, date: "2024-02-03" },
  { id: 3, player: "Notch", package: "Elite", amount: 2500, date: "2024-02-04" },
]);

// Форматирование даты
const formatDate = (date) => {
  return new Date(date).toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

// График онлайна
const chartContainer = ref(null);
onMounted(() => {
  if (!chartContainer.value) return;

  const ctx = document.getElementById("playerChart").getContext("2d");
  new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
      datasets: [
        {
          label: "Игроки онлайн",
          data: [120, 140, 130, 160, 170, 180, 200],
          borderColor: "rgba(75, 192, 192, 1)",
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderWidth: 2,
        },
      ],
    },
  });
});

// Определение мета-данных страницы
definePageMeta({
  layout: "admin",
});
</script>
