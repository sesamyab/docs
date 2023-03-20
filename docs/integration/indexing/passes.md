---
sidebar_position: 3
---

# Passes

A pass is used to package a set of posts in a bundle. The typical use case is to offer a subscription for all articles on a website, but it could be used to package just a selection of the content and it could be either single purchase or subscription.

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
      src="https://assets.sesamy.com/scripts/web-components/sesamy-bundle.min.js"
    ></script>
  </body>
</html>
```

Once a pass has been created it can be referenced in other posts. The posts will be unlocked either if the user has purchased the article directly or any of the passes attached to the article.

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
      src="https://assets.sesamy.com/scripts/web-components/sesamy-bundle.min.js"
    ></script>
  </body>
</html>
```

## Index passes using

The passes can also be made avaialble for indexing using a json endpoint.

This is an example of a yearly recurring pass in a json format:

```json
{
  "id": "prenumeration",
  "title": "Prenumeration",
  "description": "",
  "price": "999",
  "currency": "SEK",
  "image": "https://example.com/wp-content/uploads/2023/03/icon-logo-badge.png",
  "url": "https://example.com/prenumerera",
  "item_src": "https://example.com/wp-json/sesamy/v1/passes/prenumeration",
  "period": "yearly",
  "time": "1",
  "product_type": "PASS",
  "purchase_type": "RECURRING"
}
```

The following properties are supported:

- id (required). The id used as sku for the pass
- title (required). The title of the pass visible to the customers.
- price (required).
- currency (required).
- item_src (required). The link to the json endpoint.
- product_type (required). Should be "PASS".
- purchase_type (required). Should be "RECURRING".
- image. The image used in the checkout and receipts.
- url. A link to a website describing the pass
- period. The periodicity of a recurring pass. Defaults to monthly.
- time. The amount of periods for each recurring interval. Defaults to 1.
