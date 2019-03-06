- [Cross Site Scripting (XSS)](https://www.cert.hu/cross-site-scripting-xss)
  - Ez a sebezhetőség a nem megfelelően ellenőrzött beviteli mezők vagy paraméterek problémájára vezethető vissza. A kihasználásával az elkövetők tetszőleges HTML, illetve JavaScript kódok révén okozhatnak károkat.

- [Cross Site Request Forgery (CSRF, XSRF)](https://hu.wikipedia.org/wiki/Cross-site_request_forgery)
  - A CSRF támadás során a támadó a célkeresztbe állított, védett weboldalhoz olyan felhasználó "közreműködésével" próbál hozzáférni, aki feltételezhetően bejelentkezett az adott webhelyre. Ehhez különféle HTML és JavaScript kódokat használhat fel, amelyek az áldozat böngészőjében való lefutásukat követően jogosulatlan műveletek végrehajtását segíthetik elő.

- [Clickjacking](https://en.wikipedia.org/wiki/Clickjacking)
  - [példa](http://www.sectheory.com/clickjacking.htm)
  - Lényege, hogy a weboldalon rákattintunk egy látszólag ártalmatlan, kattintható felületre, például egy képre vagy egy linkre, és ahelyett, hogy az elvárt folyamat elindulna, eltérítenek egy általunk nem kívánt webhelyre, vagy esetleg letöltődik, elindul egy nem kívánt, kártevő szoftver. Az is gyakran megtörténik, hogy a kattintásunk után az elvárt folyamat ugyan elindul (pl. a videót lejátsszuk), ám mellette még valami tudtunkon és akaratunkon kívül megtörténik, például meg is osztjuk a képet, videót, állományt ismerőseinkkel a közösségi oldalunkon.

- Vulnerable Components
  - Az ismert biztonsági résekkel sújtott komponensek - könyvtárak, keretrendszerek és más szoftvermodulok.

- Main In The Middle
  - A közbeékelődéses (man-in-the-middle) támadás  a rendszerek közötti kommunikációba való beférkőzés révén valósul meg. Ilyenkor a kommunikációs csatorna "eltérítésével" a támadó mindkét fél (szerver és kliens) számára partnernek adja ki magát, így mindkét fél azt gondolja, hogy egymással beszélget, miközben valójában mindketten a támadóval vannak kapcsolatban. A Symantec szerint ezek a sérülékenységek nagyrészt a webes alkalmazások kódjában lévő biztonsági hiányosságok miatt létezhetnek, és megelőzhetők lennének. Azonban sok vállalat addig halogatja a biztonsági elemek beépítését a saját szoftvereibe, amíg már túl késő lesz.

- SQL injection (SQLi)
  - A támadók SQL injection technika alkalmazásakor rosszindulatú SQL utasításokkal élnek vissza, és ilyen módon férnek hozzá szenzitív adatokhoz. Rosszabb esetben pedig adatbázis manipulációktól sem riadnak vissza. Eközben pedig leginkább a bemeneti értékek, paraméterek nem kellő szintű ellenőrzését használják ki.

- [Deinal of Service (DoS)](https://hu.wikipedia.org/wiki/Szolg%C3%A1ltat%C3%A1smegtagad%C3%A1ssal_j%C3%A1r%C3%B3_t%C3%A1mad%C3%A1s)

- Remote Code Execution (RCE)

- Path Traversal

- [Session Hijacking](https://en.wikipedia.org/wiki/Session_hijacking)
  - [munkamenet kezelés](http://weblabor.hu/cikkek/munkamenetkezeles2)

- Scan Attacks

- Input Validation Attack

- Buffer Overflow

- Brute Force
  - ssh
  - password lopás
    - forgot password

- LFI, RFI
  - Local File Inclusion
  - Remote File Inclusion

- Broken Access Control / Impersonation

- Security Misconfiguration / Source Code Disclosure
  - olyan fájlokhoz is hozzáférhet a felhasználó, amikhez nem szabadna
    - könyvtárstruktúrát fel tudja térképezni
    - sql, inc, php, log fájlok

- Insufficient Logging & Monitoring

- [E-mail crawling](http://csarven.ca/hiding-email-addresses)

- [BEAST Attack](https://en.wikipedia.org/wiki/Transport_Layer_Security#BEAST_attack)
- [CRIME Attack](https://en.wikipedia.org/wiki/CRIME_%28security_exploit%29)
- [FREAK Attack](http://blog.cryptographyengineering.com/2015/03/attack-of-week-freak-or-factoring-nsa.html)
- [Heartbleed](http://heartbleed.com/)
- [LogJam Attack](https://blog.cloudflare.com/logjam-the-latest-tls-vulnerability-explained/)
