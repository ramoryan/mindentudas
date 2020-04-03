## npm

Az [npm](https://docs.npmjs.com/about-npm/) a [nodejs](https://nodejs.org/en/about/) beépített csomagkezelője.

Új `package.json` létrehozása: `npm init`.

Csomag telepítése az `npm i *csomag*` vagy `npm install *csomag*` paranccsal történik.
Ha a `-g` flaget hozzáírjuk, akkor globálisan telepíti, nélküle pedig az adott projectben.

Alapértelmezetten a "dependencies" részbe kerülnek a csomagok a package.json fájlon belül,
de ezt specifikálhatjuk a `--save` és `--save-dev` flagekkel.

[különbség a save és save-dev között](https://docs.npmjs.com/specifying-dependencies-and-devdependencies-in-a-package-json-file)

Csomag eltávolítása: `npm remove *csomag*`

Nem naprakész csomagok listázása: `npm outdated`
Érdemes egy interaktív csomagfrissítpt használni: [npm-upgrade](https://www.npmjs.com/package/npm-upgrade)

A `package.json`-ban a `scripts` résznél definiálhatjuk a parancsokat, amiket `npm run *scriptnév*` paranccsal futtathatunk.

## yarn

A Facebook saját csomagkezelője, amit még akkor hoztak létre, amikor nem volt ilyen gyors az npm.
Sajátossága az volt, hogy egy `lock` fájlban felépítette a függőségi fát, így az npm-nél (akkor) sokkal gyorsabban
tudta telepíteni a csomagokat.

Ezután az npm is megcsinálta ugyanezt, azóta nincs szignifikáns sebességbeli különbség a kettő között.

TODO: parancsok

## Bower

Másik, mára már nem igen használt csomagkezelő a [bower](https://bower.io/)
Legacy projectekben még előfordulhat.

```bash
npm i -g bower
```

TODO: parancsok

## Composer

A [Composer](https://getcomposer.org/) a PHP csomagkezelője.

TODO: leírás
TODO: parancsok
