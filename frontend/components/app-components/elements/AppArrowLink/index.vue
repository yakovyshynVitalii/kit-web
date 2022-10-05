<template>
  <a
    :href="props.href"
    class="arrow-link text text-3 tablet-text-3 mob-text-3"
    v-cursor-pointer
  >
    <slot />
    <span>
      <img
        v-lazyload
        srcset="/image/lazyload.png"
        src="/image/icons/arrow-right-red.svg"
        alt="Arrow right - kit-st.com"
      />
    </span>
  </a>
</template>

<style>
@import "./styles.css";
</style>

<script setup>
// Props

const props = defineProps({
  href: {
    type: String,
    required: true,
  },
});
</script>
