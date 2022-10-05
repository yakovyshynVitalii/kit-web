import { getOffset } from "./useGetOffset";

import { gsap } from "gsap";

import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export function scrollTo(selector) {
  const scrollHeight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight
  );

  const headerHeight = document.querySelector(".header").offsetHeight;
  const maxScrollPosition = scrollHeight - window.innerHeight;

  const scrollTop = window.scrollY;
  const offsetTop = getOffset(selector).top;

  let position = offsetTop - headerHeight;

  if (position > maxScrollPosition) {
    position = maxScrollPosition;
  }

  const distance =
    scrollTop > position ? scrollTop - position : position - scrollTop;
  const calcSpeed = (distance / 100) * 0.02;
  const speed = calcSpeed < 0.5 ? 0.5 : calcSpeed;

  gsap.to(window, {
    duration: speed,
    scrollTo: position,
    ease: "power1.inOut",
  });
}
