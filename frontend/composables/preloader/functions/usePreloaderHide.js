import { usePreloaderLoadedStatus } from "~/composables/preloader";

export function usePreloaderHide() {
  if (process.client) {
    const preloader = document.querySelector(".preloader");
    const animationBlock_1 = document.querySelector(".preloader-block.-white");
    const animationBlock_2 = document.querySelector(".preloader-block.-black");

    const endAnimFuncton = () => {
      preloader.classList.add("preloader-hidden");
      document.body.classList.remove("body-hidden");
      setTimeout(() => (usePreloaderLoadedStatus().value = true), 1000);
    };

    animationBlock_1.addEventListener("animationend", () => {
      endAnimFuncton();
    });

    animationBlock_2.addEventListener("animationend", () => {
      endAnimFuncton();
    });
  }
}
