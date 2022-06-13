---
sidebar_position: 2
---

# sesamy-login Component

## Usage

### Basic usage

Place the `sesamy-login` element and load the script. The login button will be rendered with the default styling and with the message "Login" when the user isn't logged in. Once the user is logged in it will show the current users name and a link to log out.

```html
<html>
  <body>
    <sesamy-login client-id="demo"></sesamy-login>

    <script
      type="module"
      src="https://assets.sesamy.com/scripts/checkout-button/sesamy-login.min.js"
    ></script>
  </body>
</html>
```

### Client Id

The client id is provided by Sesamy and specifies on which domains the login will be available.

### Passing custom attributes

The content of the button (except for the sesamy logo at the beginning) can be replaced by attributes.

```html
<html>
  <head></head>
  <body>
    <sesamy-login login-text="Logga in" logout-text="Logga out"></sesamy-login>

    <script
      type="module"
      src="https://assets.sesamy.com/scripts/checkout-button/sesamy-login.min.js"
    ></script>
  </body>
</html>
```

The code above will render a button with the text "Logga In".

### Styling

The `sesamy-login` element are packaged with base styles, which can be adjusted by modifying CSS custom properties.

The list of CSS custom properties are:

```html
<style>
  sesamy-login {
  }
</style>
```
