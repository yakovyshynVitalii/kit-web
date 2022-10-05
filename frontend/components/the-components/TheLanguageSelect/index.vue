<template>
  <div
    class="language-select text-caption default-links"
    ref="select"
    v-cursor-pointer
  >
    <ul class="language-select__list">
      <li v-for="el in lang">
        <a v-if="el !== currentLocale" @click.prevent="chaneLang(el)">
          {{ el }}
        </a>
      </li>
    </ul>
    <div class="language-select__val -pointer">
      {{ currentLocale }}
    </div>
  </div>
</template>

<style>
@import "./styles.css";
</style>

<script setup>
// imports Global

import use from "./use.js";

const { select, lang, currentLocale, chaneLang } = use();
</script>
