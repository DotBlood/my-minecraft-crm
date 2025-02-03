<template>
  <div
    class="player-head size-10 overflow-hidden rounded-full border border-base-200"
  >
    <template v-if="!pending && !error">
      <div class="avatar">
        <img :src="playerData?.avatar" :alt="nick" class="avatar-image" />
        <div class="level-badge">{{ playerData?.level }}</div>
      </div>
    </template>

    <div v-if="pending" class="loading">Loading...</div>
    <div v-if="error" class="error">{{ error.message }}</div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  nick: {
    type: String,
    required: true,
  },
});

const { data, pending, error } = useFetch(`/api/player/${props.nick}`);

const playerData = computed(() => data.value?.data);

const formatLastOnline = (dateString?: string) => {
  if (!dateString) return "N/A";
  const date = new Date(dateString);
  return date.toLocaleDateString();
};
</script>
