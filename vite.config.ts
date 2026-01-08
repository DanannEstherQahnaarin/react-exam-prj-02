import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@css': path.resolve(__dirname, './src/css'),
      "@section": path.resolve(__dirname, './src/section'),
      '@node-props': path.resolve(__dirname, './src/interface/node-props.tsx'),
      '@attr-props': path.resolve(__dirname, './src/interface/attr-props.tsx'),
    },
  },
})
