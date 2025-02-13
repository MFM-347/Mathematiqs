import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/guide/build.html#library-mode
export default defineConfig({
  build: {
    lib: {
      entry: {
        fns: resolve(__dirname, 'src/fns.ts'),
        cli: resolve(__dirname, 'src/cli.ts'),
      },
      name: 'maths',
      fileName: (format, entryName) => `${entryName}.${format}.js`,
    },
    rollupOptions: {
      external: ['commander'],
      output: {
        globals: {
          commander: 'commander',
        },
      },
    },
  },
  plugins: [dts({ entryRoot: 'src', include: ['src/fns.ts', 'src/cli.ts'] })],
})
