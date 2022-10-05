<template>
  <div class="project-block">
    <div class="container">
      <section class="project-page__main">
        <img src="/image/project/project_5.jpg" alt="" />
      </section>

      <section class="project-page__about">
        <h2 class="title title-2 tablet-title-2 mob-title-2">
          Solo: A Premium Saas Landing Page Kit.
        </h2>

        <div class="about-block">
          <div class="about-block__tags">
            <AppTagsList :tags="['HTML', 'CSS', 'JAVASCRIPT']" />
          </div>
          <div class="about-block__text">
            <p class="text text-1 tablet-text-1">
              Опис самого проєкту. This package includes a responsive and fully
              customized landing page template with 49 clean premade screens.
              We've intentionally added a lot of different content to maximize
              the number of layout options.
            </p>
            <AppArrowLink>Відвідати сайт проєкту</AppArrowLink>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style>
@import "./style.css";
</style>

<script setup>
// imports Components

import AppArrowLink from "~/components/app-components/elements/AppArrowLink";
import AppTagsList from "~/components/app-components/elements/AppTagsList";
</script>
