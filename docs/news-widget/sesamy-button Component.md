---
sidebar_position: 3
---

# sesamy-button Component

## Usage

### Basic usage

Place the `sesamy-button` element and load the script. The button will be rendered with the default styling and with the message "Lås upp artikel". The price will be taken from the meta tags of the website, as well as the item that the button will load on the checkout iframe.

```html
<html>
  <head>
    <meta property="sesamy:price" content="8" />
    <meta property="sesamy:currency" content="SEK" />
  </head>
  <body>
    <sesamy-button></sesamy-button>

    <script
      type="module"
      src="https://assets.sesamy.dev/scripts/checkout-button/sesamy-button.min.js"
    ></script>
  </body>
</html>
```

### Passing custom attributes

The content of the button (except for the sesamy logo at the beginning) can be replaced by attributes.

```html
<html>
  <head></head>
  <body>
    <sesamy-button
      text="Unlock content!"
      price="10"
      currency="EUR"
    ></sesamy-button>

    <script
      type="module"
      src="https://assets.sesamy.dev/scripts/checkout-button/sesamy-button.min.js"
    ></script>
  </body>
</html>
```

The code above will render a button with the text "Unlock content!", and with the price "10" and the currency "EUR".

#### Passign an external item in the checkout

By default, the item displayed in the checkout iframe that is opened when the button is clicked will be get from the current URL, if the button is used to pay an external item, then the product could be get from the `item-src` attribute.

```html
<html>
  <head></head>
  <body>
    <sesamy-button
      item-src="https://www-realtid-se-news-demo.vercel.app/artikel/112273"
    ></sesamy-button>

    <script
      type="module"
      src="https://assets.sesamy.dev/scripts/checkout-button/sesamy-button.min.js"
    ></script>
  </body>
</html>
```

#### Checkout modes

There are three different flows for the checkout once the `sesamy-button` is clicked:

- If the attribute `checkout-mode="redirect"`: the navigation of current window will be redirected to the checkout standalone version.
- If the attribute `checkout-mode="popup"` or the button is being displayed in a mobile device: The checkout is opened in a new popup.
- If the attribute `checkout-mode="embed"` (default behavior): The checkout is opened embedded on an iframe on the website.

#### Unlock Message

This message is shown after the article is buyed, replacing the button.

The `direction` and the `aligment` of the unlock message can be configured by:

- `unlock-message-direction`: 'vertical' or 'horizontal'. By default, 'horizontal'.
- `unlock-message-alignment`: 'left', 'center' or 'right'. By default, 'center'.

### Styling

The `sesamy-button` element are packaged with base styles, which can be adjusted by modifying CSS custom properties.

The list of CSS custom properties are:

```html
<style>
  sesamy-button {
    --background: #436cad;
    --background-hover: #436cad;
    --opacity-hover: 0.8;
    --color: #fff;
    --border: 1px solid #436cad;
    --border-radius: 30px;
    --font-family: sans-serif;
    --font-size: 16px;
    --width: 300px;
    --min-width: 300px;
    --max-width: 100%;
    --height: 50px;
    --checkout-primary-button-color: #436cad;
    --checkout-primary-button-hover: #436cad;
    --checkout-primary-button-border-color: #436cad;
    --checkout-primary-button-border-radius: 10px;
    --checkout-secondary-button-color: #436cad;
    --checkout-secondary-button-hover: #436cad;
    --checkout-secondary-button-border-color: #436cad;
    --checkout-secondary-button-border-radius: 5px;
  }
</style>
```
