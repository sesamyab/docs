---
sidebar_position: 5
---

# sesamy-button-container

## Usage

### Basic usage

If the `sesamy-button` element is wrapped by the `sesamy-button-container`, the button will be displayed wrapped by a container with an image and a description taken from the meta tags.

```html
<html>
  <head></head>
  <body>
    <sesamy-button-container>
      <sesamy-button></sesamy-button>
    </sesamy-button-container>

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

To overwrite the image and the description taken from the meta tags you can use the `item-src` and `description` attributes.

```html
<sesamy-button-container
  description="Any description"
  item-src="https://www.nwt.se/inger-om-vardet-pa-lerintavlorna-det-fanns-inte-i-mitt-huvud-alltsa"
>
  <sesamy-button></sesamy-button>
</sesamy-button-container>
```

### Styling

The `sesamy-button-container` element are packaged with base styles, which can be adjusted by modifying CSS custom properties.

The list of CSS custom properties are:

```html
<style>
  sesamy-button {
    --background: #ffffff;
    --color: #000000;
    --font-family: "Helvetica";
    --font-size: 16px;
    --font-weight: 600;
    --border: 1px solid #e3e3e3;
    --border-radius: 0;
    --padding: 24px;
    --width: 100%;
    --max-width: 100%;
  }
</style>
```
