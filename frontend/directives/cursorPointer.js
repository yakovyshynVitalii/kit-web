export default {
  mounted(el) {
    const cursor = document.querySelector(".cursor");
    const body = document.body;

    // cursor hover

    el.addEventListener("mouseover", () => {
      cursor.classList.add("-disable");
    });

    el.addEventListener("mouseout", () => {
      cursor.classList.remove("-disable");
    });

    // cursor click

    el.addEventListener("mousedown", () => {
      cursor.classList.add("-active");
    });

    el.addEventListener("mouseup", () => {
      cursor.classList.remove("-active");
      cursor.classList.add("-disable");
    });
  },
};
