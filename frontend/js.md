# JavaScript (JS)

A JavaScript a nevén kívül semmilyen kapcsolatban nincs a Java programozási nyelvvel.

- ES5
- ES6+

## Használat
  - inline
  - [script tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)
    ```html
    <script>
      document.body.innerHTML = 'Hello world!'
    </script>
    ```

  - js fájl
    - külső fájlra való hivatkozáshoz
    - a html dokumentum body tagjének a közvetlen zárása előtt legyenek
    ```html
    <body>
      ...
      <script src="main.js"></script>
    </body>
    ```

    - [render-blocking](https://developers.google.com/speed/docs/insights/BlockingJS)
      - hasznos property-k
      - async
      - defer
      - crossorigin

## semicolon

## namespace

  - IIFE
  - modules

## Library, framework

  - jQuery
  - React
  - Angular
  - VUE

## Lint
  - [eslint](/linting.md)

## NodeJS
  - [nodejs](https://nodejs.org/en/)
