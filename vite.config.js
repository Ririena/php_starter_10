import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/src/App.css','resources/src/main.jsx'],
            refresh: true,
        }),
        tailwindcss(),
    react({ include: /\.(mdx|js|jsx|ts|tsx)$/ }),
    ],

});
