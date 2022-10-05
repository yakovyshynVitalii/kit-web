import { useDark } from "@vueuse/core/index";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("app:created", () => {
    // Get current theme
    useDark({
      selector: "body",
      valueLight: "light",
      valueDark: "dark",
    });
  });
});
