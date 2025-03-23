import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        laravel({
            input:[
                'resources/js/app.js',
                'modules/Core/Resources/js/app.js',
                // 'modules/Blog/Resources/css/admin.css',
                // 'modules/Profile/Resources/js/app.js',
            ],
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
    resolve: {
        alias: {
            '@'       : '/resources/js',
            '@profile': '/modules/Profile/Resources/js',
            '@blog'   : '/modules/Blog/Resources/js',
        }
    }
});
