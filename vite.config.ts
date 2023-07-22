/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  cacheDir: './node_modules/.vite/awesomereactapp',

  server: {
    port: 4200,
    host: 'localhost',
  },

  preview: {
    port: 4300,
    host: 'localhost',
  },

  plugins: [
    react(),
    viteTsConfigPaths({
      root: './',
    }),
  ],

  define: {
    'process.env': {
      REACT_APP_GOOGLE_API_KEY: 'AIzaSyDutTaz0EF9NpTm_ZDiN1KYvMxbKHXtPa8',
    },
  },

  build: {
    rollupOptions: {
      external: ['final-form'],
    },
  },
});
