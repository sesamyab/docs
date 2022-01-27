---
sidebar_position: 1
---

# Getting Started

INTRODUCTION

## Inside the `HEAD` tag 

###  Add Meta tags

These meta-tags are setted to provide the `price` and `currency` to the widget when the user clicks in the `sesamy-button`.

```html
<meta property="sesamy:price" content="8" />
<meta property="sesamy:currency" content="SEK" />
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
    document.addEventListener('sesamy-unlock', function (e) {
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
            <p>...</p>
            <p>...</p>
            <p>...</p>
        </sesamy-content-container>
        
        <script defer src="https://assets.sesamy.dev/scripts/checkout-button/sesamy-content-container.min.js"></script>
    </body>
</html>
```

By default, the content inside `sesamy-content-container` will be hidden until the checkout flow is finished. The attribute `show-childs-count` could be used to show the the number of visible children elements when locked, and the attribute `gradient` with the value "true" (`gradient="true"`) to show a gradient effect at the bottom of the inner content.

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
        
        <script defer src="https://assets.sesamy.dev/scripts/checkout-button/sesamy-button.min.js"></script>
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
        
        <script defer src="https://assets.sesamy.dev/scripts/checkout-button/sesamy-button-container.min.js"></script>
        <script defer src="https://assets.sesamy.dev/scripts/checkout-button/sesamy-button.min.js"></script>
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

### Component Scripts

```html
<script defer src="https://assets.sesamy.dev/scripts/checkout-button/sesamy-content-container.min.js"></script>
<script defer src="https://assets.sesamy.dev/scripts/checkout-button/sesamy-button-container.min.js"></script>
<script defer src="https://assets.sesamy.dev/scripts/checkout-button/sesamy-button.min.js"></script>
```