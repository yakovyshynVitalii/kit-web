// Imports
import { scrollTo } from "~/utils/helpers/ui/useScrollTo";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("page:finish", () => {
    window.scrollTo(0, 0);

    if (window.location.hash) {
      setTimeout(() => scrollTo(window.location.hash), 200);
    }
  });
});
