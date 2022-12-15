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
      src="https://assets.sesamy.com/scripts/web-components/sesamy-logout.min.js"
    ></script>
  </body>
</html>
```

### Passing custom attributes

#### Text

The content of the text can be replaced with the `text` attribute.

```html
<html>
  <head></head>
  <body>
    <sesamy-logout text="Exit here!"></sesamy-logout>

    <script
      type="module"
      src="https://assets.sesamy.com/scripts/web-components/sesamy-logout.min.js"
    ></script>
  </body>
</html>
```

#### Hide the icon

You can pass the `hide-icon` to hide the icon of the logout button.

```html
<html>
  <head></head>
  <body>
    <sesamy-logout hide-icon text="Exit here!"></sesamy-logout>

    <script
      type="module"
      src="https://assets.sesamy.com/scripts/web-components/sesamy-logout.min.js"
    ></script>
  </body>
</html>
```

#### Return To

By specifying a `return-to` attribute it is possible to set the page that the user will be redirected to after signing out. If this attribute is not set the user will be redirected to the current page.

```html
<html>
  <head></head>
  <body>
    <sesamy-logout return-to="/"></sesamy-logout>

    <script
      type="module"
      src="https://assets.sesamy.com/scripts/web-components/sesamy-logout.min.js"
    ></script>
  </body>
</html>
```

### Styling

The `sesamy-logout` element is packaged with base styles, which can be adjusted by modifying CSS custom properties.

The list of CSS custom properties are (the value set is the `default` value, if the property is not presented it will take that value):

```html
<style>
  sesamy-logout {
    --color: #f3f3f3; // button font + icon color
    --font-family: "Helvetica"; // button font family
    --font-size: 14px; // button font size
    --font-weight: 400; // button font weight
  }
</style>
```
