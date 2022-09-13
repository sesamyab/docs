---
sidebar_position: 12
---

# sesamy-transactions

The transactions component displays a list of the users orders with links to the receipts. It could for instance be used on a user profile website.

## Usage

### Basic usage

```html
<html>
  <head></head>
  <body>
    <sesamy-transactions></sesamy-transactions>

    <script
      defer
      src="https://assets.sesamy.com/scripts/web-components/sesamy-transactions.min.js"
    ></script>
  </body>
</html>
```

### Styling

The `sesamy-transactions` element are packaged with base styles, which can be adjusted by modifying CSS custom properties.

The list of CSS custom properties are (the value set is the `default` value, if the property is not presented it will take that value):

```html
<style>
  sesamy-transactions {
    --background: transparent; // Container background
    --items-gap: 16px; // Gap between the items
    --item-width: 300px; // Item min-width (Minimum allowed value = 185px)
    --font-family: 'Verdana'; // Texts font family
    --title-color: #131313; // Title color
    --summary-color, #22222260; // Summary color
    --type-color: #22222270; // Product type color
    --date-color: #22222260; // Date color
    --image-size: 95px; // Item's image size
    --image-border-radius: 12px; // Item's image border radius
    --divider-color: #70707023; // Item's divider color
    --divider-width: 1px; // Item's divider width
  }
</style>
```
