---
sidebar_position: 11
---

# sesamy-entitlements

The purchases component displays a list of the users purchases. It could for instance be used on a user profile website.

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

### Styling

The `sesamy-logout` element are packaged with base styles, which can be adjusted by modifying CSS custom properties.

The list of CSS custom properties are:

```html
<style>
  sesamy-entitlements .container {
    width: var(--width, "100%");
    height: var(--height, "100%");
    background-color: var(--background, #fff);
    padding: var(--product-image-padding, "1.4rem");
    font-family: var(--font-family, "sans-serif");
    line-height: var(--line-height, "1.4rem");
  }

  sesamy-entitlements a {
    color: var(--title-color-black, "#131313");
  }

  sesamy-entitlements img {
    width: var(--product-image-width, 95px);
    height: var(--product-image-height, 95px);
    background-color: var(--product-image-background-color, "#f8f8f8");
    border-radius: var(--product-image-border-radius, 0.75rem);
  }

  sesamy-entitlements .details {
    margin-left: var(--text-separation-left, 0.5rem);
    padding-bottom: 14px;
    border-bottom-color: var(--divider-color, #70707023);
    border-bottom-width: var(--divider-width, 1px);
  }

  sesamy-entitlements p {
    font-size: var(--title-font-size, 12px);
    font-family: var(--title-font-family, sans-serif);
    font-weight: var(--title-font-weight, normal);
  }

  sesamy-entitlements span {
    color: var(--text-font-color, #222222);
    font-family: var(--text-font-family, sans-serif);
    font-size: var(--text-font-size, 0.75);
  }

  sesamy-entitlements span.type {
    color: var(--product-type-color, #22222270);
  }

  sesamy-entitlements span.date {
    color: var(--product-type-color, #22222260);
  }
</style>
```
