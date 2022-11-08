---
sidebar_position: 6
---

# sesamy-locked-content-container

## Usage

### Basic usage

The `sesamy-locked-content-container` component is used for wrapping a block that should only be available once the item is locked.

```html
<html>
  <head></head>
  <body>
    <sesamy-locked-content-container
      item-src="https://www-realtid-se-news-demo.vercel.app/artikel/112273"
    >
      <span>This content will appear only when the item is locked</span>
      <sesamy-button
        item-src="https://www-realtid-se-news-demo.vercel.app/artikel/112273"
      ></sesamy-button>
    </sesamy-locked-content-container>

    <script
      defer
      src="https://assets.sesamy.com/scripts/web-components/sesamy-button-container.min.js"
    ></script>
    <script
      defer
      src="https://assets.sesamy.com/scripts/web-components/sesamy-button.min.js"
    ></script>
  </body>
</html>
```

You can pass the `item-src` or `pass` attributes to it, or you can get those values from the `sesamy-content-data` conmponent:

```html
<sesamy-content-data id="123" item-src="https://www-realtid-se-news-demo.vercel.app/artikel/112273"></sesamy-content-data>
    <sesamy-locked-content-container publisher-content-id="123">
      <span>This content will appear only when the item is locked</span>
      <sesamy-button></sesamy-button publisher-content-id="123">
    </sesamy-locked-content-container>
```
