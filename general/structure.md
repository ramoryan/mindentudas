## Könyvtárszerkezet, fájlok elhelyezése

* semmi olyan fájl és könyvtár ne legyen itt, ami CSAK és kizárólag a fejlesztéshez kell
* az alábbi példát nem kell szentírásnak venni, de nekem ez jött be eddig a legjobban
* a könyvtárak és fájlok biztosátáról az [nginx](/nginx.md) fájlban olvashatsz többet

* my.website.hu
  * bin
    * mindenféle futtatható script, amit csak időnként használnál
      * bash, php, stb.

  * src / app - backend könyvtárak, fájlok
    * php backend esetén
      * config
        * a backend konfigurációs fájlait tartalmazza

      * templates
        * template fájlok

      * classes
        * php .inc fájlai

      * dict
        * nyelvesítés fájlait tartalmazza

      * routes
        * a routing saját fájlai

      * bootstrap.inc
        * keretrendszer (ha van) inicialiázásához

      * app.inc
        * a request és a routing kezeléséhez

  * vendor
    * [composer](/utility/package-managers.md) saját könyvtára

  * web / public
    * frontend könyvtárak, fájlok, amik a felhasználó számára is elérhetőek
    * struktúra
      * documents / dokumentumok
        * letölthető pdf / xlsx / csv / docx fájlok

      * fonts
      * images
      * js
        * egy-egy fájl esetén könyvtár nélkül is lehet

      * css
        * egy-egy fájl esetén könyvtár nélkül is lehet

  * [favicon.ico](https://hu.wikipedia.org/wiki/Favicon)
  * icon.png
  * [robots.txt](/seo/robots.md)
  * index.html / index.php
    * az egyetlen belépési pont az oldalra
  * [site.webmanifest](https://developer.mozilla.org/en-US/docs/Web/Manifest)
