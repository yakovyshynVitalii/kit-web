<template>
  <div>
    <div class="projects-page">
      <TitleBlock />
      <AppFormTab
        :tabsArray="['Все', 'Front-end', 'Back-end', 'Тестування']"
        :onForm="false"
      />
      <FeaturedProjectsBlock />
      <AppFormBlock
        :page="`ProjectsPage`"
        :borderText="'ПОЧАТИ ПРОЄКТ'"
        :formTitle="' Заповніть форму і поїхали!'"
        formDescription="Хочете дізнатись приблизні ціну та час на розробку вашого проекта?
        Надайте нам будь-яку інформацію про ваш задум, та получіть фідбек
        протягом 3-х годин"
      />
    </div>
  </div>
</template>

<script setup>
// imports components

import FeaturedProjectsBlock from "~/components/pages/home/FeaturedProjectsBlock";
import TitleBlock from "~/components/pages/project/TitleBlock";
import AppFormTab from "~/components/app-components/elements/AppFormTab";
import AppFormBlock from "~/components/app-components/blocks/AppFormBlock";
</script>
