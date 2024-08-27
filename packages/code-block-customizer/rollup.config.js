import typescript from "@rollup/plugin-typescript";

export default [
  {
    input: "CodeBlock.tsx",
    output: {
      file: "dist/codeblock.js",
    },
  },
].map((entry) => ({
  ...entry,
  external: ["react/jsx-runtime"],
  plugins: [typescript()],
}));
