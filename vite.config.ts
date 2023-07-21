import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  define: {
    'process.env': {
      REACT_APP_GOOGLE_API_KEY: 'AIzaSyDutTaz0EF9NpTm_ZDiN1KYvMxbKHXtPa8',
    },
  },
});
