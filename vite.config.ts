import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  Base: "https://andreina14-hub.github.io/pokeapi-project/",
});
