import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Change 'your-repo-name' to your actual GitHub repo name if deploying to GitHub Pages
export default defineConfig({
  base: '/',
  plugins: [react()],
})
