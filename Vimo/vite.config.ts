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
      '@styles':path.resolve(__dirname, './src/styles'),
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
      mangle: {
        toplevel: true,  // Mangle los nombres de las variables globales
      },
    },

    // Habilitar la división del CSS en múltiples archivos
    cssCodeSplit: true,

    // Limitar el tamaño de los chunks (en KB)
    chunkSizeWarningLimit: 500,

    // Configuración avanzada de Rollup para Code Splitting (división de código)
    rollupOptions: {
      output: {
        // Nombrar los archivos de salida
        assetFileNames: 'assets/[name].[hash][extname]',
        chunkFileNames: 'chunks/[name].[hash].js',
        entryFileNames: '[name].[hash].js',

        // Lógica de división de chunks (manualChunks)
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // 1. Separar React y ReactDOM en su propio chunk para mejor caché
            if (id.includes('/react') || id.includes('/react-dom')) {
                return 'react-vendor';
            }
            // 2. El resto de dependencias va a 'vendor'
            return 'vendor';
          }
          if (id.includes('src/components')) {
            // 3. Agrupar todos los componentes internos
            return 'components'; 
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
