<template>
  <div class="error">
    <ThePreloader />
    <TheHeader />
    <TheError />
    <TheFooter />
    <TheCursor />
  </div>
</template>
<script setup>
// imports Components

import ThePreloader from "~/components/the-components/ThePreloader";
import TheHeader from "~/components/the-components/TheHeader";
import TheFooter from "~/components/the-components/TheFooter";
import TheCursor from "~/components/the-components/TheCursor";
import TheError from "~/components/the-components/TheError";

useErrorPage();
</script>
