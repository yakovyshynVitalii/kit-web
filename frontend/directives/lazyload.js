function loadElement(el) {
  const src = el.getAttribute("data-src");
  const tagName = el.tagName.toLowerCase();
  const videoStartPosition = el.getAttribute("data-video-start-position");

  let t = "#t=0.01";

  if (videoStartPosition) {
    t = videoStartPosition;
  }

  if (tagName === "img") {
    el.removeAttribute("srcset", src);
    el.classList.remove("lazyload");
  } else if (tagName === "video") {
    el.innerHTML = `<source type="video/mp4" src="${src}${t}" />`;
    el.classList.remove("lazyload");
  }
}

function viewportLazyload() {
  document.querySelectorAll(".lazyload").forEach((el) => {
    const toLoad = getOffset(el).top < window.scrollY + window.innerHeight;
    if (toLoad) loadElement(el);
  });
}

function lazyload() {
  if (window.scrollY > 0) {
    document.querySelectorAll(".lazyload").forEach((el) => {
      loadElement(el);
    });
  }
}

if (process.client) {
  window.addEventListener("scroll", lazyload);
  window.addEventListener("trigger-lazyload", lazyload);
  window.addEventListener("page-ready", viewportLazyload);
}

export default {
  beforeMount(el) {
    el.classList.add("lazyload");
  },
};
