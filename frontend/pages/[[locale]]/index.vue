<template>
  <div class="home-page">
    <MainBlock />
    <FeaturedProjectsBlock title />
    <SpecializationsBlock />
    <CompetenceBlock />
    <AppFormBlock
      :page="`HomePage`"
      :borderText="'ПОЧАТИ ПРОЄКТ'"
      :formTitle="' Заповніть форму і поїхали!'"
      formDescription="Хочете дізнатись приблизні ціну та час на розробку вашого проекта?
        Надайте нам будь-яку інформацію про ваш задум, та получіть фідбек
        протягом 3-х годин"
    />

    <OurNumbersBlock />
  </div>
</template>

<script setup>
// imports components

import MainBlock from "~/components/pages/home/MainBlock";
import FeaturedProjectsBlock from "~/components/pages/home/FeaturedProjectsBlock";
import SpecializationsBlock from "~/components/pages/home/SpecializationsBlock";
import CompetenceBlock from "~/components/pages/home/CompetenceBlock";
import AppFormBlock from "~/components/app-components/blocks/AppFormBlock";
import OurNumbersBlock from "~/components/pages/home/OurNumbersBlock";
</script>
