<template>
  <section class="py-16 bg-base-300">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl md:text-5xl font-bold text-dark text-center mb-12">
        Отзывы игроков
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8">
        <PlayerReviewCard
          v-for="review in playerReviews"
          :key="review.name"
          :name="review.name"
          :text="review.text"
          :avatar="review.avatar"
          :rating="review.rating"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { PlayerReviewCard } from "@widgets/PlayerReviewsSection";
import { playerReviews } from "../config";
</script>
