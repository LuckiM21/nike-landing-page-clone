import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/nike-landing-page-clone/",
  // base: "/nike2.0clone/",
});
