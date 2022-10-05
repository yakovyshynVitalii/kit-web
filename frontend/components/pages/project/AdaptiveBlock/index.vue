<template>
  <div class="adaptive-block">
    <div class="container">
      <div class="adaptive-border">
        <p class="text text-caption">MOBILE</p>
      </div>
      <div class="adaptive-block__top-wrapper">
        <div class="text-block">
          <h2 class="title title-3 tablet-title-3 mob-title-3">
            Адаптивний дизайн
          </h2>
          <p class="text text-3 tablet-text-3">
            We've intentionally added a lot of different content to maximize the
            number of layout options. Drag, drop, and mix different parts to
            quickly build your landing page in a matter of minutes.
          </p>
        </div>
        <div class="img-block">
          <div class="img-left">
            <img src="/image/project/img-7.jpg" alt="" v-lazyload />
          </div>
          <div class="img-center">
            <img src="/image/project/img-8.jpg" alt="" v-lazyload />
          </div>
          <div class="img-right">
            <img src="/image/project/img-9.jpg" alt="" v-lazyload />
          </div>
        </div>
      </div>
      <div class="adaptive-block__bottom-wrapper">
        <div class="info-block">
          <div class="img-box">
            <img src="/image/project/img-10.jpg" alt="" v-lazyload />
          </div>
          <div class="text-box">
            <h2 class="title title-3 tablet-title-3 mob-title-3">
              Correct display of the site on mobile devices.
            </h2>
            <p class="text text-3 tablet-text-3">
              In order to determine which is better - a responsive design or a
              mobile version of the site, you first need to understand why all
              this is needed.
            </p>
          </div>
        </div>
        <div class="img-block">
          <img src="/image/project/img-11.jpg" alt="" v-lazyload />
        </div>
      </div>
      <div class="adaptive-block__btn-wrapper">
        <div class="btn-box">
          <AppCircleButton :noBg="true"> Попередній проект </AppCircleButton>
        </div>
        <div class="btn-box">
          <AppCircleButton :noBg="true"> Наступний проект </AppCircleButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Imports Components
import AppCircleButton from "~/components/app-components/elements/AppCircleButton";
</script>

<style>
@import "./style.css";
</style>
