# robots

Keresőrobotok konfigurálására alkalmas.

[robots.txt vagy meta](https://www.stateofdigital.com/decide-robots-txt-meta-robots/)\
[robots.txt](http://www.robotstxt.org/orig.html)\
[ultimate guide](https://yoast.com/ultimate-guide-robots-txt/)

Default:

```txt
User-agent: *
Disallow:
Allow: /
```

Robotok teljes kitiltása (pl.: admin oldal, vagy csak meghívottaknak szóló):

```txt
User-agent: *
Disallow: /
```

## webpack

- [robotstxt-webpack-plugin](https://github.com/itgalaxy/robotstxt-webpack-plugin)
  - [generate-robotstxt](https://github.com/itgalaxy/generate-robotstxt)
