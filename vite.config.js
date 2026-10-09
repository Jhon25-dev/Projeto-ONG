
import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        inicio: resolve(__dirname, 'index/index.html'),
        projetos: resolve(__dirname, 'projeto/projeto.html'),
        formulario: resolve(__dirname, 'formulario/formulario.html')
      }
    }
  }
});
