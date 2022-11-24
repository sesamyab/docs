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
    --font-family: "Helvetica"; // Texts font family
    --color: #222222; // Font color
    --row-hover: #f8f8f8; // Row background hover
    --header-font-size: "12px"; // Header font size
    --header-color: #222222; // Header font color
    --header-opacity: 0.7; // Header font opacity
    --border-top: 1px solid #e4e4e5; // Row border top
    --row-font-size: 14px; // Row font size
    --currency-opacity: 0.7; // Currency opacity
    --icon-color: var(--icon-color, var(--color, #222222)); // > icon color
  }
</style>
```
