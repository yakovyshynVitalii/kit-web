<template>
  <div :class="['input', 'input-type-file', { '-error': props.fileError }]">
    <div class="input-type-file__container">
      <input
        ref="originalInput"
        type="file"
        @change="onChange"
        :accept="props.acceptValue"
      />
      <div
        class="input-type-file__button -pointer"
        @click="chooseFile"
        v-cursor-pointer
      >
        <div class="input-type-file__button-icon" v-cursor-pointer>
          <svg
            width="14"
            height="16"
            viewBox="0 0 14 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 10L9 7C9.55229 6.44771 9.55228 5.55228 9 5V5C8.44772 4.44772 7.55228 4.44772 7 5L2 10C0.895428 11.1046 0.89543 12.8954 2 14V14C3.10457 15.1046 4.89543 15.1046 6 14L12 8C13.6569 6.34315 13.6569 3.65685 12 2V2C10.3431 0.343146 7.65685 0.343145 6 2L2 6"
            />
          </svg>
        </div>
        <p class="text text-3 tablet-text-3 mob-text-3">
          {{ props.inputTitle }}
        </p>
      </div>
      <div
        v-if="fileName"
        v-for="el in fileName"
        class="input-type-file__file"
        :class="{ '-pointer': fileName }"
      >
        <img
          class="form-clear"
          src="/image/icons/cross-red.svg"
          alt="kit-st.com - Remove"
          @click="onClear"
        />
        <p class="file-name text-3 tablet-text-3 mob-text-3">{{ el.name }}</p>
      </div>
    </div>
    <p
      v-if="props.fileError"
      class="input__error-text text text-3 tablet-text-3 mob-text-3"
    >
      {{ props.fileError }}
    </p>
  </div>
</template>

<style>
@import "./styles.css";
</style>

<script setup>
// Imports

import { use } from "./use";

// Emits

const emits = defineEmits(["update:modelValue", "clear"]);

// Props

const props = defineProps({
  inputTitle: {
    type: String,
    default: "",
  },
  fileError: {
    type: String,
    default: "",
  },
  fileName: {
    type: Array,
    default: "",
  },
  acceptValue: {
    type: String,
    default: "",
  },
});

// Logic

const { originalInput, chooseFile, onClear, onChange } = use(emits);
</script>
