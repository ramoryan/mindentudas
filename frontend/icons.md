# Ikonok

[favicongenerator](https://realfavicongenerator.net/)

There is no "one size fits all" icon. You can't create a single SVG icon and expect it to work everywhere.

## iOS Safari

iOS Safari expects a touch icon. As of today, this is a 180x180 PNG image. This image should not use transparency and its corners will be automatically rounded when added to home screen. Declared with:

<link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png">

## Android Chrome

Android Chrome relies on the Web App Manifest. Although this manifest is not dedicated to Android Chrome, it is currently its main supporter. So at the moment, it is still quite safe to consider the icons from the Web App Manifest to be for Android Chrome.

As the name suggests, the Web App Manifest is for, well, web apps. But any web site can use it as a way to reference some icons.

Android expects a 192x192 PNG icon, transparency allowed and encouraged.

The manifest is declared with:

<link rel="manifest" href="/icons/site.webmanifest">

## macOS Safari

Although macOS Safari has no favicon, it supports the mask icon for pinned tabs. This is a monochromatic SVG icon and a single color that fills it when the tab is active.

Declare it with:

<link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#5bbad5">

## Edge and IE 12

Microsoft introduced the [browserconfig](https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/platform-apis/dn320426(v=vs.85)), an XML document which lists various icons that fit the Metro UI.

The file and background color are declared with:

<meta name="msapplication-TileColor" content="#da532c">
<meta name="msapplication-config" content="/icons/browserconfig.xml">

## Classic desktop browsers

Historically, there was a single favicon.ico file, still supported. However, most recent browsers rather pick PNG icons, which are lighter. Plus some browsers are not able to select the proper icon in the ICO file (this format can embed several versions of an icon), leading a low resolution icon being wrongly used.

Thus the combo I still recommend today, with favicon.ico embedding 16x16, 32x32 and 48x48 icons:

<link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png">
<link rel="shortcut icon" href="/icons/favicon.ico">
