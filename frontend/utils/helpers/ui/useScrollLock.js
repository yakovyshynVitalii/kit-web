// Функция блокировки скролла

function preventDefault(e) {
  e.preventDefault();
}

function allowScrollableElements() {
  document.querySelectorAll(".-modal-scrollable-element").forEach((el) => {
    el.addEventListener("pointermove", preventDefault);
    el.addEventListener("touchmove", preventDefault);
  });
}

function clearScrollableElements() {
  document.querySelectorAll(".-modal-scrollable-element").forEach((el) => {
    el.removeEventListener("pointermove", preventDefault);
    el.removeEventListener("touchmove", preventDefault);
  });
}

export function scrollLock() {
  const html = document.documentElement;
  const body = document.body;

  const isScrollLock = html.classList.contains("-scroll-lock");

  if (isScrollLock) {
    clearScrollableElements();

    const scrollPositionBeforeLock = html.getAttribute("data-scroll");

    html.classList.remove("-scroll-lock");
    body.classList.remove("-scroll-lock");

    window.scrollTo(0, scrollPositionBeforeLock);
    document.body.scrollTo(0, 0);
  } else {
    allowScrollableElements();

    const scrollTop = window.scrollY;

    html.classList.add("-scroll-lock");
    body.classList.add("-scroll-lock");

    body.scrollTo(0, scrollTop);
    html.setAttribute("data-scroll", scrollTop);
  }
}
