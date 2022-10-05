<template>
  <ul class="projects-list">
    <!--    <li-->
    <!--      v-for="project of projects"-->
    <!--      :key="project"-->
    <!--      :class="['projects-list__item', project.size]"-->
    <!--      :style="{ order: project.index + 1 }"-->
    <!--    >-->
    <!--      <picture class="projects-list__preview">-->
    <!--        <source :srcset="project.previewMob" media="(max-width: 760px)" />-->
    <!--        <img-->
    <!--          v-lazyload-->
    <!--          srcset="/image/lazyload.png"-->
    <!--          :src="project.previewPc"-->
    <!--          :alt="project.title"-->
    <!--        />-->
    <!--      </picture>-->
    <!--      <a :href="project.url" target="_blank">-->
    <!--        <AppTagsList light :tags="project.tags" />-->
    <!--        <div class="projects-list__item-description">-->
    <!--          <h3 class="title title-3">-->
    <!--            {{ project.title }}-->
    <!--          </h3>-->
    <!--          <div class="projects-list__item-arrow">-->
    <!--            <img-->
    <!--              v-lazyload-->
    <!--              srcset="/image/lazyload.png"-->
    <!--              src="/image/icons/arrow-top-right-white.svg"-->
    <!--              alt="kit-st.com - White arrow"-->
    <!--            />-->
    <!--          </div>-->
    <!--          <div class="text text-3 tablet-text-3 mob-text-3">-->
    <!--            <p>-->
    <!--              {{ project.description }}-->
    <!--            </p>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </a>-->
    <!--    </li>-->

    <!--    =====================================================================-->

    <li class="projects-list__item -size-l" v-cursor-pointer>
      <picture class="projects-list__preview">
        <source
          srcset="/image/projects/1-mobile.jpg"
          media="(max-width: 760px)"
        />
        <img src="/image/projects/1.jpg" alt="Cybersport Bets" />
      </picture>
      <a
        class="-pointer"
        href="https://i.pinimg.com/736x/e9/8f/81/e98f814da6b968a11c09871d473b99e1.jpg"
        target="_blank"
      >
        <AppTagsList light :tags="['HTML', 'CSS', 'VUE', 'GSAP']" />
        <div class="projects-list__item-description">
          <h3 class="title title-3 tablet-title-3">Cybersport Bets</h3>
          <div class="projects-list__item-arrow -pointer-black">
            <img
              v-lazyload
              srcset="/image/lazyload.png"
              src="/image/icons/arrow-top-right-white.svg"
              alt="kit-st.com - White arrow"
            />
          </div>
          <div class="text text-3 tablet-text-3 mob-text-3">
            <p>
              Any ranking system is bound to be subjective, and our ratings for
              the major esports gambling sites are no exception.
            </p>
          </div>
        </div>
      </a>
    </li>

    <!--    =====================================================================-->

    <li class="projects-list__item -size-s" v-cursor-pointer>
      <picture class="projects-list__preview">
        <source
          srcset="/image/projects/2-mobile.jpg"
          media="(max-width: 760px)"
        />
        <img
          v-lazyload
          srcset="/image/lazyload.png"
          src="/image/projects/2.jpg"
          alt="Cybersport Bets"
        />
      </picture>
      <a
        href="https://i.pinimg.com/736x/e9/8f/81/e98f814da6b968a11c09871d473b99e1.jpg"
        target="_blank"
      >
        <AppTagsList light :tags="['HTML', 'CSS', 'VUE', 'GSAP']" />
        <div class="projects-list__item-description">
          <h3 class="title title-3 tablet-title-3">Cybersport Bets</h3>
          <div class="projects-list__item-arrow -pointer-black">
            <img
              v-lazyload
              srcset="/image/lazyload.png"
              src="/image/icons/arrow-top-right-white.svg"
              alt="kit-st.com - White arrow"
            />
          </div>
          <div class="text text-3 tablet-text-3 mob-text-3">
            <p>
              Any ranking system is bound to be subjective, and our ratings for
              the major esports gambling sites are no exception.
            </p>
          </div>
        </div>
      </a>
    </li>

    <!--    =====================================================================-->

    <li class="projects-list__item -size-m" v-cursor-pointer>
      <picture class="projects-list__preview">
        <source
          srcset="/image/projects/3-mobile.jpg"
          media="(max-width: 760px)"
        />
        <img
          v-lazyload
          srcset="/image/lazyload.png"
          src="/image/projects/3.jpg"
          alt="Cybersport Bets"
        />
      </picture>
      <a
        href="https://i.pinimg.com/736x/e9/8f/81/e98f814da6b968a11c09871d473b99e1.jpg"
        target="_blank"
      >
        <AppTagsList light :tags="['HTML', 'CSS', 'VUE', 'GSAP']" />
        <div class="projects-list__item-description">
          <h3 class="title title-3 tablet-title-3">Cybersport Bets</h3>
          <div class="projects-list__item-arrow -pointer-black">
            <img
              v-lazyload
              srcset="/image/lazyload.png"
              src="/image/icons/arrow-top-right-white.svg"
              alt="kit-st.com - White arrow"
            />
          </div>
          <div class="text text-3 tablet-text-3 mob-text-3">
            <p>
              Any ranking system is bound to be subjective, and our ratings for
              the major esports gambling sites are no exception.
            </p>
          </div>
        </div>
      </a>
    </li>

    <!--    =====================================================================-->

    <li class="projects-list__item -size-m" v-cursor-pointer>
      <picture class="projects-list__preview">
        <source
          srcset="/image/projects/3-mobile.jpg"
          media="(max-width: 760px)"
        />
        <img
          v-lazyload
          srcset="/image/lazyload.png"
          src="/image/projects/3.jpg"
          alt="Cybersport Bets"
        />
      </picture>
      <a
        href="https://i.pinimg.com/736x/e9/8f/81/e98f814da6b968a11c09871d473b99e1.jpg"
        target="_blank"
      >
        <AppTagsList light :tags="['HTML', 'CSS', 'VUE', 'GSAP']" />
        <div class="projects-list__item-description">
          <h3 class="title title-3 tablet-title-3">Cybersport Bets</h3>
          <div class="projects-list__item-arrow -pointer-black">
            <img
              v-lazyload
              srcset="/image/lazyload.png"
              src="/image/icons/arrow-top-right-white.svg"
              alt="kit-st.com - White arrow"
            />
          </div>
          <div class="text text-3 tablet-text-3 mob-text-3">
            <p>
              Any ranking system is bound to be subjective, and our ratings for
              the major esports gambling sites are no exception.
            </p>
          </div>
        </div>
      </a>
    </li>

    <!--    =====================================================================-->

    <li class="projects-list__btn -size-s">
      <AppCircleButton :href="'#'" :noBg="true"> Все проекты</AppCircleButton>
    </li>
  </ul>
</template>

<style>
@import "./styles.css";
</style>

<script setup>
// imports

import { use } from "./use";

// imports Components

import AppTagsList from "~/components/app-components/elements/AppTagsList";
import AppCircleButton from "~/components/app-components/elements/AppCircleButton";

// Logic

use();
</script>
