# Limitless
https://limitless-ljmi.onrender.com

## Requirements
[Node.js](https://nodejs.org/en/) with [Yarn](https://yarnpkg.com).

## Installation
- Install dependencies with ```yarn install```
- Build assets with ```yarn run build```

## Development
[Laravel Mix](https://laravel-mix.com) is used to build assets from sources. CSS should be written with help of [Sass](https://sass-lang.com). JS should utilise modern ES6+ syntax. Multipage HTML structure provides by use of [Twig](https://twig.symfony.com). All sources are stored in "src" directory. Compiled assets are stored in "public" directory. You can use ```yarn run watch``` command to watch for file changes. All assets are linted using eslint and stylelint, make sure to fix all linting problems before commiting your changes.
