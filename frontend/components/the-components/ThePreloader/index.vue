<template>
  <div class="preloader" v-if="!isLoad">
    <div class="preloader-block -black">
      <svg
        width="311"
        height="160"
        viewBox="0 0 311 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M22.8677 0H0V160H22.8677V91.1111H45.7353L89.1838 132.778V160H112.051V125.556L66.3162 80L112.051 32.2222V0H89.1838V25.5556L45.7353 68.8889H22.8677V0ZM166.934 0H144.066V160H166.934V0ZM195.518 0H311V22.2222H265.265V160H242.397V22.2222H195.518V0Z"
          fill="#FD1C30"
        />
      </svg>
    </div>
    <div class="preloader-block -white">
      <svg
        width="311"
        height="160"
        viewBox="0 0 311 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M22.8677 0H0V160H22.8677V91.1111H45.7353L89.1838 132.778V160H112.051V125.556L66.3162 80L112.051 32.2222V0H89.1838V25.5556L45.7353 68.8889H22.8677V0ZM166.934 0H144.066V160H166.934V0ZM195.518 0H311V22.2222H265.265V160H242.397V22.2222H195.518V0Z"
          fill="#161616"
        />
      </svg>
    </div>
  </div>
</template>

<style>
@import "./style.css";
</style>

<script setup>
import { usePreloaderLoadedStatus } from "../../../composables/preloader";

const isLoad = usePreloaderLoadedStatus().value;
</script>
