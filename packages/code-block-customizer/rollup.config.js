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
  external: ["react", "react/jsx-runtime"],
  plugins: [
    typescript({
      tsconfig: "./tsconfig.json",
      declaration: true,
      declarationDir: "dist",
    }),
  ],
}));
