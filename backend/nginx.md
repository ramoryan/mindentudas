# nginx

- [nginx](https://www.nginx.com/)
- [apache vs nginx](https://www.rackhost.hu/tudasbazis/vps/apache-vagy-nginx-gyakorlati-szempontok/)
- [server-tokens](http://nginx.org/en/docs/http/ngx_http_core_module.html#server_tokens)
- [linux-nginx](https://www.cyberciti.biz/tips/linux-unix-bsd-nginx-webserver-security.html)
- [html5-boilerplate-nginx](https://github.com/h5bp/server-configs-nginx)
- [nginxconfig.io](https://nginxconfig.io/)

## SSL

```nginx
server {
  listen       443 ssl;
  listen       [::]:443 ssl;
  server_name  SERVER_NAME;

  # keepalive_timeout        70;  # hány másodpercig tartsa a kapcsolatot, default 75
  # keepalive_requests       100; # hány requestig tartsa a kapcsolatot, default 100

  ssl_certificate            /etc/letsencrypt/live/SERVER_NAME/fullchain.pem;
  ssl_certificate_key        /etc/letsencrypt/live/SERVER_NAME/privkey.pem;

  ssl_prefer_server_ciphers  on;
  ssl_protocols              TLSv1 TLSv1.1 TLSv1.2;

  ssl_dhparam /etc/nginx/dhparam.pem; # openssl dhparam -out /etc/nginx/dhparam.pem 4096

  ssl_stapling               on;
  ssl_stapling_verify        on;

  ssl_session_tickets        off;

  ssl_ciphers                -ALL:ECDHE-RSA-CHACHA20-POLY1305:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-SHA256:ECDHE-RSA-AES128-SHA;

  ssl_session_cache          shared:SSL:10m;
  ssl_session_timeout        10m;
}
```

- [cipherli.st](https://cipherli.st/)
- [strong-ssl-security](https://raymii.org/s/tutorials/Strong_SSL_Security_On_nginx.html)

## HTTP (80) -> HTTPS (443)
```nginx
server {
  listen       80;
  listen       [::]:80;
  server_name  myserver.hu;

  return 301 https://$server_name$request_uri;
}
```

## www to non-www

```nginx
server {
  listen      80;
  listen      [::]:80;
  server_name www.mysite.hu

  return 301 http://mysite.hu$request_uri;
}
```

## whitelist file extensions

```nginx
location ~ / {
  if ($request_filename !~* \.(css|js|gif|html|jpe?g|png|ico|pdf|xml|woff|ttf|php)$ ) {
    return 404; # ne 403 legyen! ne mondjuk meg neki, hogy talált valamit.
    break;
  }
}
```

## Hide tokens

Enables or disables emitting nginx version in error messages and in the “Server” response header field.

```nginx
server {
  server_tokens off;
}
```

## charset

```nginx
charset UTF-8;
```

## PHP-FPM
[nginx-php-fpm](https://www.nginx.com/resources/wiki/start/topics/examples/phpfcgi/)\
[httpoxy vulnerabilities](https://httpoxy.org/)

- Linuxhoz:
```nginx
location ~ \.php(?:/|$) {
  fastcgi_pass unix:/var/run/php5-fpm.sock;
  fastcgi_split_path_info ^(.+\.php)(/.*)$;

  # Mitigate https://httpoxy.org/ vulnerabilities
  fastcgi_param HTTP_PROXY "";

  include fastcgi_params;
}
```

- [WinNMP](https://winnmp.wtriple.com/)
```nginx
location ~ \.php(?:/|$) {
 include        nginx.fastcgi.conf;
 include        nginx.redis.conf;
 fastcgi_pass   php_farm;
 fastcgi_param  SCRIPT_FILENAME $document_root$fastcgi_script_name;
 fastcgi_param  HTTPS off;
 fastcgi_param  DOCUMENT_ROOT $document_root;
}
```

Minden olyan request, amihez nincs fájl, menjen a php-nek:

```nginx
location / {
  try_files $uri $uri/ /index.php?$is_args?$args;
}
```

## Szükségtelen headerek-ek eldobása
TODO: miért?

```nginx
fastcgi_hide_header X-Powered-By;
```

## Ajánlott header-ek
Leírást róluk a Header résznél találsz.
TODO: linkelés, hogy melyik miben segít!

```nginx
add_header Strict-Transport-Security "max-age=63072000; includeSubDomains; preload";
add_header X-Frame-Options DENY;
add_header X-Content-Type-Options nosniff;
add_header X-XSS-Protection "1; mode=block";
```

## Remove trailing slashes

```nginx
rewrite ^(.+)/+$ $1 permanent;
```

## nginx change response code / minden hiba 404-re menjen

```nginx
error_page 401 403 404 =404 /404.html;
```

## Csak bizonyos request metódusokat engedjünk

```nginx
if ($request_method !~ ^(GET|HEAD|POST)$ ) {
   return 444;
}
```

## Block download agents

```nginx
if ($http_user_agent ~* LWP::Simple|BBBike|wget) {
  return 403;
}
```

## Block robots

```nginx
if ($http_user_agent ~* msnbot|scrapbot) {
  return 403;
}
```

## Deny certain Referers

```nginx
if ($http_referer ~* (babes|forsale|girl|jewelry|love|nudit|organic|poker|porn|sex|teen)) {
  deny all;
  access_log off;
  return 404;
}
```

## Sensitive file extensions

```nginx
location ~ \.(inc|sql|log|md|htm|cgi|sh|ini)$ {
  deny all;
  access_log off;
  return 404;
}
```

## Sensitive or not exists folders

```nginx
location ~ /(src|vendor|bin|pma|phpmyadmin|myadmin|etc|phpMyAdmin|a2billing|muieblackcat|cgi|wordpress|wp|invoker|axis2|jmx|wls-wsat) {
  deny all;
  access_log off;
  return 404;
}
```

## remove index.php

```nginx
if ($request_uri ~* "^(.*/)index\.php$") {
  return 301 $1;
}
```

## Maintenance

```nginx
# van-e maintenance
if (-f $document_root/maintenance.html) {
  return 503;
}

# ha van kint maintenance.html fájl a gyökérben, akkor csak azt töltheti be.
error_page 503 = @maintenance;
location @maintenance {
  # ha AJAX, akkor mindenféleképp 503 menjen, mert POST methodnál html response esetén 405-öt küld.
  if ($http_x_requested_with ~* 'XMLHttpRequest') {
    return 503;
  }

  rewrite ^(.*)$ /maintenance.html break;
}
```

## Restricting, Basic Auth, htpasswd / htaccess

Password generálás
```bash
head /dev/urandom | tr -dc A-Za-z0-9 | head -c KARAKTERSZÁM ; echo ''
```

htpasswd fájl generálás
```bash
printf "FELHASZNÁLÓ:`openssl passwd -apr1`\n" >> FÁJLNÉV
```

htpasswd fájl használata és ip-k engedélyezése / tiltása nginx-ben

[admin-guide](https://www.nginx.com/resources/admin-guide/restricting-access-auth-basic/)\
[auth](http://nginx.org/en/docs/http/ngx_http_auth_basic_module.html)\
[satisfy](http://nginx.org/en/docs/http/ngx_http_core_module.html#satisfy)

```nginx
location ~ ^/(admin) {
  satisfy  any;

  allow    ip1;
  allow    ip2;
  allow    127.0.0.1;

  deny     all;

  auth_basic            "Restricted Content";
  auth_basic_user_file  /home/pwww/.htpasswd;
}
```

## Outdated browsers

Nem feltétlenül security, de a régi verziókban lehetnek hibák, főleg IE-nél.

[http://outdatedbrowser.com/hu](outdated)\
[http://browser-update.org/](browser-update)

TODO: info a régi browserek sebezhetőségéről.

```nginx
map $http_user_agent $outdated {
  default                                 0;
  "~MSIE [1-9]\."                         1;
  "~Mozilla.*Firefox/[1-9]\."             1;
  "~Mozilla.*Firefox/[0-2][0-9]\."        1;
  "~Mozilla.*Firefox/3[0-1]\."            1;
  "~Opera.*Version/[0-9]\."               1;
  "~Opera.*Version/[0-1][0-9]\."          1;
  "~Opera.*Version/2[0-1]\."              1;
  "~AppleWebKit.*Version/[0-6]\..*Safari" 1;
  "~Chrome/[0-9]\."                       1;
  "~Chrome/[0-2][0-9]\."                  1;
  "~Chrome/3[0-3]\."                      1;
}

if ($outdated = 1){
  rewrite ^ /outdated redirect;
}
```

## gzip
[GNU zip](https://hu.wikipedia.org/wiki/Gzip)
[compression](https://docs.nginx.com/nginx/admin-guide/web-server/compression/)\
[how-to-add](https://www.digitalocean.com/community/tutorials/how-to-add-the-gzip-module-to-nginx-on-ubuntu-14-04)

Szöveges fájlok tömörítésére szolgál. A mi esetünkben az alábbiak:
  * sima html
    * ezt külön nem kell engedélyezni
  * javascript
  * css
  * xml
  * json
  * svg

A legegyszerűbb, ha megnyitod az `etc/nginx/nginx.conf` fájlt:
- a meglévő `gzip on` részt kikommentezed és az alábbi kódrészletet bemásolod.

```nginx
gzip on;
gzip_vary on;
gzip_min_length 10240;
gzip_proxied expired no-cache no-store private auth;
gzip_types text/plain text/css text/xml application/xml text/javascript application/javascript application/x-javascript text/javascript application/json image/svg+xml svg svgz;
gzip_disable "MSIE [1-6]\.";
```

## cache

```nginx
location ~* \.(js|css|png|jpg|jpeg|gif|svg|ico)$ {
 expires 30d; # 365d
 add_header Cache-Control "public, no-transform";
}
```

## no-cache

```nginx
location amitakarsz {
  add_header Last-Modified $date_gmt;
  add_header Cache-Control 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0';
  if_modified_since off;
  expires off;
  etag off;
}
```

## proxy

TODO

## alias vs root

TODO

## auth_request

[how-to-1](http://mamchenkov.net/wordpress/2015/08/19/custom-single-sign-on-with-nginx-and-auth-request-module/)
[how-to-2](https://medium.com/@ecaradec/securing-api-routes-with-oauth2-and-nginx-auth-request-4a7c809a6d45)
[how-to-3](https://docs.nginx.com/nginx/admin-guide/security-controls/configuring-subrequest-authentication/)
[how-to-4](# https://stackoverflow.com/questions/42380402/how-can-i-use-external-uri-with-the-nginxs-auth-request-module)

```nginx
location /private {
  auth_request  /auth_request;
  error_page 401 =401 /auth;
}

location /auth_request {
  internal;

  include proxy_params;

  proxy_set_header   Host $host;
  proxy_set_header   Content-Length "";

  proxy_pass_request_body off;

  proxy_pass $scheme://$server_name/[ROUTE_AMI_VALIDAL]; # a PHP backendnek kell lennie egy ilyen route-nak
}
```
