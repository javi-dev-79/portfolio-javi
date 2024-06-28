import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
    plugins: [react()],
    build: {
        sourcemap: false // Disable source maps in production
    },
    css: {
        devSourcemap: false // Disable source maps in development
    }
})
