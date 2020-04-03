# SEO

[minden, amit tudni érdemes](https://support.google.com/webmasters/answer/7451184?hl=hu)
[html-meta-seo](https://www.link-assistant.com/news/html-meta-tags-for-seo.html)

## A lényeg

- legyen [https](/backend/http-https-ssl-tls.md.md)

- html5 doctype
- html lang attribútum
- utf-8 charset
- canonical tag

- head
  - legyen title tag-ed, maximum `60` karakterrel
    - Az oldal neve, szlogenje
      - Normál karaktereken kívül kötőjel (-), kettőspont (:), vagy a pipe karakter (|) lehet.

  - legyen meta description tagedet, maximum `160` karakterrel
    - Az oldal tartalmának 1-2mondatos összefoglalását kell az elembe elhelyezni.

  - legyen meta keywords
    - Fontos, hogy a tartalomra jellemző kulcsszavakat helyezzünk el, legfeljebb 8-10-et.

- minden oldaladnak kell lennie `egyetlen egy h1` tagnek
  - lehetőleg legyen `h2` és `h3` is

- legyen beállítva a [robots](./robots.md) fájlod
- legyen [sitemap](./sitemap.md) fájlod
- minden url legyen seo-barát
  - az url csak ékezetek nélküli karaktereket, valamint számokat és kötőjelet tartalmazhat
    - ugyesedni.hu/appok/pici-piac
    - ugyesedni.hu/betuszafari-123
    - taneszkoz.hu/katalogus/mozgasfejlesztes-es-sport/kiegeszito

## Kevésbé fontos, de jó ha van

- minden img tagnek legyen `alt` attribútuma
- [google analytics](https://analytics.google.com/analytics/web/)
- [schema](schema.org)
- [facebook opengraph](../social/facebook.md)
- [twitter card](../social/twitter.md)
