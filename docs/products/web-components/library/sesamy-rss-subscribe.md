---
sidebar_position: 13
---

#

The rss subscribe component shows information about a podcaast togeteher with a list of subscription buttons.

The component displays different subscription buttons depending on if it's displayed on an android, an iOS or a desktop browser. If it's displayed on a desktop browser it also displays a QR code which opens the same dialog on a mobile device.

![sesamy-rss-subscribe on mobile](/img/web-components/sesamy-rss-subscribe.png)

![sesamy-rss-subscribe on desktop](/img/web-components/sesamy-rss-subscribe-desktop.png)

The rss subscribe component is not connected to any authentication, so to show the subscribe buttons for a private podcast the rss url for the private podcast needs to be provided in the url parameter.

## Usage

### Basic usage

```html
<html>
  <head></head>
  <body>
    <sesamy-rss-subscribe
      url="https://feed.sesamy.com/sid:spmk1srgdyFySeXNYzWOU"
    ></sesamy-rss-subscribe>

    <script
      defer
      src="https://assets.sesamy.com/scripts/web-components/sesamy-bundle.min.js"
    ></script>
  </body>
</html>
```
