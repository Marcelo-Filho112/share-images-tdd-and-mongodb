import { defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        environment:'node',
        globals: true,
        coverage: {
            reporter: ['text', 'json-summary', 'json'],
            exclude: ['node_modules/', '__test__/'],
            reportOnFailure: true
        }
    }
})