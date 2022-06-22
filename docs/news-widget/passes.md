---
sidebar_position: 3
---

# Passes

A pass is used to package a set of posts in a bundle. The typical use case is to offer a subscription for all articles on a website, but it could be used to package just a section of the content and it could be both single purchase or subscription.

The passes work the same way as the posts by adding metatags to the page:

```html
<html>
  <head>
    <meta property="sesamy:price" content="10" />
    <meta property="sesamy:currency" content="EUR" />
    <meta property="sesamy:product-type" content="RECURRING" />

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
  </head>
  <body>
    <sesamy-login client-id="demo"></sesamy-login>
    <h1>Subscription</h1>
    <sesamy-content-container>
      <div slot="preview">
        <p>Subscribe to get access to all content</p>
      </div>
      <div slot="content">
        <p>Thanks for being a subscriber</p>
      </div>
    </sesamy-content-container>

    <sesamy-button-container>
      <sesamy-button text="Subscribe"></sesamy-button>
    </sesamy-button-container>

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
      src="https://assets.sesamy.dev/scripts/checkout-button/sesamy-login.min.js"
    ></script>
    <script
      defer
      src="https://assets.sesamy.dev/scripts/checkout-button/sesamy-button.min.js"
    ></script>
  </body>
</html>
```

Once a pass has been created it can be referenced in other posts. The posts will be unlocked either if the user has purchased the article directly or any of the passes attatched to the article.

```html
<html>
  <head>
    <meta property="sesamy:price" content="2" />
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
  </head>
  <body>
    <sesamy-login client-id="demo"></sesamy-login>
    <sesamy-content-container pass="https://example.com/subscribe">
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

    <sesamy-button-container pass="https://example.com/subscribe">
      <sesamy-button></sesamy-button>
      <sesamy-button
        text="Subscribe"
        item-src="https://example.com/subscribe"
      ></sesamy-button>
    </sesamy-button-container>

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
      src="https://assets.sesamy.dev/scripts/checkout-button/sesamy-login.min.js"
    ></script>
    <script
      defer
      src="https://assets.sesamy.dev/scripts/checkout-button/sesamy-button.min.js"
    ></script>
  </body>
</html>
```
