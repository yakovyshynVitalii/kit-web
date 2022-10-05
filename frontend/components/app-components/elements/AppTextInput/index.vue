<template>
  <div
    v-cursor-pointer
    :class="[
      '-pointer',
      'input',
      'input-type-text',
      {
        '-error': props.error,
        '-important': props.important,
      },
    ]"
  >
    <component
      :is="isTextarea ? 'textarea' : 'input'"
      :type="props.type"
      :value="modelValue"
      :placeholder="props.placeholder"
      @blur="onBlur"
      @focus="onFocus"
      @input="onInput"
    />
    <img
      v-if="props.important"
      v-lazyload
      srcset="/image/lazyload.png"
      src="/image/icons/star-important-red.svg"
      alt="kit-st.com - Star"
    />
    <p
      v-if="props.error"
      class="input__error-text text text-3 tablet-text-3 mob-text-3"
    >
      {{ props.error }}
    </p>
  </div>
</template>

<style>
@import "./styles.css";
</style>

<script setup>
// imports

import { use } from "./use";

// Emits

const emits = defineEmits(["update:modelValue", "focus"]);

// Props

const props = defineProps({
  type: {
    type: String,
    required: true,
  },
  important: {
    type: Boolean,
    default: false,
  },
  placeholder: {
    type: String,
    default: "",
  },
  error: {
    type: [String, Boolean],
    default: false,
  },
  modelValue: {
    type: String,
    default: "",
  },
});

// Logic

const {
  // On input
  onInput,

  // Focus event
  onFocus,

  // Disable autofill styles on blur
  onBlur,

  // Is textarea
  isTextarea,
} = use(props, emits);
</script>
