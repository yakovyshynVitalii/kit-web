<template>
  <div class="block specializations">
    <div class="container" id="specializations">
      <div class="block__border-title text-caption">МИ РОБИМО</div>
      <h2 class="block__title title title-2 tablet-title-2 mob-title-2">
        Спеціалізації.
      </h2>
      <ul class="specializations__list">
        <li class="specializations__item">
          <h3 class="title title-3 tablet-title-3">Розробка</h3>
          <p
            class="specializations__item-description text text-3 tablet-text-3 mob-text-3 -gray-text"
          >
            Корпоративний іміджевий сайт, Сайт візитка, Інтернет магазин, Блог,
            Landing Page та інші унікальні задумки
          </p>
          <AppArrowLink :href="'#'" @click.prevent="scrollTo('#form')">
            Замовити розробку
          </AppArrowLink>
        </li>
        <li class="specializations__item">
          <h3 class="title title-3 tablet-title-3">WEB-анімації</h3>
          <p
            class="specializations__item-description text text-3 tablet-text-3 mob-text-3 -gray-text"
          >
            Збільшимо ефективність вашого сайту та додамо нотки стилю, з
            допомогою анімацій, акцентуючи увагу користувача на ключових
            моментах
          </p>
          <AppArrowLink :href="'#'" @click.prevent="scrollTo('#form')">
            Замовити розробку
          </AppArrowLink>
        </li>
        <li class="specializations__item">
          <h3 class="title title-3 tablet-title-3">SEO</h3>
          <p
            class="specializations__item-description text text-3 tablet-text-3 mob-text-3 -gray-text"
          >
            Допомагаємо з початковими SEO налаштуваннями сайту, які позитивно
            впливають на просування сайту
          </p>
          <AppArrowLink :href="'#'" @click.prevent="scrollTo('#form')">
            Замовити розробку
          </AppArrowLink>
        </li>
        <li class="specializations__item">
          <h3 class="title title-3 tablet-title-3">Підтримка</h3>
          <p
            class="specializations__item-description text text-3 tablet-text-3 mob-text-3 -gray-text"
          >
            Підтримуємо та розвиваємо готові проекти. Допомагаємо втілювати нові
            рішення та технології
          </p>
          <AppArrowLink :href="'#'" @click.prevent="scrollTo('#form')">
            Замовити підтримку
          </AppArrowLink>
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

import { use } from "./use.js";

// Imports Components

import AppArrowLink from "~/components/app-components/elements/AppArrowLink";

// Logic

const { scrollTo } = use();
</script>
