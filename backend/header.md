# Header

[headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)\
[hardening](https://scotthelme.co.uk/hardening-your-http-response-headers)\
[building secure php](https://paragonie.com/blog/2017/12/2018-guide-building-secure-php-software#security-headers)\
[web-security](https://infosec.mozilla.org/guidelines/web_security)\
[http-headers](https://zinoui.com/blog/security-http-headers)\
[SecureHeaders](https://github.com/aidantwoods/SecureHeaders)\
[securityheaders](https://securityheaders.com/)\

* [Content-Security-Policy (CSP)](https://content-security-policy.com/)
  * [introduction](https://www.html5rocks.com/en/tutorials/security/content-security-policy/)
  * [get-started](https://blog.codeship.com/how-to-get-started-with-a-content-security-policy/)
  * [evaluator](https://csp-evaluator.withgoogle.com/)
  * [google fundamentals](https://developers.google.com/web/fundamentals/security/csp/)

* [X-Frame-Options](https://scotthelme.co.uk/hardening-your-http-response-headers/#x-frame-options)
  * tells the browser whether you want to allow your site to be framed or not. By preventing a browser from framing your site you can defend against attacks like clickjacking. Recommended value "x-frame-options: SAMEORIGIN".

* [X-XSS-Protection](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection)
  * sets the configuration for the cross-site scripting filter built into most browsers.
  * X-XSS-Protection "1; mode=block";

* [X-Content-Type-Options](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options)
  * stops a browser from trying to MIME-sniff the content type and forces it to stick with the declared content-type.
  * X-Content-Type-Options nosniff;

* [Strict-Transport-Security (HSTS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security)
  * is an excellent feature to support on your site and strengthens your implementation of TLS by getting the User Agent to enforce the use of HTTPS.

* [Referer-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy)
  * is a new header that allows a site to control how much information the browser includes with navigations away from a document and should be set by all sites.

* [X-Powered-By](https://scotthelme.co.uk/hardening-your-http-response-headers/#x-powered-by)
  * X-Powered-By can usually be seen with values like "PHP/5.5.9-1ubuntu4.5" or "ASP.NET". Trying to minimise the amount of information you give out about your server is a good idea. This header should be removed or the value changed.

* [Expect-CT](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Expect-CT)
  * [a new security header](https://scotthelme.co.uk/a-new-security-header-expect-ct/)

TODO:
- saját megoldások és magyarázatok
- nginx-el közös részek linkelése egymásra
