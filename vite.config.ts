import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    jsxImportSource: "@emotion/react",
    babel: {
      presets: ["@emotion/babel-preset-css-prop"],
      plugins: ["@emotion/babel-plugin"]
    }
  })]
})
