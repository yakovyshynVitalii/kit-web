<template>
  <button class="button default-button" v-cursor-pointer>
    <slot />
    <AppLoaderAnimation v-if="loader" />
  </button>
</template>

<style>
@import "./styles.css";
</style>

<script setup>
import AppLoaderAnimation from "../AppLoaderAnimation";

// Props

const props = defineProps({
  loader: {
    type: Boolean,
    default: false,
  },
});
</script>
