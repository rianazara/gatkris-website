import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// For GitHub Pages:
//  - user/organization site (<user>.github.io)      -> base: '/'
//  - project site        (<user>.github.io/<repo>/) -> base: '/<repo>/'
// Override at build time with: VITE_BASE=/repo/ npm run build
export default defineConfig({
  base: process.env.VITE_BASE || '/',
  plugins: [react()],
})
