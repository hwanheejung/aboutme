/** @type {import('next').NextConfig} */
import createMDX from "@next/mdx";
import path from "path";
import { fileURLToPath } from "url";

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
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
});

export default withMDX(nextConfig);
