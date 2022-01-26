---
sidebar_position: 1
---

# Getting Started

INTRODUCTION

## HEAD

### 1 - Add Meta tags

```html
<meta property="sesamy:price" content="8" />
<meta property="sesamy:currency" content="SEK" />
```

### 2 - Add Custom CSS variables 

```css
<style>
    sesamy-content-container {
        display: none;
    }
    sesamy-button {
        --background: #b06;
        --color: #fff;
        --font-family: Open Sans,Arial,Helvetica,sans-serif;
        --checkout-primary-button-color: #bb0066;
        --checkout-secondary-button-color: #bb0066;
    }
    sesamy-button-container {
        --background: rgba(73,207,210,.1);
        margin: 40px;
    }
</style>
```

### 3 - Add Handler when article is unlocked

```js
<script>
    document.addEventListener("sesamy-unlock", function (e) {
        document.querySelector('.paywall[data-event-view="paywall"]').hidden = true;
    });
</script>
```

## BODY

### 1 - sesamy-content-container component

```html
    <sesamy-content-container 
      item-src="https://news-demo-seven.vercel.app/www.nwt.se/inger-om-vardet-pa-lerintavlorna-det-fanns-inte-i-mitt-huvud-alltsa"
      show-childs-count="1"
    >
        [full article html content]
    </sesamy-content-container>
```

### 2 - Sesamy buy button

```html
<sesamy-button-container>
    <sesamy-button
        text="LÅS UPP ARTIKEL"
        item-src="https://news-demo-seven.vercel.app/www.nwt.se/inger-om-vardet-pa-lerintavlorna-det-fanns-inte-i-mitt-huvud-alltsa"
        unlock-message-direction="vertical"
        unlock-message-alignment="left"
    ></sesamy-button>
</sesamy-button-container>
```

### 3 - Component Scripts

```html
<script defer src="https://assets.sesamy.dev/scripts/checkout-button/sesamy-content-container.min.js"></script>
<script defer src="https://assets.sesamy.dev/scripts/checkout-button/sesamy-button-container.min.js"></script>
<script defer src="https://assets.sesamy.dev/scripts/checkout-button/sesamy-button.min.js"></script>
```