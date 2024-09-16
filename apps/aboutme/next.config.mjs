/** @type {import('next').NextConfig} */
import createMDX from "@next/mdx";
import path from "path";
import { fileURLToPath } from "url";
import remarkGfm from "remark-gfm";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const prefix =
  process.env.NODE_ENV === "production"
    ? "https://hwanheejung.github.io/aboutme/"
    : "";

const nextConfig = {
  basePath: "/aboutme",
  output: "export",
  assetPrefix: prefix,
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    unoptimized: true,
  },

  webpack: (config) => {
    config.resolve.alias["@"] = path.resolve(__dirname, "src");
    config.resolve.alias["public"] = path.resolve(__dirname, "public");
    config.resolve.alias["contents"] = path.resolve(__dirname, "contents");
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  transpilePackages: ["next-mdx-remote"],
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeAutolinkHeadings],
  },
});

export default withMDX(nextConfig);
