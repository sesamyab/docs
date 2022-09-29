---
sidebar_position: 11
---

# sesamy-entitlements

The entitlements component displays a list of all the content the user has access to. It could for instance be used on a user profile website.

## Usage

### Basic usage

```html
<html>
  <head></head>
  <body>
    <sesamy-entitlements></sesamy-entitlements>

    <script
      defer
      src="https://assets.sesamy.com/scripts/web-components/sesamy-entitlements.min.js"
    ></script>
  </body>
</html>
```

### Passing custom attributes

#### Product Type

By passing a `product-type` attribute the entitlements components will filter the entitlements by product type. This way it's possible to add separate listings of for instance articles and podcasts.

```html
<html>
  <head></head>
  <body>
    <h1>Articles</h1>
    <sesamy-entitlements product-type="artile"></sesamy-entitlements>

    <h1>Podcasts</h1>
    <sesamy-entitlements product-type="podcast"></sesamy-entitlements>

    <script
      defer
      src="https://assets.sesamy.com/scripts/web-components/sesamy-entitlements.min.js"
    ></script>
  </body>
</html>
```

#### Hide type and description

To have a slimmer version of the entitlement, you can pass the attributes `hide-type` and `hide-description`.

```html
<html>
  <head></head>
  <body>
    <sesamy-entitlements hide-type hide-description></sesamy-entitlements>

    <script
      defer
      src="https://assets.sesamy.com/scripts/web-components/sesamy-entitlements.min.js"
    ></script>
  </body>
</html>
```

### Styling

The `sesamy-entitlements` element are packaged with base styles, which can be adjusted by modifying CSS custom properties.

The list of CSS custom properties are (the value set is the `default` value, if the property is not presented it will take that value):

```html
<style>
  sesamy-entitlements {
    --background: transparent; // Container background
    --items-gap: 16px; // Gap between the items
    --item-width: 300px; // Item min-width (Minimum allowed value = 185px)
    --font-family: 'Helvetica'; // Texts font family
    --details-margin-left: 8px; // Left margin of the details container
    --details-justify-content: space-between; // Content justify of details container
    --title-color: #131313; // Title color
    --summary-color, #22222260; // Summary color
    --type-color: #22222270; // Product type color
    --type-font-size: 11px; // Produc type font size
    --type-font-family: var(--font-family, 'Helvetica'); // Product type font family
    --date-color: #22222260; // Date color
    --date-font-size: 12px; // Date font size
    --date-font-family: var(--font-family, 'Helvetica'); // Date font family
    --image-size: 95px; // Item's image size
    --image-border-radius: 12px; // Item's image border radius
    --divider-color: #70707023; // Item's divider color
    --divider-width: 1px; // Item's divider width
  }
</style>
```
