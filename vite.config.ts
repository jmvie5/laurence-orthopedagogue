import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { netlifyPlugin } from "@netlify/remix-adapter/plugin";
import { installGlobals } from "@remix-run/node";
import mdx from '@mdx-js/rollup'

installGlobals();


export default defineConfig({
  plugins: [
    mdx(/* jsxImportSource: …, otherOptions… */),
    remix(), 
    netlifyPlugin(), 
    tsconfigPaths(),
    
  ]
});
