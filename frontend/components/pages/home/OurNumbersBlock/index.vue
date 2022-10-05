<template>
  <div class="block our-numbers-block">
    <div class="container">
      <div class="block__border-title text-caption">Наші цифри</div>
      <div class="our-numbers-block__content">
        <div class="our-numbers-block__item">
          <span>
            {{ linesOfCode }}
          </span>
          <p class="text text-3 tablet-text-3 mob-text-3 -gray-text">
            Строк коду написано
          </p>
        </div>
        <div class="our-numbers-block__item">
          <span>{{ yearsOfExperiance }} роки </span>
          <p class="text text-3 tablet-text-3 mob-text-3 -gray-text">
            Досвіду роботи з реальними клієнтами.
          </p>
        </div>
        <div class="our-numbers-block__item">
          <span> 8 кейсів </span>
          <p class="text text-3 tablet-text-3 mob-text-3 -gray-text">
            Успішно реалізованих бізнес‑проеків.
          </p>
        </div>
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

// Logic

const {
  // Block functionality
  yearsOfExperiance,
  linesOfCode,
} = use();
</script>
