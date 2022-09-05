---
sidebar_position: 2
---

# sesamy-login

## Usage

### Basic usage

Place the `sesamy-login` element and load the script. The login button will be rendered with the default styling and with the message "Login" when the user isn't logged in. Once the user is logged in it will show the current users name and a link to log out.

```html
<html>
  <body>
    <sesamy-login></sesamy-login>

    <script
      type="module"
      src="https://assets.sesamy.com/scripts/checkout-button/sesamy-login.min.js"
    ></script>
  </body>
</html>
```

### Client Id

The client id is provided by Sesamy and specifies on which domains the login will be available. The client-id is required and specified using the [meta tags](/docs/news-widget/meta-tags.md)

### Passing custom attributes

## Text

The content of the button (except for the sesamy logo at the beginning) can be replaced by attributes.

```html
<html>
  <head></head>
  <body>
    <sesamy-login text="Start here!"></sesamy-login>

    <script
      type="module"
      src="https://assets.sesamy.com/scripts/checkout-button/sesamy-login.min.js"
    ></script>
  </body>
</html>
```

The code above will render a button with the text "Start here!".

### Variants

The login component can be rendred in differnt variants with different visaul appearance. The variants are specified as a property on the web component:

- Text (default) (`variant="text"`): Displays the user name and a logout link
- Picture (`variant="picture"`): Displays the user name and an avatar

### Profile Href

The profile href defines where the login component will link to when a logged in user clicks it (e.g.: `profile-href="/profile"`).

### Styling

The `sesamy-login` element are packaged with base styles, which can be adjusted by modifying CSS custom properties.

The list of CSS custom properties are:

```html
<style>
  sesamy-login {
  }
</style>
```
