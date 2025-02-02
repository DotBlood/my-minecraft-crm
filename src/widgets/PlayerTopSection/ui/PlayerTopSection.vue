<template>
  <section class="py-16 bg-base-200">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl md:text-5xl font-bold text-dark text-center mb-12">
        Топ
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Топ по деньгам -->
        <PlayerTopCard title="Топ по деньгам" :players="topMoney" />

        <!-- Топ кланов -->
        <PlayerTopCard title="Самый крутой клан" :players="topClans" />

        <!-- Топ по онлайну -->
        <PlayerTopCard title="Топ по онлайну" :players="topOnline" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { PlayerTopCard } from "@widgets/PlayerTopSection";
import { topMoney, topClans, topOnline } from "../config/index.ts";
</script>
