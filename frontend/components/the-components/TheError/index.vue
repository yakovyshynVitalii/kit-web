<template>
  <div class="error-page">
    <div class="container">
      <p class="error-page__code">404</p>
      <p class="error-page__title title title-3">Сторінку не знайдено.</p>
      <p class="error-page__description text text-2 -gray-text">
        Можливо, введено неправильну адресу <br class="-pc" />
        або сторінку видалено.
      </p>

      <AppCircleButton :to="{ name: getRoute('Home').name }" :noBg="true">
        Повернутися на головну
      </AppCircleButton>
    </div>
  </div>
</template>

<style>
@import "./styles.css";
</style>

<script setup>
// Imports

import { getRoute } from "../../../utils/router/getRoute";
// import use from "./use.js";

// Imports Components

import AppCircleButton from "~/components/app-components/elements/AppCircleButton";

// Logic

// const {} = use();
</script>
