import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span className="font-bold">💫 Code Block Customizer</span>,
  nextThemes: {
    defaultTheme: "light",
    forcedTheme: "light",
  },
  darkMode: false,
  project: {
    link: "https://github.com/hwanheejung/code-block-customizer",
  },
  docsRepositoryBase:
    "https://github.com/hwanheejung/code-block-customizer/tree/main/docs",
  faviconGlyph: "💫",
  useNextSeoProps() {
    return {
      titleTemplate: "%s | Code Block Customizer",
    };
  },
};

export default config;
