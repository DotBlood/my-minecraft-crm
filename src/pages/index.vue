<template>
  <div>
    <WelcomeSection />
    <GameModesSection />
    <AboutSection />
    <PlayerTopSection />
    <TeamSection />
    <FaqSection />
    <PlayerReviewsSection />
  </div>
</template>

<script setup>
import { GameModesSection } from "@widgets/GameModesSection";
import { WelcomeSection } from "@widgets/WelcomeSection";
import { PlayerReviewsSection } from "@widgets/PlayerReviewsSection";
import { PlayerTopSection } from '@widgets/PlayerTopSection';
import { AboutSection } from '@widgets/AboutSection';
import { TeamSection } from '@widgets/TeamSection';
import { FaqSection } from '@widgets/FaqSection';
</script>