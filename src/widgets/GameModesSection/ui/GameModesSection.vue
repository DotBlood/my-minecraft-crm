<template>
  <section class="py-16 bg-base-300">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl md:text-5xl font-bold text-dark text-center mb-12">
        Режимы игры
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <GameModeCard
          v-for="mode in gameModes"
          :key="mode.title"
          :title="mode.title"
          :description="mode.description"
          :image="mode.image"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { GameModeCard } from "@widgets/GameModesSection";
import { gameModes } from "../config/index";
</script>