---
sidebar_position: 3
---

# sesamy-logout

## Usage

### Basic usage

Place the `sesamy-logout` element and load the script. The logout text w/icon will be rendered with the default styling and with the message "Log out" when the user is logged in. Once the user is logged out the element will be removed.

```html
<html>
  <body>
    <sesamy-logout></sesamy-logout>

    <script
      type="module"
      src="https://assets.sesamy.com/scripts/checkout-button/sesamy-logout.min.js"
    ></script>
  </body>
</html>
```

### Passing custom attributes

The content of the text can be replaced with the `text` attribute.

```html
<html>
  <head></head>
  <body>
    <sesamy-logout text="Exit here!"></sesamy-logout>

    <script
      type="module"
      src="https://assets.sesamy.com/scripts/checkout-button/sesamy-logout.min.js"
    ></script>
  </body>
</html>
```

The code above will render a button with the text "Exit here!".

### Styling

The `sesamy-logout` element are packaged with base styles, which can be adjusted by modifying CSS custom properties.

The list of CSS custom properties are:

```html
<style>
  sesamy-logout {
    --color: #131313;
    --margin, 0 12px;
  }
</style>
```
