const mix = require('laravel-mix')

require('laravel-mix-eslint')
require('@jorenrothman/laravel-mix-stylelint')
require('laravel-mix-twig')

mix
  .js('src/assets/js/main.js', 'js')
  .eslint({
    fix: true,
    extensions: ['js'],
  })
  .sass('src/assets/scss/main.scss', 'css')
  .stylelint({
    fix: true,
    extensions: ['scss'],
  })
  .twig({
    root: 'src/templates/pages', 
    output: '.',
    html: {
      inject: false,
    },
  })
  .setPublicPath('public')
  .copy('src/assets/img', 'public/img')
  .browserSync({
    server: './public',
    files: './src',
  })
