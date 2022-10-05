<template>
  <div class="app">
    <ThePreloader />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
// Import Components
import ThePreloader from "~/components/the-components/ThePreloader";

// Global Meta

useGlobalMeta();
</script>
