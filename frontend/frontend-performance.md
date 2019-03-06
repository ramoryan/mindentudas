# Frontend teljesítményfokozás

[google fundamentals](https://developers.google.com/web/fundamentals/)\
[webhint](https://webhint.io/)\
[fronted performance](https://github.com/thedaviddias/Front-End-Performance-Checklist)
[checklist](https://www.smashingmagazine.com/2019/01/front-end-performance-checklist-2019-pdf-pages/)

- preload
  - [preloading content](https://developer.mozilla.org/en-US/docs/Web/HTML/Preloading_content)
  - [prefetching-preloading-prebrowsing](https://css-tricks.com/prefetching-preloading-prebrowsing/)

## HTML

[html](/frontend/html.md)

## Javascript

[js](/frontend/js.md)

## CSS

[css](/frontend/css.md)

## JS, CSS
- Concatenation
  - is just appending all of the static files into one large file.

- Minification
  - is just removing unnecesary whitespace and redundant / optional tokens like curlys and semicolons, and can be reversed by using a linter.

- Uglification
  - is the act of transforming the code into an "unreadable" form, that is, renaming variables/functions to hide the original intent... It is, also, irreversable.

[taskmanagers, bundlers](/utility/taskmanagers-bundlers.md)

## Képek
- image lazyload
  - [images, videos](https://developers.google.com/web/fundamentals/performance/lazy-loading-guidance/images-and-video/)
  - [five techniques](https://www.sitepoint.com/five-techniques-lazy-load-images-website-performance/)

```html
<img data-src="my-img.png">
```

[layzr.js](https://github.com/callmecavs/layzr.js/)

TODO: saját példa

## Fontok
- font lazyload
  - [WebFontLoader](https://github.com/typekit/webfontloader)
  - [FOUT/FOIT/FOFT](https://css-tricks.com/fout-foit-foft/)

```html
<link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin>
```

TODO: saját példa

## Videók
```html
<link rel="preconnect" href="https://www.youtube.com">
```

TODO: saját példa

## googlemaps
- [hivatalos leírás]((https://developers.google.com/maps/documentation/javascript/adding-a-google-map)

- Az egyetlen probléma a hivatalos megoldással, hogy mindig, minden körülmények között betölti az egész mappot és meg is jeleníti. Erre az esetek többségében semmi szükség és erőforrás-pazarló. A képekhez hasonlóan a mapsot is tudjuk lazyloadolni, ha követed az alábbi metódusokat.

- lazyload
  - példa template
    ```php
    <div
      id="google-maps"
      aria-hidden="true"
      class="maps"
      data-lng="LNG - KOORDINÁTÁD"
      data-lat="LAT - KOORDINÁTÁD"
      data-zoom="14"
      data-marker="SAJÁT MARKERED"
      style="position: relative; overflow: hidden; height: 350px"
      data-key="SAJÁT API KULCSOD"
    >
    </div>
    ```

  - viewport check
    - resize
    - scroll
    - requestAnimationFrame
    - debounce

  - lazyload script
    ```js
      const wf = document.createElement('script')
      const s = document.scripts[0]
      wf.src = `https://maps.googleapis.com/maps/api/js?key=${ key }&callback=${ callback }`
      wf.async = true
      wf.defer = true
      s.parentNode.insertBefore(wf, s)
    ```

  - callback inicializálása
    - lásd a hivatalos leírásban
    - a data attribútumokat használd a paraméterekhez
