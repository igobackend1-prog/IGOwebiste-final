import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("three") || id.includes("@react-three")) return "three";
            if (id.includes("framer-motion")) return "framer-motion";
            if (id.includes("@radix-ui")) return "radix-ui";
            if (id.includes("react-dom")) return "react-dom";
            if (id.includes("react-router-dom") || id.includes("react-router")) return "react-router";
            if (id.includes("react")) return "react";
            if (id.includes("@supabase") || id.includes("supabase")) return "supabase";
            if (id.includes("@tanstack")) return "tanstack";
            if (id.includes("lucide-react")) return "lucide";
            if (id.includes("zod") || id.includes("react-hook-form")) return "forms";
            return "vendor";
          }
          if (id.includes("src/data/")) return "site-data";
        },
      },
    },
  },
}));
