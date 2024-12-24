import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import imagemin from 'vite-plugin-imagemin';

export default defineConfig({
  plugins: [
    // Plugin para React con SWC
    react({
      jsxImportSource: 'react',
    }),

  

    // Plugin para optimización de imágenes
    imagemin({
      gifsicle: { optimizationLevel: 7, interlaced: false },
      optipng: { optimizationLevel: 7 },
      pngquant: { quality: [0.6, 0.8], speed: 4 },
      mozjpeg: { quality: 70 },  // Reducir la calidad de JPEG
      webp: { quality: 75 },     // Convertir imágenes a WebP con calidad 75%
    }),
  ],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@styles':path.resolve(__dirname, './src/styles'),
    },
  },
  build: {
    // Usar Terser para minificar el código
    minify: 'terser',

    terserOptions: {
      compress: {
        drop_console: true,  // Eliminar `console.log` y otros console.*
        drop_debugger: true,  // Eliminar `debugger` en producción
        pure_getters: true,   // Eliminar propiedades no utilizadas
        passes: 2,            // Realizar múltiples pasadas para optimizar más
      },
      mangle: {
        toplevel: true,  // Mangle los nombres de las variables globales
      },
    },

    // Habilitar la división del CSS en múltiples archivos
    cssCodeSplit: true,

    // Limitar el tamaño de los chunks (en KB)
    chunkSizeWarningLimit: 500,

    // Dividir el código en chunks más pequeños (code splitting avanzado)
    rollupOptions: {
      output: {
        // Nombrar los archivos de salida
        assetFileNames: 'assets/[name].[hash][extname]',
        chunkFileNames: 'chunks/[name].[hash].js',
        entryFileNames: '[name].[hash].js',

        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';  // Agrupar dependencias de `node_modules` en un solo archivo
          }
          if (id.includes('src/components')) {
            return 'components'; // Dividir los componentes en un archivo separado
          }
        },
      },
    },
  },

  // Configuración del servidor de desarrollo
  server: {
    port: 3000,  // Puerto para el servidor de desarrollo
    open: true,  // Abrir automáticamente el navegador
    hmr: true,   // Habilitar Hot Module Replacement
  },
});
