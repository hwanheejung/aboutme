import typescript from "@rollup/plugin-typescript";

export default [
  {
    input: "src/CodeBlock.tsx",
    output: {
      file: "dist/codeblock.js",
      format: "esm",
    },
  },
].map((entry) => ({
  ...entry,
  external: ["react/jsx-runtime"],
  plugins: [typescript()],
}));
