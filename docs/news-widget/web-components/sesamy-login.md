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
- Link (`variant="link`): Displays a text link to the login page.

### Profile Href

The profile href defines where the login component will link to when a logged in user clicks it (e.g.: `profile-href="/profile"`).

### Styling

The `sesamy-login` element are packaged with base styles, which can be adjusted by modifying CSS custom properties.

The list of CSS custom properties are (the value set is the `default` value, if the property is not presented it will take that value):

```html
<style>
  sesamy-login {
    // Buton attributes (User is not logged in)
    --background: #131313; // button background
    --background-hover: var(
      --background,
      #131313
    ); // button background (hover state)
    --color: #f3f3f3; // button font + icon color
    --font-family: "Verdana"; // button font family
    --font-size: 14px; // button font size
    --font-weight: 400; // button font weight
    --width: "auto"; // button width
    --max-width: 100%; // button width
    --height: "auto"; // button height
    --border: 0; // button border
    --border-radius: 50px; // button border radius
    --padding: 14px 30px; // button padding
    --opacity-hover: 1; // button opacity (hover state)
    // User attributes (User is logged in)
    --user-color: #222222; // user name font color
    --user-font-family: "Verdana"; // user name font family
    --user-font-size: 14px; // user name font size
    --user-font-weight: 400; // user name font weight
    --avatar-border: 0; // user avatar border
    --avatar-border-radius: 50px; // user avatar border radius
    --avatar-size: 34px; // user avatar size (default on variant=picture is 50px)
    --avatar-background: #512da8; // generated avatar if avatar image is not found background
    --avatar-font-size: 18px; // generated avatar if avatar image is not found font size
  }
</style>
```
