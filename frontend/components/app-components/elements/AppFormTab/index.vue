<template>
  <div class="container">
    <div class="from-tabs" :class="{ '-on-page': !onForm }">
      <div class="tab-nav text-3 tablet-text-4">
        <div class="tab text" v-cursor-pointer v-for="(item, idx) in tabsArray">
          <input
            type="checkbox"
            :id="'tabId-' + idx"
            :value="item"
            v-model="modelValue"
            @change="choose"
          />
          <label :for="'tabId-' + idx">{{ item }}</label>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import "./style.css";
</style>

<script setup>
// Imports

// Props

const props = defineProps({
  modelValue: {
    type: Array,
    default: [],
  },
  errorMessage: {
    type: String,
    default: "",
  },
  tabsArray: {
    type: Array,
    default: [],
    required: true,
  },
  onForm: {
    type: Boolean,
    default: true,
  },
});

// Emit

const emits = defineEmits(["update:modelValue"]);

// Logic

const choose = () => {
  emits("update:modelValue", props.modelValue);
};
</script>
