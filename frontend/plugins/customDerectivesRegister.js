import lazyload from "~/directives/lazyload";
import cursorPointer from "~/directives/cursorPointer";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("lazyload", lazyload);
  nuxtApp.vueApp.directive("cursor-pointer", cursorPointer);
});
