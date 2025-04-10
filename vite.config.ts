import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // استخدام Vite React plugin بدلاً من SWC plugin
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(), // استخدام Vite plugin الخاص بـ React
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  esbuild: {
    // هنا يمكنك تخصيص إعدادات esbuild إذا احتجت
    jsxInject: `import React from 'react'`, // إذا كنت تستخدم React JSX بدون الحاجة إلى استيراد React في كل ملف
  },
}));
