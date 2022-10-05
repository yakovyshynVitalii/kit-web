export default function useGlobalMeta() {
  // Global Meta

  useMeta({
    meta: [
      // Viewport

      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no",
      },
      {
        name: "format-detection",
        content: "telephone=no",
      },

      // Theme color

      {
        name: "msapplication-TileColor",
        content: "#ffffff",
      },
      {
        name: "theme-color",
        content: "#ffffff",
      },
    ],

    link: [
      // Fonts

      {
        href: "/fonts/manrope-cyrillic.woff2",
        rel: "preload",
        as: "font",
        crossorigin: "anonymous",
      },
      {
        href: "/fonts/manrope-latin.woff2",
        rel: "preload",
        as: "font",
        crossorigin: "anonymous",
      },

      // Global styles

      {
        href: "/css/main.css",
        rel: "stylesheet",
      },

      // Favicon

      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/favicon/apple-touch-icon.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon/favicon-16x16.png",
      },
      {
        rel: "manifest",
        href: "/favicon/site.webmanifest",
      },
      {
        rel: "mask-icon",
        href: "/favicon/safari-pinned-tab.svg",
        color: "#f5001c",
      },
    ],
    bodyAttrs: [
      {
        class: "body-hidden",
        onclick: "", // Life hack
      },
    ],
  });
}
