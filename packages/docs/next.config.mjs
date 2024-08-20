/** @type {import('next').NextConfig} */
import nextra from "nextra";

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  codeHighlight: false,
  //     mdxOptions: {
  //       remarkPlugins: [remarkCodeImport, remarkRemoveFileProp],
  //       rehypePlugins: [rehypeMdxCodeProps],
  //     },
});

export default withNextra({
  output: "export",
  images: {
    unoptimized: true,
  },
});
