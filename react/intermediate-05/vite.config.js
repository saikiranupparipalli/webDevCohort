import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        // changeOrigin work is to change the HOST(e.g: google.com, localhost:500)
        // e.g: localhost:5173 to localhost:3000

        // headers remains same if changeOrigin is false
      },
    },
  },
});
