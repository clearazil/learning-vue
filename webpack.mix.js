const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.webpackConfig({
    resolve: {
        alias: {'vue$': 'vue/dist/vue.common.js'},
    },
});

mix.js('resources/assets/js/app.js', 'public/js/bundle.js')
    .js('resources/assets/js/shared-state.js', 'public/js/shared-state.js')
    .js('resources/assets/js/custom-input-components.js', 'public/assets/js/custom-input-components.js');


