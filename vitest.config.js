import { defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        environment:'node',
        globals: true,
        coverage: {
            provider:'v8',
            reporter: ['text', 'json', 'html', 'json-summary'],
            exclude: ['node_modules/', '__test__/'],
            reportOnFailure: true
        }
    }
})