import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";

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
    img: (props) => (
      <Image
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        {...(props as ImageProps)}
      />
    ),
    ...components,
  };
}
