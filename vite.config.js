// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 3001,
  },
  define: {
    'process.env': {}
  },
  plugins: [
    react()
  ],
});
