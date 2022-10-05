// Imports
import { usePreloaderHide } from "~/composables/preloader/functions/usePreloaderHide";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("page:finish", () => {
    const preloader = document.querySelector(".preloader");

    if (preloader) {
      usePreloaderHide();
    }
  });
});
