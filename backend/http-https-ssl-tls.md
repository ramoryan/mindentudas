# HTTP(S), HTTP2, TLS / SSL

## HTTP / HTTPS

[http](https://hu.wikipedia.org/wiki/HTTP)
  * port: 80
    * '92-ben a 80-as port nem volt foglalt, ezért választották

[https](https://hu.wikipedia.org/wiki/Https)
  * biztonságos http, SSL/TLS-el
  * port: 443
    * '94-ben választották, de nem volt különösebb indok
  * [leírás](https://support.google.com/webmasters/answer/6073543?hl=hu)

## TLS / SSL

SSL: Secure Sockets Layer\
[TLS](https://hu.wikipedia.org/wiki/Transport_Layer_Security): Transport Layer Security
  * az SSL új neve
  * az SSL 3.1 a TLS 1.0
  * úgy is mondják SSL/TLS

[cipherli](https://cipherli.st/)

Teszt\
[ssllabs](https://www.ssllabs.com/ssltest)

[Preload](https://hstspreload.org/)

### Let's encrypt / certbot

Ahhoz, hogy az oldalunkat https-en keresztül elérhetővé tegyük, a `Let's encryptet` használjuk.

[certbot](https://certbot.eff.org/lets-encrypt/debianjessie-nginx)
[nginx ssl module](http://nginx.org/en/docs/http/ngx_http_ssl_module.html)

  * Hozz létre a weblap gyökerében egy `.well-known` könyvtárat
    * ne `root` legyen
    * chmod 777 ./.well-known

  * Figyelj, hogy nginx-ben ne legyen `deny all`!
  * Figyelj, hogy nginx-ben `index index.html` is legyen!
  * Figyelj, hogy nginx-ben ne legyen minden request egyből átirányítva PHP-nak, vagy bármi másnak!
  * Figyelj, hogy nginx-ben ne legyen éppen `maintenance` vizsgálat!

  * Vigyázz, hogy az nginx configban be legyen állítva a well-known

    ```nginx
    server {
      location  ^~  /.well-known {
        expires  1m;
        allow    all;
      }
    }
    ```

  * Végül futtasd le a parancsot
    * NE root-ként futtasd, hanem használd a sudo-t!
    * sudo certbot certonly --webroot -w /var/www/*WEBLAP*/ -d *DOMAIN*
      * `--test-cert` flaggel érdemes tesztelni először
        * ha igy működik, akkor `--force-renewal` -al élessé tudod tenni

  * Ha minden jól ment, berakhatod az ssl config részletet az nginx configodba:
    [nginx ssl](./nginx.md)

  * Állítsd be a 80-as portról 443-ra való átirányítást! (következő pont)

  * Ha valamikor valamiért kézzel kell megújítanod a certet
    * használd a `--force-renewal` flaget
    * `/etc/init.d/nginx/reload`, hogy újraolvassa a certificate fájlt

  * Ha a kézi (vagy autotmatikus) megújításnál probléma adódna
    * `/etc/letsencrypt/renewal/*FILENAME*.conf/` fájlban ellenőrízd, hogy a `path`-ek valóban léteznek-e
      * ez a hiba akkor fordulhat elő, ha a cert beállítása után megváltoztattad a root könyvtárat

### HTTP (80) -> HTTPS (443)

- A http-n keresztül érkezők https-re való ugrasztásához nézd meg az [nginx](./nginx.md) leírást!

## HTTP2

[http2](https://en.wikipedia.org/wiki/HTTP/2)\
[enable-http2](https://nickjanetakis.com/blog/enable-http2-with-nginx-on-debian-jessie-stretch-and-ubuntu-16)

## Státusz kódok

- [http-status-codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)

Legalább a legfontosabbakat érdemes tudni:
  * 200: OK
  * 301: moved permanently
  * 302: moved temporarily
  * 403: forbidden
  * 404: not found
  * 405: method not found
  * 500: internal server error
  * 503: Service Unavailable
    * maintenance állapot
  * 504: timeout
  * 511: authentication required

Ha el akarunk rejteni információt gyanús próbálkozások elöl, akkor érdemes `404` -es hibakódot küldeni
akkor is, ha más hibakódot dobnánk.

Például:
  * csak ajax requestet fogadunk el, de nem jön xmlhttprequest header
  * blokkolt könyvtárat, fájlt vagy kiterjesztést próbált elérni
  * rossz a request metódus: POST helyett GET, stb.
  * ip címre védett url, pl.: /admin

Lásd: [nginx-change-response-code](./nginx.md)
