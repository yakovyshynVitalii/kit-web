<template>
  <div class="main-block">
    <div class="main-block__content">
      <div class="container">
        <h1
          class="main-block__border-title title title-1 tablet-title-1 mob-title-1"
        >
          Кодимо ваш дизайн
        </h1>
        <p class="main-block__description text text-1 tablet-text-1 -gray-text">
          Студія frontend та backend розробки любої складності. Ваш макет > Наш
          код > Продакшн.
        </p>
        <AppCircleButton @click.prevent="scrollTo('#form')">
          Замовити проєкт
        </AppCircleButton>
      </div>
    </div>
  </div>
</template>

<style>
@import "./styles.css";
</style>

<script setup>
// Imports

import { use } from "./use";

// Imports Components

import AppCircleButton from "~/components/app-components/elements/AppCircleButton";

// Logic

const { scrollTo } = use();
</script>
