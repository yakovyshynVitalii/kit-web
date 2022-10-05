<template>
  <div class="block form-block">
    <div class="container" id="form">
      <div class="block__border-title text-caption" v-if="props.borderText">
        {{ props.borderText }}
      </div>
      <h2
        class="block__title title title-2 tablet-title-2 mob-title-2"
        :class="{ '-padding': !props.borderText }"
      >
        {{ props.formTitle }}
      </h2>
      <div class="form-block__content">
        <div class="form-block__left">
          <p class="text text-3 tablet-text-1 -gray-text">
            {{ props.formDescription }}
          </p>
        </div>
        <div class="form-block__right">
          <form
            :class="{
              '-sent': isFormSent,
            }"
            @submit.prevent="onSubmit"
          >
            <div class="form-block__thanks">
              <div class="form-block__thanks-inner">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                  <polygon
                    fill="#FD1C30"
                    points="40.6,12.1 17,35.7 7.4,26.1 4.6,29 17,41.3 43.4,14.9"
                  />
                </svg>
                <p class="title title-3 tablet-title-3">Дякуємо за заявку!</p>
                <p class="text text-3 tablet-text-3 mob-text-3">
                  Ми обов'язково зв'яжемось з вами <br />протягом 3-х годин в
                  робочий час
                </p>
              </div>
            </div>
            <AppTextInput
              important
              type="text"
              ref="inputName"
              v-model="inputNameModel"
              :placeholder="`Ваше iм'я`"
              :error="inputNameError"
              @blur="nameBlur"
            />
            <AppTextInput
              important
              type="text"
              ref="inputEmail"
              v-model="inputEmailModel"
              :placeholder="'Ваш email'"
              :error="inputEmailError"
              @blur="emailBlur"
            />
            <AppTextInput
              type="text"
              ref="inputPhone"
              v-model="inputPhoneModel"
              :placeholder="'Ваш телефон'"
              :error="inputPhoneError"
              @blur="phoneBlur"
            />
            <AppFormTab
              v-if="props.fromTabs"
              v-model="inputTabModel"
              :tabsArray="[
                'Розробка',
                'Інтеграція',
                'Підтримка',
                'Тестування',
                'Інше',
              ]"
              :errorMessage="inputTabError"
              @tabChange="tabChange"
            />
            <AppTextInput
              type="textarea"
              ref="inputMessage"
              :placeholder="'Опишіть ваш проєкт'"
              v-model="inputMessageModel"
              :error="inputMessageError"
              @blur="messageBlur"
            />
            <AppFileInput
              ref="inputFile"
              :input-title="'Прикріпити файл'"
              :file-error="filesError"
              :file-name="filesValue"
              :accept-value="allowFileTypesAttr"
              @change="attachChange"
              @clear="attachChange"
            />
            <AppDefaultButton> Відправити </AppDefaultButton>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import "./styles.css";
</style>

<script setup>
// Imports

import use from "./use";

// Imports Components

import AppTextInput from "../../elements/AppTextInput";
import AppFormTab from "../../elements/AppFormTab";
import AppFileInput from "../../elements/AppFileInput";
import AppDefaultButton from "../../elements/AppDefaultButton";

// Props

const props = defineProps({
  page: {
    type: String,
    default: "",
  },

  borderText: {
    type: String,
    default: null,
  },

  formTitle: {
    type: String,
    default: "",
  },

  formDescription: {
    type: String,
    default: "",
  },

  fromTabs: {
    type: Boolean,
    default: false,
  },
});

// Logic

const {
  // Is form sent
  isFormSent,

  // Name
  inputNameModel,
  inputNameError,
  nameBlur,

  // Email
  inputEmailModel,
  inputEmailError,
  emailBlur,

  // Phone
  inputPhoneModel,
  inputPhoneError,
  phoneBlur,

  // Description
  inputMessageModel,
  inputMessageError,
  messageBlur,

  //File
  filesValue,
  filesError,
  allowFileTypesAttr,
  attachChange,

  //Tabs
  inputTabModel,
  inputTabError,
  tabBlur,
  tabChange,

  // onSubmit
  onSubmit,
} = use(props);
</script>
