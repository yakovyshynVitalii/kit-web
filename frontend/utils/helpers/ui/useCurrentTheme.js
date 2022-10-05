import { useDark } from "@vueuse/core/index";

export default function useCurrentTheme() {
  const isDark = useDark({
    selector: "body",
    valueLight: "light",
    valueDark: "dark",
  });

  // ...

  return {
    isDark,
  };
}
