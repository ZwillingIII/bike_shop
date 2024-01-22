import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vuePlugin from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from 'url';

export default defineConfig({
    plugins: [
        vuePlugin(),
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
    resolve: {
        alias: [
            {
                find: '@svg',
                replacement: fileURLToPath(new URL('./public/svg', import.meta.url))
            },
            {
                find: '@fonts',
                replacement: fileURLToPath(new URL('./public/fonts', import.meta.url))
            },
            {
                find: '@img',
                replacement: fileURLToPath(new URL('./public/img', import.meta.url))
            }
        ]
    }
});
