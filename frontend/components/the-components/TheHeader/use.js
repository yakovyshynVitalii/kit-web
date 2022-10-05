import { scrollLock } from "~/utils/helpers/ui/useScrollLock";
import { scrollTo } from "~/utils/helpers/ui/useScrollTo";
import { useToggle } from "@vueuse/core";
import useCurrentTheme from "~/utils/helpers/ui/useCurrentTheme";
import { useRoute, useRouter } from "nuxt/app";
import { getRoute } from "~/utils/router/getRoute";

export function use() {
  // Change theme color
  const { isDark } = useCurrentTheme();

  const toggleDark = useToggle(isDark);

  // Open menu

  const isMenuOpen = ref(false);

  function openMenu() {
    scrollLock();
    isMenuOpen.value = !isMenuOpen.value;
  }

  // Scroll to block from menu

  const route = useRoute();
  const router = useRouter();

  router.beforeEach(() => {
    // Close menu after routing

    if (isMenuOpen.value === true) {
      openMenu();
    }
  });

  function scrollToFromMenu(selector) {
    // is menu open?

    if (isMenuOpen.value) {
      openMenu();
    }

    // is home page?

    if (route.path !== "/") {
      return navigateTo({
        name: getRoute("Home").name,
        hash: selector,
      });
      // router.push({ path: `/`, hash:  });
    } else {
      scrollTo(selector);
    }
  }

  //

  return {
    // Change theme color
    toggleDark,

    // Open menu
    isMenuOpen,
    openMenu,

    // Scroll to block from menu
    scrollToFromMenu,
  };
}
