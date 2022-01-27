---
sidebar_position: 1
---

# Getting Started

INTRODUCTION

## Inside the `HEAD` tag 

###  Add Meta tags

It's needed to get the `title`, `description`, `image`, `price` and `currency`.

The priority to get those values are:

#### `title`
1. `sesamy:title` meta tag
```html
<meta property="sesamy:title" content="any title" />
```
2. `og:title` meta tag
```html
<meta property="og:title" content="any title" />
```
3. <title\> tag 
```html
<title>any title</title>
```
4. First <H1\> finded
```html
<h1>any title</h1>
```

#### `description`
1. `sesamy:description` meta tag
```html
<meta property="sesamy:description" content="any description" />
```
2. `og:description` meta tag
```html
<meta property="og:description" content="any description" />
```
3. `description` meta tag 
```html
<meta property="description" content="any description" />
```

#### `image`
1. `sesamy:image` meta tag
```html
<meta property="sesamy:image" content="[IMAGE_URL]" />
```
2. `og:image` meta tag
```html
<meta property="og:image" content="[IMAGE_URL]" />
```
3. `image` meta tag 
```html
<meta property="image" content="[IMAGE_URL]" />
```

#### `price`
1. `sesamy:price` meta tag
```html
<meta property="sesamy:price" content="10" />
```
2. `og:price` meta tag
```html
<meta property="og:price" content="10" />
```
3. `price` meta tag
```html
<meta property="price" content="10" />
```

#### `currency` (`DKK`, `EUR` and `SEK`)
1. `sesamy:currency` meta tag
```html
<meta property="sesamy:currency" content="EUR" />
```
2. `og:currency` meta tag
```html
<meta property="og:currency" content="EUR" />
```
3. `currency` meta tag 
```html
<meta property="currency" content="EUR" />
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

## Boilerplate

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
            document.addEventListener('sesamy-unlock', function (e) {
                console.log(e.detail);
            });
        </script>
    </head>
    <body>
        <sesamy-button></sesamy-button>

        <sesamy-content-container>
            <p>...</p>
            <p>...</p>
            <p>...</p>
        </sesamy-content-container>

        <sesamy-button-container>
            <sesamy-button></sesamy-button>
        </sesamy-button-container>
        
        <script defer src="https://assets.sesamy.dev/scripts/checkout-button/sesamy-content-container.min.js"></script>
        <script defer src="https://assets.sesamy.dev/scripts/checkout-button/sesamy-button-container.min.js"></script>
        <script defer src="https://assets.sesamy.dev/scripts/checkout-button/sesamy-button.min.js"></script>
    </body>
</html>
```