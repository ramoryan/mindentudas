# Github

[Új ssh kulcs létrehozása](https://help.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#generating-a-new-ssh-key)
[Hozzáadjuk a github accunkhoz](https://help.github.com/en/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)

## TL;DR

### Létrehozás

```bash
ssh-keygen -t rsa -b 4096 -C "kovacsjozsika@protonmail.com"
```

Passphrase nem kötelező és a default fájlnév is jó, jobb híjján.

Aztán a saját oldalunkon használjuk a létrehozott kulcsot.

```bash
eval $(ssh-agent -s)
ssh-add ~/.ssh/id_rsa
```

### Hozzáadás

Vágólapra másoljuk a publikus kulcs tartalmát:

```bash
clip < ~/.ssh/id_rsa.pub
```

Majd github.com -on a saját accunknál elnavigálunk: `github settings / SSH and GPG keys`

Katt: `New SSH key`

Title: Teljesen mindegy, de ha több van, akkor érdemes értelmes nevet megadni (home, office, stb.)

Key: bemásoljuk a vágólap tartalmát.

Elmentjük, aztán teszt!

```bash
ssh -T git@github.com
```

Ezt a választ kell kapjad:

`You've successfully authenticated, but GitHub does not provide shell access.`

[Ha nem ezt kapod, akkor a kulcsoddal van valami gond](https://help.github.com/en/articles/error-permission-denied-publickey)

