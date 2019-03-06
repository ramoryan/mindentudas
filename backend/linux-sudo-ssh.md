# linux

## sudo / Switch User - DO

[sudo](https://hu.wikipedia.org/wiki/Sudo)\
[su](https://hu.wikipedia.org/wiki/Su_(Unix))

## ssh / Secure Shell

[ssh](https://hu.wikipedia.org/wiki/Secure_Shell)

### port biztosítása

A default a `22`-es TCP port. Ezt érdemes átállítani valami másra, pl.: `6622`
A tűzfal beállításainál ne felejtsd el beállítani az új portot!

### kulcs generálása

[keygen](https://www.ssh.com/ssh/keygen/)

A kulcsot generáljuk saját gépen:

```bash
ssh-keygen -t rsa -b 4096 -f FILENAME
```

A kiterjesztés nélküli fájl a saját privát kulcsod, az marad a gépeden.
Majd felmásoljuk a .pub végződésűt a serverre és konfiguráljuk:

```bash
ssh-copy-id -i ~/.ssh/FILENAME USER@HOST
```

### sudoer user

A serveren:

```bash
sudo adduser USER sudo
id USER
```

Bizonyosodj meg róla, hogy a felhasználód tud sudo lenni:

```bash
sudo -i
sudo /etc/init.d/sshd status
```

### root user és password login kikapcsolás

Miután sikerült a publikus kulcsot beállítani, a serveren a `/etc/sshd_config` fájlba állítsd be az alábbiakat:

```
PermitRootLogin no
ChallengeResponseAuthentication no
PasswordAuthentication no
UsePAM no
PubkeyAuthentication yes
AuthenticationMethods publickey
```

Majd indítsd újra az sshd szervízt: `/etc/init.d/sshd restart`

TODO: ezekkel a beállításokkal az alábbiakat éred el

### ip limit

```
ListenAddress ip1
ListenAddress ip2
```

### ssh védelme tűzfalon

TODO: a tűzfal résznél kifejteni, oda átlinkelni
