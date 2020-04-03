# SQL

[MySQL](https://www.mysql.com/)\
[MariaDB](https://mariadb.com)

[mariadb vs mysql](https://mariadb.com/kb/en/library/mariadb-vs-mysql-compatibility/)\
[security](https://mariadb.com/resources/blog/mariadb-database-security)

TODO: példa támadásra, sql injection-re

## Adatbázis létrehozása

```sql
CREATE DATABASE dbname CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

## user / password

[csinálj egy erős passt!](https://passwordsgenerator.net/)

```sql
CREATE USER 'username'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON username.* TO 'dbname'@'localhost';
FLUSH PRIVILEGES;
```

## cronjob mysqldump

```bash
touch dbname_mysqldump.sh
chmod +x dbname_mysqldump.sh
```

A `dbname_mysqldump.sh` tartalma:

```bash
#!/bin/bash

dt=$(date '+%Y-%m-%d %H:%M:%S');
echo "$dt"

mysqldump --opt --password='PASSWORD' --user='USER' --databases 'DBNAME' > PATH/dbname_`date +\%Y\%m\%d_\%H\%M`.sql
```

Nyisd meg a `/etc/crontab` fájlt és a napi egyszeri mentéshez írd be az alábbit:

00 00 * * * USER PATH/dbname_mysqldump.sh >> PATH/dbname_mysqldump.log

## MySQL -> MariaDB

TODO: pontos leírás a váltásról

## Replikáció

[mysql-replikáció](http://devsolution.hu/a-mysql-replikacios-es-clusterezesi-lehetosegeinek-bemutatasa-1/)
