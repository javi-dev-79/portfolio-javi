import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

export default defineConfig({
    plugins: [react()],
    build: {
        sourcemap: false // Desactivar los mapas de origen en producción
    },
    css: {
        devSourcemap: false // Desactivar los mapas de origen en desarrollo
    }
})
