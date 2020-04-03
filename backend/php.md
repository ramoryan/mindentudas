# PHP

[php-security](https://phpsecurity.readthedocs.io/en/latest/index.html)

- A publikusan elérhető php fájloknak legyen .php a kiterjesztése, minden más .inc legyen
  - a .inc fájlok elérését [nginx](/nginx.md)-en keresztül tudod letiltani

## Alapbeállítások

```ini
display_errors = Off
log_errors = On
magic_quotes_gpc = Off
error_reporting = E_ALL
safe_mode = On
safe_mode_gid = Off
max_execution_time = 30
allow_url_fopen = Off
error_log = syslog
enable_dl = Off
```

## Bootstrap

Egy alap PHP munkafolyamat megkezdéséhez az alábbi kódrészlet hasznos lehet:

```php
<?php

error_reporting(E_ALL);

date_default_timezone_set('UTC');

ini_set('display_errors', true);
ini_set('display_startup_errors', true);

header('Content-Type: text/plain; charset=utf-8');
```

## Beérkező adatok ellenőrzése

- [miért kell ellenőrízni?](/attacks.md)
- is_* függvények
- htmlspecialchars
- HTTP_REFERER ellenőrzése

## Veszélyes globális értékek

[superglobals](http://php.net/manual/en/language.variables.superglobals.php)

## session

TODO: veszélyek, megoldások

[expire](https://stackoverflow.com/questions/520237/how-do-i-expire-a-php-session-after-30-minutes)

## cookie

TODO: veszélyek, megoldások, magyarázat ehhez a kódrészlethez

```php
# De csak ha van SSL!
if ($isSSL) {
  ini_set('session.cookie_httponly', 1);
  ini_set('session.use_only_cookies', 1);
  ini_set('session.cookie_secure', 1);
}
```

## form validáció
  - [csrf](/attacks.md)
  - [csrf-protection php 7.1](https://wiki.php.net/rfc/automatic_csrf_protection)

## template

Ez az [XSS](/attacks.md) miatt szükséges.

```php
echo htmlspecialchars($string, ENT_QUOTES, 'UTF-8');
```

## Migrálás 5-ről 7-re

[miért?](https://belitsoft.com/php-development-services/php7-upgrading-from-php5-performance-security-reasons-and-case-studies)\
[migráció](http://php.net/manual/en/migration70.php)

* (számomra) legfontosabb változások
  * sokkal (akár 2x) gyorsabb
  * kikényszeríthető típusok

TODO: egy példa 5-ről 7-re átállásra, éles, futó környezetben

## Frameworkok, Library-k

TODO: nagyobb / jobb frameworkok és library-k (pl.: routing, secureheader, stb.) ismertetője

## Fájlfeltöltés, 413-as hiba

Hozz létre egy `.user.ini` fájlt a belépési pontod mellé, majd

```ini
file_uploads = On
upload_max_filesize = 64M
post_max_size = 64M
```
