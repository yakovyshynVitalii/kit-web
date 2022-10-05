<template>
  <footer class="block footer">
    <div class="container" id="contacts">
      <div class="footer__content">
        <h2 class="block__border-title text-caption">Контакти</h2>
        <p
          class="title title-2 tablet-title-2 mob-title-2 footer__title"
          data-after="24/7"
        >
          Ми на зв'язку
        </p>
        <div class="footer__contacts default-links">
          <div class="footer__contacts-item">
            <h3 class="title text-caption -gray-text">Телефон</h3>
            <a
              href="tel:+380 98 115 01 37"
              class="title-3 tablet-title-3"
              v-cursor-pointer
            >
              +380 98 115 01 37
            </a>
          </div>
          <div class="footer__contacts-item">
            <h3 class="title text-caption -gray-text">Пошта</h3>
            <a
              href="mailto:hello@kit-st.com"
              class="title-3 tablet-title-3"
              v-cursor-pointer
            >
              hello@kit-st.com
            </a>
          </div>
        </div>
        <AppCircleButton @click.prevent="scrollTo('#form')">
          Замовити проєкт
        </AppCircleButton>
      </div>
      <div class="footer__bottom-info">
        <TheLanguageSelect />
        <p class="text text-caption -gray-text">© KIT, {{ year }}.</p>
      </div>
    </div>
  </footer>
</template>

<style>
@import "./styles.css";
</style>

<script setup>
// imports global

import { scrollTo } from "../../../utils/helpers/ui/useScrollTo";
import { use } from "./use";

// Imports components

import AppCircleButton from "../../app-components/elements/AppCircleButton";
import TheLanguageSelect from "../TheLanguageSelect";

// Logic

const { year } = use();
</script>
