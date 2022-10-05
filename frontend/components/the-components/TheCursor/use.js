import { gsap } from "gsap";

export default function use() {
  const cursor = ref(null);

  // cursor status

  const isHidden = ref(false);
  const active = ref(false);
  const disable = ref(false);
  const blackCursor = ref(false);

  let mouseX = 0;
  let mouseY = 0;
  let posX = 0;
  let posY = 0;

  // Get mouse position

  function mouseCoords(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  }

  // Initialization gsap animation

  gsap.to({}, 0.01, {
    repeat: -1,

    onRepeat: () => {
      posX += (mouseX - posX) / 4;
      posY += (mouseY - posY) / 4;

      if (cursor.value !== null) {
        gsap.set(cursor.value, {
          css: {
            left: posX - 10,
            top: posY - 10,
          },
        });
      }
    },
  });

  // Logic
  onMounted(() => {
    window.addEventListener("resize", (e) => {
      mouseX = 0;
      mouseY = 0;
    });

    // Activated cursor aura

    window.addEventListener("mousemove", (e) => {
      mouseCoords(e);

      // cursor activated
      isHidden.value = true;

      //  cursor event on form clear
      const formClear = document.querySelector(".form-clear");
      if (formClear) {
        formClear.addEventListener("mouseover", () => {
          disable.value = true;
        });
        formClear.addEventListener("mouseout", () => {
          disable.value = false;
        });
        formClear.addEventListener("click", () => {
          disable.value = false;
        });
      }
    });
  });

  //...
  return {
    cursor,

    // Cursor status
    isHidden,
    active,
    disable,
    blackCursor,
  };
}
