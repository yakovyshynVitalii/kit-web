<template>
  <div class="ui-kit-page">
    <div class="container">
      <div class="ui-el">
        <h1 class="title-1 tablet-title-1 mob-title-1">Title-1</h1>
      </div>

      <div class="ui-el">
        <h2 class="title-2 tablet-title-2 mob-title-2">Title-2</h2>
      </div>

      <div class="ui-el">
        <h3 class="title-3 tablet-title-3">Title-3</h3>
      </div>

      <div class="ui-el">
        <p class="text-1 tablet-text-1">Text-1</p>
      </div>

      <div class="ui-el">
        <p class="text-2 tablet-text-2">Text-2</p>
      </div>

      <div class="ui-el">
        <p class="text-3 tablet-text-3 mob-text-3">Text-3</p>
      </div>

      <div class="ui-el">
        <p class="text-4">Text-4</p>
      </div>

      <div class="ui-el">
        <p class="text-caption">Text-caption</p>
      </div>

      <div class="ui-el">
        <AppArrowLink :href="'#'">Arrow link</AppArrowLink>
      </div>

      <div class="ui-el light">
        <p class="text-1 tablet-text-1 -gray-text">Light gray-text</p>
        <a href="#" class="default-link">Light defaul link</a>
      </div>

      <div class="ui-el dark">
        <p class="text-1 tablet-text-1 -gray-text">Dark gray-text</p>
        <a href="#" class="default-link">Dark defaul link</a>
      </div>

      <div class="ui-el light">
        <AppDefaultButton>Light default button</AppDefaultButton>
      </div>

      <div class="ui-el dark">
        <AppDefaultButton>Dark default button</AppDefaultButton>
      </div>

      <div class="ui-el light">
        <AppDefaultButton>Light cirlce button</AppDefaultButton>
      </div>

      <div class="ui-el light">
        <AppDefaultButton :noBg="true">Light cirlce no-bg</AppDefaultButton>
      </div>

      <div class="ui-el dark">
        <AppCircleButton>Dark cirlce button</AppCircleButton>
      </div>

      <div class="ui-el dark">
        <AppCircleButton :noBg="true">Dark cirlce no-bg</AppCircleButton>
      </div>

      <div class="ui-el">
        <AppCircleButton :disabled="true">Cirlce disable</AppCircleButton>
      </div>

      <div class="ui-el">
        <AppCircleButton :noBg="true" :disabled="true">
          Cirlce no-bg disable
        </AppCircleButton>
      </div>
    </div>
  </div>
</template>

<script setup>
// Imports components

import AppDefaultButton from "~/components/app-components/elements/AppDefaultButton";
import AppCircleButton from "~/components/app-components/elements/AppCircleButton";
import AppArrowLink from "~/components/app-components/elements/AppArrowLink";
</script>

<style>
.ui-el {
  padding: 15px 5px;
}

.ui-el.dark {
  background: var(--dark-black);
}
</style>
