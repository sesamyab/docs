---
sidebar_position: 4
---

# sesamy-button

## Usage

### Basic usage

Place the `sesamy-button` element and load the script. The button will be rendered with the default styling and with the message "Unlock Article". The price will be taken from the meta tags of the website, as well as the item that the button will load on the checkout iframe.

![sesamy-button](/img/web-components/purchase-button.png)

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

The language of the button and the checkout is defined by the lang attribute on the html tag:

```html
<html lang="en">
  …
</html>
```

If no language is specified the language will default to english.

### Passing custom attributes, and hide the price and the logo

The `text`, `price` and `currency` of the button can be replaced by attributes. You can also pass the `hide-price` and `hide-logo` attributes to hide the price and the logo respectively.

```html
<html>
  <head></head>
  <body>
    <sesamy-button
      text="Unlock content!"
      price="10"
      currency="EUR"
      hide-price
      hide-logo
    ></sesamy-button>

    <script
      type="module"
      src="https://assets.sesamy.com/scripts/web-components/sesamy-button.min.js"
    ></script>
  </body>
</html>
```

The code above will render a button with the Sesamy icon, the text "Unlock content!", and with the price "10" and the currency "EUR".

### Passing a custom text

You can also modify the content of the button by sending a custom HTML block as a child wrapped in a `div` with `slot="button-text"` as follows:

```html
<html>
  <head></head>
  <body>
    <sesamy-button>
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

By default, the item displayed in the checkout iframe that is opened when the button is clicked will be taken from the current URL, if the button is used to pay for an external item, then the product could be got from the `item-src` attribute.

The external item could be both be an article on a separate url or a [pass](/docs/integration/indexing/passes.md)

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

It is also possible to pass a Sesamy Product ID (SKU) in the `item-src` attribute. This can be used for selling other types of products, such as book, or bundles of products.

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

If a product has multiple Purchase Options (PO), you can specify this in the item-src attribute together with the SKU separated by a `:`. In the example below the SKU is `sid:5Tw686FPwv8q_GgTe2Ll3` and the PO for a yearly subscription is `OBqmTKU65z0RqAOrjkDgt`:

```html
<html>
  <head></head>
  <body>
    <sesamy-button
      item-src="sid:5Tw686FPwv8q_GgTe2Ll3:OBqmTKU65z0RqAOrjkDgt"
      text="Mobil Plus Yearly"
    ></sesamy-button>

    <script
      type="module"
      src="https://assets.sesamy.com/scripts/web-components/sesamy-button.min.js"
    ></script>
  </body>
</html>
```

### Passing UTM tags to the checkout

To open the checkout with custom UTM tags you can define those as attributes of the button. The accepted UTM tags are the following: `utm-source`, `utm-medium`, `utm-campaign`, `utm-term`, and `utm-content`.

```html
<html>
  <head></head>
  <body>
    <sesamy-button
      item-src="sid:test"
      price="10"
      currency="EUR"
      utm-source="google"
      utm-medium="cpc"
      utm-campaign="sale"
      utm-term="article"
      utm-content="ad"
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

- If the attribute `checkout-mode="redirect"` (default behavior): the current window will be redirected to the checkout standalone version.
- If the attribute `checkout-mode="popup"` or the button is being displayed in a mobile device: The checkout is opened in a new popup.
- If the attribute `checkout-mode="embed"`: The checkout is opened embedded on an iframe on the website.

## Styling

The `sesamy-button` element is packaged with base styles, which can be adjusted by modifying CSS custom properties.

The list of CSS custom properties are (the value set is the `default` value, if the property is not presented it will take that value):

```html
<style>
  sesamy-button {
    --background: #131313; // button background
    --background-hover: var(
      --background,
      #131313
    ); // button background (hover state)
    --color: #f3f3f3; // button font + icon color
    --font-family: "Helvetica"; // button font family
    --font-size: 14px; // button font size
    --font-weight: 400; // button font weight
    --width: "auto"; // button width
    --max-width: 100%; // button width
    --height: "auto"; // button height
    --border: 0; // button border
    --border-radius: 50px; // button border radius
    --padding: 14px 30px; // button padding
    --opacity-hover: 1; // button opacity (hover state)
  }
</style>
```

### Client Id

The client-id is required and specified using the [meta tags](/docs/integration/indexing/meta-tags.md)
