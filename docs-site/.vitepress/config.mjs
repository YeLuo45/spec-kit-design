import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Spec Kit Design",
  description: "Spec Kit & Specify CLI — Spec-Driven Development (SDD) 工具包设计文档",
  base: "/spec-kit-design/",
  head: [
    ["link", { rel: "icon", href: "/favicon.svg" }],
    ["meta", { name: "theme-color", content: "#10b981" }],
  ],
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Architecture", link: "/architecture" },
      { text: "Integrations", link: "/integrations" },
      { text: "Extension System", link: "/extensions" },
      { text: "CLI", link: "/cli" },
    ],
    sidebar: [
      {
        text: "Getting Started",
        items: [
          { text: "Home", link: "/" },
          { text: "Architecture", link: "/architecture" },
          { text: "Quick Start", link: "/quickstart" },
        ],
      },
      {
        text: "Core Concepts",
        items: [
          { text: "Integrations", link: "/integrations" },
          { text: "Spec-Driven Dev", link: "/spec-driven" },
          { text: "CLI Reference", link: "/cli" },
        ],
      },
      {
        text: "Extension System",
        items: [
          { text: "Overview", link: "/extensions" },
          { text: "API Reference", link: "/extension-api" },
          { text: "Development Guide", link: "/extension-dev" },
          { text: "Publishing Guide", link: "/extension-publish" },
        ],
      },
      {
        text: "Reference",
        items: [
          { text: "Integrations Catalog", link: "/catalog" },
          { text: "Templates", link: "/templates" },
        ],
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/actionweigh/spec-kit" },
    ],
  },
  markdown: {
    theme: {
      light: "github-light",
      dark: "github-dark",
    },
  },
  lastUpdated: true,
});
