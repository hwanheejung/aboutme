import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // h1: ({ children }) => (
    //   <h1 style={{ fontSize: "2.5rem" }} className="font-bold">
    //     {children}
    //   </h1>
    // ),
    // h2: ({ children }) => (
    //   <h2 style={{ fontSize: "2rem" }} className="font-bold">
    //     {children}
    //   </h2>
    // ),
    // h3: ({ children }) => (
    //   <h3 style={{ fontSize: "1.5rem" }} className="font-bold mt-8 mb-3">
    //     {children}
    //   </h3>
    // ),
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
