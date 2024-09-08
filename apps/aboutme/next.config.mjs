/** @type {import('next').NextConfig} */

const prefix =
  process.env.NODE_ENV === "production"
    ? "https://hwanheejung.github.io/aboutme/"
    : "";

const nextConfig = {
  basePath: "/aboutme",
  output: "export",
  assetPrefix: prefix,
};

export default nextConfig;
