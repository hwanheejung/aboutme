import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    blockquote: ({ children }) => (
      <blockquote
        style={{
          color: "var(--color-primary)",
          opacity: 0.8,
          fontWeight: 200,
          quotes: "none",
        }}
      >
        {children}
      </blockquote>
    ),

    ...components,
  };
}
