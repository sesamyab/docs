---
sidebar_position: 3
---

# sesamy-button

## Usage

### Basic usage

Place the `sesamy-button` element and load the script. The button will be rendered with the default styling and with the message "Unlock Article". The price will be taken from the meta tags of the website, as well as the item that the button will load on the checkout iframe.

```html
<html>
  <head>
    <meta property="sesamy:price" content="8" />
    <meta property="sesamy:currency" content="SEK" />
    <meta property="sesamy:client-id" content="demo" />
  </head>
  <body>
    <sesamy-button></sesamy-button>

    <script
      type="module"
      src="https://assets.sesamy.com/scripts/web-components/sesamy-button.min.js"
    ></script>
  </body>
</html>
```

### Passing custom attributes

The text, price and currency of the button can be replaced by attributes.

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
      src="https://assets.sesamy.com/scripts/web-components/sesamy-button.min.js"
    ></script>
  </body>
</html>
```

The code above will render a button with the Sesamy icon, the text "Unlock content!", and with the price "10" and the currency "EUR".

### Passing a custom text and hide the price

You can also modify the content of the button by sending a custom HTML block as a child wrapped in a `div` with `slot="button-text"` as follows:

```html
<html>
  <head></head>
  <body>
    <sesamy-button hide-price="true">
      <div slot="button-text">
        <span>BUY NOW!</span>
      </div>
    </sesamy-button>

    <script
      type="module"
      src="https://assets.sesamy.com/scripts/web-components/sesamy-button.min.js"
    ></script>
  </body>
</html>
```

The code above will render a button with the `span` `"BUY NOW!"` inside, and will hide the price.

### Passing an external item in the checkout

By default, the item displayed in the checkout iframe that is opened when the button is clicked will be get from the current URL, if the button is used to pay an external item, then the product could be get from the `item-src` attribute.

The external item could be both be an article on a separate url or a [pass](/docs/news-widget/passes.md)

```html
<html>
  <head></head>
  <body>
    <sesamy-button
      item-src="https://www-realtid-se-news-demo.vercel.app/artikel/112273"
    ></sesamy-button>

    <script
      type="module"
      src="https://assets.sesamy.com/scripts/web-components/sesamy-button.min.js"
    ></script>
  </body>
</html>
```

It is also possible to pass a Sesamy product ID in the `item-src` attribute. This can be used for selling other types of products, such as book, or bundles of products.

```html
<html>
  <head></head>
  <body>
    <sesamy-button
      item-src="isbn:9789164234858"
      text="Au Pif! Den sanna historien om Agnetas kloster"
    ></sesamy-button>

    <script
      type="module"
      src="https://assets.sesamy.com/scripts/web-components/sesamy-button.min.js"
    ></script>
  </body>
</html>
```

### Checkout modes

There are three different flows for the checkout once the `sesamy-button` is clicked:

- If the attribute `checkout-mode="redirect"` (default behavior): the navigation of current window will be redirected to the checkout standalone version.
- If the attribute `checkout-mode="popup"` or the button is being displayed in a mobile device: The checkout is opened in a new popup.
- If the attribute `checkout-mode="embed"`: The checkout is opened embedded on an iframe on the website.

## Styling

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

### Client Id

The client-id is required and specified using the [meta tags](/docs/news-widget/meta-tags.md)
