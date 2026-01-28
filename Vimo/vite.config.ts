import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import imagemin from 'vite-plugin-imagemin';
import autoprefixer from 'autoprefixer'; // Importamos Autoprefixer

export default defineConfig({
  
  plugins: [
    // Plugin para React con SWC
    react({
      jsxImportSource: 'react',
    }),

    // Plugin para optimización de imágenes (reduce peso de assets)
    imagemin({
      gifsicle: { optimizationLevel: 7, interlaced: false },
      optipng: { optimizationLevel: 7 },
      pngquant: { quality: [0.6, 0.8], speed: 4 },
      mozjpeg: { quality: 70 },  // Reducir la calidad de JPEG
      webp: { quality: 75 },     // Convertir imágenes a WebP con calidad 75%
    }),
  ],

  // Configuración de alias para rutas de importación limpias
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@src': path.resolve(__dirname, './src'),
    },
  },

  // Configuración de PostCSS para añadir prefijos CSS automáticamente
  css: {
    postcss: {
      plugins: [
        autoprefixer()
      ],
    },
  },

  build: {
    // Usar Terser para minificar el código
    minify: 'terser',

    // Opciones agresivas de minificación para producción
    terserOptions: {
      compress: {
        drop_console: true,  // Eliminar `console.log`
        drop_debugger: true,  // Eliminar `debugger`
        pure_getters: true,
        passes: 2,            // Realizar múltiples pasadas para mayor optimización
      },
      format: {
        comments: false, // Elimina todos los comentarios
      },
      mangle: {
        toplevel: true,  // Mangle los nombres de las variables globales
      },
    },

    // Habilitar la división del CSS en múltiples archivos
    cssCodeSplit: true,

    // Limitar el tamaño de los chunks (en KB)
    chunkSizeWarningLimit: 500,

    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[hash][extname]',
        chunkFileNames: 'chunks/[name].[hash].js',
        entryFileNames: '[name].[hash].js',

        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Separar las librerías más pesadas en archivos individuales
            if (id.includes('@reduxjs')) return 'redux-vendor';
            if (id.includes('styled-components')) return 'styles-vendor';
            if (id.includes('react-router')) return 'router-vendor';

            // React y DOM por separado para caché persistente
            if (id.includes('react/') || id.includes('react-dom/')) return 'react-core';

            // Todo lo demás pequeño va a vendor
            return 'vendor';
          }
        },
      },
    },
  },

  // Configuración del servidor de desarrollo
  server: {
    port: 3007,
    open: true,
    hmr: true,
  },
});
