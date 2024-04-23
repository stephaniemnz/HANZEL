import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';
import { visualizer } from 'rollup-plugin-visualizer';

const API_BASE_URL = 'http://localhost:3001';

export default defineConfig({
  plugins: [
    react(),
    visualizer({ open: false }) // This plugin generates a visualizer of your bundle
  ],
  // existing configuration...
});



// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import autoprefixer from 'autoprefixer';

// // Example configuration for proxying API requests in development
// const API_BASE_URL = 'http://localhost:3001'; // Adjust the port as needed for your Express server

// export default defineConfig({
//   plugins: [
//     react(),
//   ],
//   css: {
//     postcss: {
//       plugins: [
//         autoprefixer({}) // add options if needed
//       ],
//     }
//   },
//   server: {
//     proxy: {
//       // Proxy API requests to Express server
//       '/api': {
//         target: API_BASE_URL,
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/api/, '')
//       }
//     }
//   },
//   build: {
//     chunkSizeWarningLimit: 1000, // Increase the chunk size warning limit to 1000 KB
//     rollupOptions: {
//       output: {
//         manualChunks(id) {
//           if (id.includes('node_modules')) {
//             // Node modules are split based on the directory name
//             return id.toString().split('node_modules/')[1].split('/')[0].toString();
//           }
//         }
//       }
//     }
//   }
// });
