// https://github.com/itgalaxy/robotstxt-webpack-plugin
// https://github.com/itgalaxy/generate-robotstxt
// https://yoast.com/ultimate-guide-robots-txt/

module.exports = {
  policy: [
    {
      userAgent: '*',
      allow: '/',
      crawlDelay: 10
    }
  ],
  // sitemap: "http://example.com/sitemap.xml",
  host: 'https://edu.triviador.hu'
}
