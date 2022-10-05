<template>
  <ul :class="['tags-list', 'text-caption', themeColor]">
    <li v-for="tag of props.tags" :key="tag">
      {{ tag }}
    </li>
  </ul>
</template>

<style>
@import "./styles.css";
</style>

<script setup>
// Props

const props = defineProps({
  tags: {
    type: Array,
    required: true,
  },
  light: {
    type: Boolean,
    default: false,
  },
  dark: {
    type: Boolean,
    default: false,
  },
});

const themeColor = computed(() => (props.dark ? "-dark" : "-light"));
</script>
