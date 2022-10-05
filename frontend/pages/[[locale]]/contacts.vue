<template>
  <div class="contacts-page">
    <AppFormBlock
      :page="'Contact Page'"
      :formTitle="`Заявка на послуги.`"
      formDescription="Заповніть коротку заявку, і ми зв'яжемось з вами."
      :fromTabs="true"
    />
  </div>
</template>

<script setup>
// imports components

import AppFormBlock from "~/components/app-components/blocks/AppFormBlock";
</script>
