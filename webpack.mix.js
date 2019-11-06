let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */
mix.copy('./src/index.html', 'public');
mix.copyDirectory('src/assets/', 'public/assets/');
mix.js('src/app.js', 'public/')
   .sass('src/app.scss', 'public/');
