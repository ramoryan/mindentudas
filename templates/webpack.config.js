// https://webpack.js.org/guides/development/
// https://hackernoon.com/a-tale-of-webpack-4-and-how-to-finally-configure-it-in-the-right-way-4e94c8e7e5c1
// https://slack.engineering/keep-webpack-fast-a-field-guide-for-better-build-performance-f56a5995e8f1

const path = require('path')

const webpack               = require('webpack')
const MiniCssExtractPlugin  = require('mini-css-extract-plugin')
const CleanWebpackPlugin    = require('clean-webpack-plugin')
const StyleLintPlugin       = require('stylelint-webpack-plugin')
const TerserPlugin          = require('terser-webpack-plugin')
const CopyWebpackPlugin     = require('copy-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin')
const WebpackAssetsManifest         = require('webpack-assets-manifest');
const HtmlWebpackPlugin             = require('html-webpack-plugin')

//
const dt  = new Date()
const now = `${ dt.getFullYear() }-${ dt.getMonth() + 1 }-${ dt.getDate() }`

module.exports = (env, options) => {
  const { mode } = options
  const PROD = mode === 'production'
  const DEV  = mode === 'development'
  const HASH = DEV ? 'hash' : 'contenthash'

  console.log(`mode: ${ mode }, PROD: ${ PROD }, DEV: ${ DEV }, HASH: ${ HASH }`)

  const config = {
    entry: {
      main: './web/main.js'
    },

    stats: PROD ? 'verbose' : 'normal',

    performance: {
      hints: PROD ? 'warning' : false
    },

    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: `[name].[${ HASH }].js`,
      chunkFilename: `[name].[${ HASH }].js`,
      publicPath: DEV ? 'http://localhost:8080/' : ''
    },

    // Egyelőre csak fejlesztéskor legyen egy gyors source-map
    // eredetileg inline-source-map volt használva, de ez gyorsabb
    // 2019.01.11: vissza az inline-source-map-ra, mert ez teljesen pontos source-map, hiába lassabb, mint a cheap-source-map
    devtool: DEV ? 'inline-source-map' : '',

    // https://webpack.js.org/plugins/split-chunks-plugin/#split-chunks-example-2
    optimization: {
      minimizer: [
        // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
        new TerserPlugin({ extractComments: true })
      ],
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all'
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true
          }
        }
      }
    },

    resolve: {
      descriptionFiles: [ 'package.json' ],
      extensions: [ '.js', '.jsx', '.css', '.pug' ], // kiterjesztés nélkül is felismerje ezeket importáláskor
      modules: [ 'node_modules', path.resolve('web') ]
    },

    module: {
      rules: [
        {
          // https://webpack.js.org/configuration/module/#rule-enforce
          enforce: 'pre', // hogy a babel előtt fusson le
          test: /\.jsx?$/,
          exclude: [ /node_modules/ ],
          loader: 'eslint-loader',

          // https://eslint.org/docs/developer-guide/nodejs-api#cliengine
          options: {
            outputReport: {
              // Fail only on errors
              failOnWarning: false,
              failOnError: PROD,
            },
            cache: false // ha true, akkor eslintrc változtatáskor beragadhat a szabály
          }
        },

        // https://github.com/babel/babel-loader
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader?cacheDirectory'
          },
        },

        {
          enforce: 'pre',
          test: /\.pug$/,
          exclude: /node_modules/,
          loader: 'pug-lint-loader',
          options: require('./.pug-lintrc.js')
        },

        {
          test: /.pug$/,
          use: {
            // https://github.com/pugjs/pug-loader
            loader: 'pug-loader',
            query: {} // Can be empty
          }
        },

        // Ez a 3rd party CSS fájlokhoz van!
        {
          test: /\.css$/,
          include: /node_modules/,
          use: [
            DEV ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                modules: false
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: [
                  require('cssnano')({
                    preset: [
                      'default', {
                        discardComments: {
                          removeAll: true
                        }
                      }
                    ]
                  })
                ]
              }
            }
          ]
        },

        // Ez a saját CSS fájlokhoz van!
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: [
            // https://github.com/webpack-contrib/style-loader
            // https://github.com/webpack-contrib/mini-css-extract-plugin
            DEV ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
              // https://github.com/webpack-contrib/css-loader
              loader: 'css-loader',

              // https://github.com/webpack-contrib/css-loader#options
              options: {
                modules: true,
                importLoaders: 1, // https://github.com/webpack-contrib/css-loader#importloaders
                camelCase: true,
                localIdentName: PROD ? '[hash:base64:5]' : '[local]--[hash:base64:5]' // '[path][name]__[local]--[hash:base64:5]'
              }
            },
            {
              // https://github.com/postcss/postcss-loader
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: [
                  // https://github.com/outpunk/postcss-each
                  require('postcss-each')(),

                  // https://github.com/postcss/postcss-custom-media/blob/master/INSTALL.md#webpack
                  require('postcss-custom-media')({
                    importFrom: 'web/custom-media.css'
                  }),

                  // https://github.com/csstools/postcss-preset-env
                  require('postcss-preset-env')({
                    features: {
                      'nesting-rules': true
                    }
                  }),

                  // https://github.com/postcss/postcss-reporter
                  require('postcss-reporter')({
                    clearReportedMessages: true,
                    clearAllMessages: true,
                    throwError: true
                  })
                ].concat(PROD ? [
                  // https://cssnano.co/guides/optimisations
                  require('cssnano')({ preset: 'default' })
                ] : [])
              }
            }
          ]
        },

        {
          // https://github.com/webpack-contrib/file-loader
          test: /\.(jpe?g|png|gif|svg|gif)$/i,
          use: [{
            loader: 'file-loader',
            options: {
              name: 'images/[name]-[hash:6].[ext]'
            }
          }]
        }
      ]
    },

    // https://webpack.js.org/configuration/dev-server/
    devServer: {
      historyApiFallback: true,
      disableHostCheck: true,
      clientLogLevel: 'none',
      overlay: {
        warnings: false,
        errors: true
      },
      // https://webpack.js.org/guides/hot-module-replacement/
      // hot: true
    },

    plugins: [
      // https://github.com/jantimon/favicons-webpack-plugin
      // new FaviconsWebpackPlugin('icon.png'),

      // https://webpack.js.org/plugins/define-plugin/
      new webpack.DefinePlugin({
        __DEV__: DEV,
      }),

      // https://webpack.js.org/plugins/provide-plugin/
      new webpack.ProvidePlugin({
        log: [ 'log', 'default' ],
      }),

      // https://www.npmjs.com/package/stylelint-webpack-plugin
      new StyleLintPlugin({
        context: 'web',
        files: '**/*.css'
      }),

      // https://www.npmjs.com/package/copy-webpack-plugin
      new CopyWebpackPlugin([ /* amiket át akarsz másolni */ ]),

      // https://github.com/webdeveric/webpack-assets-manifest
      new WebpackAssetsManifest(),

      // https://github.com/jantimon/html-webpack-plugin
      new HtmlWebpackPlugin(Object.assign({
        filetype: 'pug',
        template: 'web/index.pug',
        output: 'index.html',
        chunks: [
          'critical', 'preloader', 'vendors', 'main'
        ],
        inlineSource: 'critical|preloader' // a criticalt és a preloadert inline berakja a html-be
      }, PROD ? {
        minify: {
          collapseWhitespace: true,
          removeComments: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          useShortDoctype: true,
          minifyCSS: true,
          minifyJS: true
        }
      } : {})),

      // https://github.com/DustinJackson/html-webpack-inline-source-plugin
      new HtmlWebpackInlineSourcePlugin(HtmlWebpackPlugin),

      // https://github.com/webpack-contrib/mini-css-extract-plugin
      new MiniCssExtractPlugin({
        filename: `[name].[${ HASH }].css`,
        chunkFilename: `[name].[${ HASH }].css`
      })
    ].concat(
      DEV ? [
        // new webpack.HotModuleReplacementPlugin(),
      ] : /* PROD */ [
        // https://github.com/schneidmaster/sitemap-webpack-plugin
        new SitemapPlugin('https://balazs-diak.hu', [
          { path: '/', lastMod: now, priority: 1, changeFreq: 'monthly' }
        ], {
          skipGzip: true
        }),

        // https://github.com/johnagan/clean-webpack-plugin
        new CleanWebpackPlugin('dist', {}),

        // https://github.com/itgalaxy/robotstxt-webpack-plugin
        new RobotstxtPlugin(),

        // https://github.com/jantimon/favicons-webpack-plugin
        new FaviconsWebpackPlugin({
          logo: 'images/favicon.png',
          prefix: 'icons/',
          inject: true,
          background: '#fff',
          title: 'Balázs-Diák Kft.',
          icons: {
            android: true,
            appleIcon: true,
            appleStartup: false,
            coast: false,
            favicons: true,
            firefox: true,
            opengraph: false,
            twitter: false,
            yandex: false,
            windows: false
          }
        })
      ]
    )
  }

  return config
}
