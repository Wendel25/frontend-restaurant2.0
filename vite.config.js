import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import checker from 'vite-plugin-checker';
import dotenv from 'dotenv';

// ----------------------------------------------------------------------

dotenv.config();

const baseURL = process.env.URL_LOCAL || 'http://localhost:5000';
const authTokenType = 'Bearer';
const linkImage = `${baseURL}/files`;

export default defineConfig({
  plugins: [
    react(),
    checker({
      eslint: {
        lintCommand: 'eslint "./src/**/*.{js,jsx,ts,tsx}"',
      },
    }),
  ],
  resolve: {
    alias: [
      {
        find: /^~(.+)/,
        replacement: path.join(process.cwd(), 'node_modules/$1'),
      },
      {
        find: /^src(.+)/,
        replacement: path.join(process.cwd(), 'src/$1'),
      },
    ],
  },
  server: {
    port: 3030,
  },
  preview: {
    port: 3030,
  },
  define: {
    'process.env': {
      URL_LOCAL: `${baseURL}`,
    },
    'process.env.token_type': {
      BASE_TYPE_TOKEN: `${authTokenType}`,
    },
    'process.env.link_image': {
      LINK_IMAGE: `${linkImage}`,
    },
  },
});
