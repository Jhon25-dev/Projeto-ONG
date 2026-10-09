import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  base: '/Projeto-ONG/',
  build: {
    rollupOptions: {
      input: {
        inicio: resolve(rootDir, 'index/index.html'),
        projetos: resolve(rootDir, 'projeto/projeto.html'),
        formulario: resolve(rootDir, 'formulario/formulario.html')
      }
    }
  }
});