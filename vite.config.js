/* -----------------------------------------------------------------------------
 * dependencies
 * -------------------------------------------------------------------------- */

// core
import { resolve } from "path";

// 3rd party
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import typescript from "@rollup/plugin-typescript";

/* -----------------------------------------------------------------------------
 * constants
 * -------------------------------------------------------------------------- */

// TODO: change this to your library name
const LIB_NAME = "libTypescript";

/* -----------------------------------------------------------------------------
 * vite config
 * -------------------------------------------------------------------------- */

export default defineConfig({
  plugins: [tsconfigPaths()],
  build: {
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, "lib/index.ts"),
      name: LIB_NAME,
      fileName: "index",
    },
    rollupOptions: {
      plugins: [
        typescript({
          declaration: true,
          outDir: resolve(__dirname, "dist", "types"),
          exclude: ["**/*.test.ts"],
        }),
      ],
    },
  },
  test: {
    coverage: {
      provider: "c8",
    },
  },
});
