import { gsap } from "gsap";
import { onMounted } from "vue";

export default function use() {
  // Magnetic btn logic
  const magnetic = ref(null);

  onMounted(() => {
    const mContent = magnetic.value.nextElementSibling;

    function parallaxIt(e, target, movement = 1) {
      const boundingRect = magnetic.value.getBoundingClientRect();
      const relX = e.pageX - boundingRect.left;
      const relY = e.pageY - boundingRect.top;
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      gsap.to(target, {
        x: (relX - boundingRect.width / 2) * movement,
        y: (relY - boundingRect.height / 2 - scrollTop) * movement,
        ease: "power1",
        duration: 0.8,
      });
    }

    // 2. Call the function

    function callParallax(e) {
      parallaxIt(e, mContent);
    }

    magnetic.value.addEventListener("mousemove", function (e) {
      callParallax(e);
    });

    magnetic.value.addEventListener("mouseleave", function (e) {
      gsap.to(".magnetic-content", {
        scale: 1,
        x: 0,
        y: 0,
        ease: "power3",
        duration: 0.8,
      });
    });
  });

  return {
    magnetic,
  };
}
