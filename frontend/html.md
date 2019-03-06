# HTML

- mindig [html5 doctype](https://html5tutorial.info/doctype.php)-ot használj

- [utf-8 charset](https://webhint.io/docs/user-guide/hints/hint-meta-charset-utf-8/)
  - legelsőnek kell lennie a head-ben

- X-UA-Compatible
  - a régi IE 8/9/10 -nek lehet megadni, hogy a legújabb motorral renderelje le az oldalt.
  - IE11-től már nincs nem kell

- title
  - kötelező megadni
  - maximum 70 karakter
  - avoid Caps Lock
  - and -> &, or -> /

- meta description
  - maximum 300 karakter
  - no quotion marks
  - [markup-helper](https://www.google.com/webmasters/markup-helper/?hl=hu)

- használd a [reszponzív meta](https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Viewport_meta_tag) beállítást
- olvass: [css](/css.md)
- olvass: [js](/js.md)
- használj [semantic](https://www.w3schools.com/html/html5_semantic_elements.asp) elemeket

## head

- [https://gethead.info/](https://gethead.info/)

## a
  - [rel-noopener](https://mathiasbynens.github.io/rel-noopener/)
    ```html
    <a href="" target="_blank" rel="noopener noreferrer"></a>
    ```

## base

## meta
  - copyright
    <meta name="copyright" content="https://index.hu/copyright/">

  - referer
    <meta name="referrer" content="unsafe-url">

## link
  <link rel="copyright" title="Szerzői jogok" href="/copyright/">
  <link rel="author" title="Impresszum" href="/impresszum/">
  <link rel="home" title="" href="/" id="homelink">

## form
  - action
  - method
  - csfr token
    - TODO: magyarázat, php-s megoldás -> link

TODO: https://www.link-assistant.com/news/html-meta-tags-for-seo.html
TODO: opengraph, twitter, ikonok, robots, canonical
TODO: kötelező h1, image alt
