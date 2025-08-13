import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // ✅ Enables 'test' without import
    environment: "jsdom", // ✅ Allows DOM-based testing
    setupFiles: './src/setupTests.js',
  },
});
