<template>
  <div>
    <div
      ref="cursor"
      :class="[
        'cursor',
        {
          '-is-hidden': isHidden,
          '-active': active,
          '-disable': disable,
          '-cursor-black': blackCursor,
        },
      ]"
    ></div>
  </div>
</template>

<style>
@import "./style.css";
</style>

<script setup>
import use from "./use.js";

const { cursor, isHidden, active, disable, blackCursor } = use();
</script>
