import { defineConfig } from 'vite';

export default defineConfig({
  base: '/slozhno-sosredotochitsya/',
  build: {
    outDir: 'dist',
  },
  root: '.',
  publicDir: 'static',
});