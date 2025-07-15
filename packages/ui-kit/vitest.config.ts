import { defineConfig } from 'vitest/config'

export default defineConfig(
  defineConfig({
    test: {
      environment: 'jsdom',
      globals: true,
      setupFiles: './tests/setup.ts',
    },
  })
)
