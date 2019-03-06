# webpack

* [webpack](https://webpack.js.org/)
  * [dynamic import](https://webpack.js.org/guides/code-splitting/)
  * [preload / prefetch](https://wanago.io/2018/08/20/webpack-4-course-part-eight-dynamic-imports-with-prefetch-and-preload/)
  * [critical](https://www.npmjs.com/package/webpack-plugin-critical)

  * plugins
    * [webpack-cli](https://github.com/webpack/webpack-cli)
    * [webpack-dev-server](https://github.com/webpack/webpack-dev-server)

    * [file-loader](https://github.com/webpack-contrib/file-loader)

    * css
      * [css-loader](https://github.com/webpack-contrib/css-loader)
      * [style-loader](https://github.com/webpack-contrib/style-loader)
      * [MiniCssExtractPlugin](https://github.com/webpack-contrib/mini-css-extract-plugin)
      * [postcss](https://postcss.org/)
        * [postcss-loader](https://github.com/postcss/postcss-loader)
        * [postcss-custom-media](https://github.com/postcss/postcss-custom-media)
        * [preset-env](https://github.com/csstools/postcss-preset-env)
        * [reporter](https://github.com/postcss/postcss-reporter)
        * [cssnano](https://cssnano.co/)

      * [stylelint](https://stylelint.io/)
        * stylelint.config.js
          * a [szabályok](https://stylelint.io/user-guide/rules/) konfigurációs fájla
        * [stylelint-webpack-plugin](https://github.com/webpack-contrib/stylelint-webpack-plugin)

    * js
      * [babel](https://babeljs.io/)
        * [babel-loader](https://github.com/babel/babel-loader)
        * [es6](http://es6-features.org/)
        * .babelrc
          * a babel konfigurációs fájla
          * használt pluginek
            * [useBuiltIns: usage](https://babeljs.io/docs/en/babel-preset-env#usebuiltins-usage-experimental)
            * [plugin-sytanx-dynamic-import](https://babeljs.io/docs/en/babel-plugin-syntax-dynamic-import)

      * [eslint](https://eslint.org/)
        * .eslintrc.js
          * a [szabályok](https://eslint.org/docs/rules/) konfigurációs fájla

      * [terser](https://github.com/terser-js/terser)
        * parser és compresszor, uglify-es és uglify-js helyett, ES6+ kódhoz
        * [terser-webpack-plugin](https://github.com/webpack-contrib/terser-webpack-plugin)

    * [pug](https://pugjs.org/)
      * [pug-loader](https://github.com/pugjs/pug-loader)
      * [pug-lint](https://github.com/pugjs/pug-lint)
        * .pug-lintrc.js
          * a [szabályok](https://github.com/pugjs/pug-lint/blob/master/docs/rules.md) konfigurációs fájla
      * [pug-lint-loader](https://github.com/Jack-Works/pug-lint-loader)

    * [CleanWebpackPlugin](https://github.com/johnagan/clean-webpack-plugin)
    * [HtmlWebpackPlugin](https://github.com/jantimon/html-webpack-plugin)
    * [RobotstxtWebpackPlugin](https://github.com/itgalaxy/robotstxt-webpack-plugin)

    * [lodash-webpack-plugin](https://github.com/lodash/lodash-webpack-plugin)
