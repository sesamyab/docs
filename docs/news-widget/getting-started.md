---
sidebar_position: 1
---

# Getting Started

## Boilerplate

Here we can see an example of the different elements that have to be integrated to show the button an the widget.

```html
<html>
  <head>
    <meta property="sesamy:price" content="10" />
    <meta property="sesamy:currency" content="EUR" />

    <style>
      sesamy-content-container {
        display: none;
      }
      sesamy-button-container {
        --background: #ffffff;
        --font-weight: 600;
      }
      sesamy-button {
        --background: #436cad;
        --border-radius: 30px;
      }
    </style>
    <script>
      document.addEventListener("sesamy-unlock", function (e) {
        console.log(e.detail);
      });
    </script>
  </head>
  <body>
    <sesamy-login client-id="demo"></sesamy-login>
    <sesamy-content-container>
      <div slot="preview">
        <p>Preview content</p>
      </div>
      <div slot="content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nunc
          ante. Proin dignissim non diam a iaculis. Vivamus nec tincidunt nisl.
          Curabitur vel vehicula felis. Donec iaculis tincidunt varius.
          Curabitur tincidunt varius purus, a malesuada quam fermentum eleifend.
          Maecenas eget lorem justo.
        </p>
      </div>
    </sesamy-content-container>

    <sesamy-button-container>
      <sesamy-button></sesamy-button>
    </sesamy-button-container>

    <script
      defer
      src="https://assets.sesamy.dev/scripts/checkout-button/sesamy-bundle.min.js"
    ></script>
  </body>
</html>
```

### Styling

The `sesamy-button` and `sesamy-button-container` elements are packaged with base styles, which can be adjusted by modifying CSS custom properties.

Besides, we can adjust any style of any of these components directly, like `sesamy-content-container`.

Check all the CSS custom properties of every component in the component page.

```html
<style>
  sesamy-content-container {
    display: none;
  }
  sesamy-button-container {
    --background: #ffffff;
    --font-weight: 600;
  }
  sesamy-button {
    --background: #436cad;
    --border-radius: 30px;
  }
</style>
```

### Handling Unlock Data

Once the checkout flow in the iframe is finished and the item was succesfully purchased, a custom event `sesamy-unlock` will be dispatched, the button element can listen to that event and handle as appropriate. The `detail` property of the event will contain the information regarding the unlocked article.

```html
<script>
  document.addEventListener("sesamy-unlock", function (e) {
    console.log(e.detail);
  });
</script>
```

#### Event payload structure

The `detail` property of the `sesamy-unlock` event will contain an object with two properties:

##### - `itemId` (`String`)

An sku that identifies the purchased item.

##### - `checkoutId` (`String`)

The id of the checkout from which the item was purchased.

## Inside the `BODY` tag

### <sesamy-content-container\>

The `sesamy-content-container` element is used to hide content on the client-side.

```html
<html>
  <head>
    <style>
      sesamy-content-container {
        display: none;
      }
    </style>
  </head>
  <body>
    <sesamy-content-container>
      <div slot="preview">
        <p>Preview content</p>
      </div>
      <div slot="content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nunc
          ante. Proin dignissim non diam a iaculis. Vivamus nec tincidunt nisl.
          Curabitur vel vehicula felis. Donec iaculis tincidunt varius.
          Curabitur tincidunt varius purus, a malesuada quam fermentum eleifend.
          Maecenas eget lorem justo.
        </p>
      </div>
    </sesamy-content-container>

    <script
      defer
      src="https://assets.sesamy.dev/scripts/checkout-button/sesamy-content-container.min.js"
    ></script>
  </body>
</html>
```

### <sesamy-button\>

This component show the button to buy the article. When it's clicked, the widget will appear.

```html
<html>
  <head>
    <style>
      sesamy-button {
        --background: #436cad;
        --border-radius: 30px;
      }
    </style>
  </head>
  <body>
    <sesamy-button></sesamy-button>

    <script
      defer
      src="https://assets.sesamy.dev/scripts/checkout-button/sesamy-button.min.js"
    ></script>
  </body>
</html>
```

### <sesamy-button-container\>

If the `sesamy-button` element is wrapped by the `sesamy-button-container`, the button will be displayed wrapped by a container with an image and a description taken from the meta tags.

```html
<html>
  <head>
    <style>
      sesamy-button-container {
        --background: #ffffff;
        --font-weight: 600;
      }
      sesamy-button {
        --background: #436cad;
        --border-radius: 30px;
      }
    </style>
  </head>
  <body>
    <sesamy-button-container>
      <sesamy-button></sesamy-button>
    </sesamy-button-container>

    <script
      defer
      src="https://assets.sesamy.dev/scripts/checkout-button/sesamy-button-container.min.js"
    ></script>
    <script
      defer
      src="https://assets.sesamy.dev/scripts/checkout-button/sesamy-button.min.js"
    ></script>
  </body>
</html>
```

To overwrite the image and the description taken from the meta tags you can use the `item-src` and `description` attributes.

### Component Scripts

The components can either be fetched individually or by using the bundle that contains all components.

This snippet imports all components individually.

```html
<script
  defer
  src="https://assets.sesamy.dev/scripts/checkout-button/sesamy-content-container.min.js"
></script>
<script
  defer
  src="https://assets.sesamy.dev/scripts/checkout-button/sesamy-button-container.min.js"
></script>
<script
  defer
  src="https://assets.sesamy.dev/scripts/checkout-button/sesamy-button.min.js"
></script>
<script
  defer
  src="https://assets.sesamy.dev/scripts/checkout-button/sesamy-login.min.js"
></script>
<script
  defer
  src="https://assets.sesamy.dev/scripts/checkout-button/sesamy-profile.min.js"
></script>
<script
  defer
  src="https://assets.sesamy.dev/scripts/checkout-button/sesamy-entitlements.min.js"
></script>
```

This snippet imports the bundle with all components.

```html
<script
  defer
  src="https://assets.sesamy.dev/scripts/checkout-button/sesamy-bundle.min.js"
></script>
```
