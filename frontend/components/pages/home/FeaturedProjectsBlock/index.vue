<template>
  <div class="block featured-projects">
    <div class="container" id="projects">
      <div v-if="title">
        <div class="block__border-title text-caption">Портфоліо</div>
        <h2 class="block__title title title-2 tablet-title-2 mob-title-2">
          Проєкти, над якими <br />
          ми працювали.
        </h2>
      </div>

      <AppProjectsList />
    </div>
  </div>
</template>

<script setup>
// Imports Components

import AppProjectsList from "~/components/app-components/blocks/AppProjectsList";

const props = defineProps({
  title: {
    type: Boolean,
    default: false,
  },
});
</script>
