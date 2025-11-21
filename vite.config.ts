import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Determine base path depending on environment:
  // - On Vercel we should serve from root '/'. Vercel sets process.env.VERCEL.
  // - For GitHub Pages (repo pages) we want the repo name as base (e.g. '/sigama-vision/').
  // - In dev use '/'.
  base: process.env.VERCEL ? "/" : mode === "production" ? "/sigama-vision/" : "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
