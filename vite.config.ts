import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/learneradarsh.github.io/",
  plugins: [react()],
});