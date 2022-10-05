// import Global

import { usePreloaderHide } from "~/composables/preloader/functions/usePreloaderHide";

export default function useErrorPage() {
  // Meta

  useGlobalMeta();

  // Logic

  onMounted(() => {
    // Programmatically hide preloader
    // because with error.vue page:finish hook don't work
    usePreloaderHide();
  });
}
