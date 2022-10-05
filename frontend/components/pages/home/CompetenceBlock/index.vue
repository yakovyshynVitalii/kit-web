<template>
  <div class="block competence -br-none-from-tablet">
    <div class="container">
      <h2 class="block__title title title-2 tablet-title-2 mob-title-2">
        Наші компетенції <br />
        в розробці.
      </h2>
      <ul class="competence__list">
        <li class="competence__item">
          <div class="competence__item-left">
            <h3 class="title title-3 tablet-title-3">Front-end</h3>
            <AppTagsList dark :tags="frontendTags" />
          </div>
          <div class="competence__item-right">
            <p class="text text-3 tablet-text-3 mob-text-3 -gray-text">
              Наша команда завжди готова взятися за будь-який унікальний проєкт,
              щоб втілити в реальність не лише бюджетні, але й різні
              нестандартні, та можливо, навіть, божевільні ідеї
            </p>
          </div>
        </li>
        <li class="competence__item">
          <div class="competence__item-left">
            <h3 class="title title-3 tablet-title-3">Back-end</h3>
            <AppTagsList dark :tags="backendTags" />
          </div>
          <div class="competence__item-right">
            <p class="text text-3 tablet-text-3 mob-text-3 -gray-text">
              Створення внутрішньої логіки веб-сайта на базі готової CMS та
              кастомізація адмін панелі, для зручного управління контентом на
              сайті
            </p>
          </div>
        </li>
      </ul>
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

import AppTagsList from "~/components/app-components/elements/AppTagsList";

// Logic

const { frontendTags, backendTags } = use();
</script>
