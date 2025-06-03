import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: { '.js': 'jsx' }
    // It's good practice to also ensure that esbuild processes .jsx files correctly by default with the react plugin,
    // but this specific loader config is to address the user's error for .js files.
    // The react plugin itself should handle .jsx, so we are primarily targeting .js here.
  }
});
