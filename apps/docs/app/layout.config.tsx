import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: "Nerve",
  },
  links: [
    {
      text: "Home",
      url: "https://fortress.build",
      active: "nested-url",
    },
  ],
  githubUrl: "https://github.com/fortress-build",
};
