<template>
  <component
    class="circle-container"
    :is="to ? dynamicNuxtLink : 'div'"
    :to="to"
  >
    <div class="magnetic-wrapper" v-cursor-pointer>
      <div class="magnetic-area magnetic-size" ref="magnetic"></div>
      <div
        :class="[
          'magnetic-content',
          'red-circle-button',
          {
            '-transparent': props.transparent,
            '-no-bg': props.noBg,
            '-disabled': props.disabled,
          },
        ]"
      >
        <slot />
      </div>
    </div>
  </component>
</template>

<style>
@import "./styles.css";
</style>

<script setup>
// imports

import use from "./use";

// Props

const props = defineProps({
  to: [Object, String],

  transparent: {
    type: Boolean,
    default: false,
  },
  noBg: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

// Logic

const dynamicNuxtLink = resolveComponent("NuxtLink");

const { magnetic } = use();
</script>
