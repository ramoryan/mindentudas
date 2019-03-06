# CSS

Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML.
CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.

[w3c](https://www.w3schools.com/css/css_intro.asp)

## Használat

  - inline
    - html tag style attribútumába írható
      ```html
      <div style="color: red;"></div>
      ```

  - style tag
    - a html dokumentum `head` részébe rakható tag, amiben szabadon írhatóak a css szabályok
      ```html
      <head>
        <style>
          .my-rule {
            color: red;
          }
        </style>
      </head>
      ```

  - css fájl
    - külső fájlra való hivatkozáshoz
    - a dokumentum `head` részében `link` tag-et használva külső css fájlokat hívhatunk be a dokumentumba
      ```html
        <link rel="stylesheet" href="main.css">
      ```

    - [a link tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link#Styling_with_CSS)
    - [defer loading css](https://www.giftofspeed.com/defer-loading-css/)

  - javascript
    - js-en keresztül bármikor dinamikusan beállíthatjuk az előbb felsoroltak akármelyikét
    - a leggyakoribb egy-egy elem `class` változójának, vagy az elem `style` attribútumának módosítása

## Selectorok

  - [selectors](https://www.w3schools.com/cssref/css_selectors.asp)

## Pszeudo-selectorok

  - [pseudo-selectors](https://www.w3schools.com/css/css_pseudo_classes.asp)

## box-sizing

  A box-sizing CSS3 tulajdonsággal tudjuk megadni, hogy az adott elem szélessége hogyan kerüljön kiszámításra.
  Az alapértelmezett beállítás content-box, ahol az elem szélességébe nem tartozik bele a padding és a border értéke.
  A border-box esetén az elem szélességét az alapszélesség + padding + border együttes értéke adja.

  A border-box használata egyértelműen egyszerűbb és jobb megoldás.

  Egy weblap egyik alapvető beállításának az alábbinak kell lennie:

  ```css
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit; /* vagy a html-re vonatkozó szabályt elhagyva, az inherit helyett border-box */
  }
  ```

## media query
  - https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries

  ```css
  /* Small devices (landscape phones, 576px and up) */
  @media (min-width: 576px) { ... }

  /* Medium devices (tablets, 768px and up) */
  @media (min-width: 768px) { ... }

  /* Large devices (desktops, 992px and up) */
  @media (min-width: 992px) { ... }

  /* Extra large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) { ... }
  ```

## flexbox

  [guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

## custom properties (variables)

  [mdn](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables)
  [everything-you-need-to-know](https://medium.freecodecamp.org/everything-you-need-to-know-about-css-variables-c74d922ea855)

## Critical

  - [critical css](https://alexwright.net/web-design-secrets/how-to-use-critical-css/)
  - [https://vuejsdevelopers.com/2017/07/24/critical-css-webpack/](critical-css-webpack)
  - [inlining critical css](https://gomakethings.com/inlining-critical-css-for-better-web-performance/)

## Reset / Normalize

  - TODO: linkek, példák, magyarázat
  - Hasznos snippet
    ```css
    html{height:100%;box-sizing:border-box;line-height:1.15;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-ms-overflow-style:scrollbar;-webkit-tap-highlight-color:transparent}body{min-height:100%;line-height:1.5;margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Helvetica Neue',Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';font-size:16px;font-weight:400;text-align:left}body,html{width:100%}*,*::after,*::before{box-sizing:inherit}
    ```

## Library, framework

  - bootstrap
  - material-ui

## Preprocesszorok

  - Less
  - SCSS/SASS
    - [guideline](https://sass-guidelin.es/)
  - PostCSS

## Namespace

  - css-modules
  - BEM

## Sebezhetőség

  - [css-attack](https://www.mike-gualtieri.com/posts/stealing-data-with-css-attack-and-defense)

## Lint
  - [stylelint](/linting.md)

## TL;DR - Best practices

  - soha ne használj ID-t selectorhoz
  - használj legalább egy minimális resetet, ha nem használsz semmilyen libet/frameworköt
  - használj PostCSS -t
