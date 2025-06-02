import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  define: {
    // Explicitly define environment variables for production builds
    // This ensures Railway's environment variables are properly embedded
    'import.meta.env.VITE_WEBHOOK_URL': JSON.stringify(process.env.VITE_WEBHOOK_URL || ''),
  },
  server: {
    host: "::",
    port: 8080,
  },
  preview: {
    port: process.env.PORT ? parseInt(process.env.PORT) : 4173,
    host: "0.0.0.0",
  },
  build: {
    outDir: "dist",
    sourcemap: false,
    minify: "esbuild",
  },
  optimizeDeps: {
    include: ['react', 'react-dom']
  },
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
