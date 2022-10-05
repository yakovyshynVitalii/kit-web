<template>
  <div class="default-layouts">
    <TheHeader />

    <main>
      <slot />
    </main>

    <TheFooter />
    <TheCursor />
  </div>
</template>

<script setup>
// import components

import TheHeader from "../components/the-components/TheHeader";
import TheFooter from "../components/the-components/TheFooter";
import TheCursor from "../components/the-components/TheCursor";
</script>
