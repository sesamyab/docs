---
sidebar_position: 10
---

# sesamy-profile

The profile component displays the name and email of the current user. It could for instance be used on a user profile website

## Usage

### Basic usage

```html
<html>
  <head></head>
  <body>
    <sesamy-profile></sesamy-profile>

    <script
      defer
      src="https://assets.sesamy.com/scripts/web-components/sesamy-profile.min.js"
    ></script>
  </body>
</html>
```

### Client Id

The client-id is required and specified using the [meta tags](/docs/news-widget/meta-tags.md)

### Styling

The `sesamy-profile` element are packaged with base styles, which can be adjusted by modifying CSS custom properties.

The list of CSS custom properties are:

```html
<style>
  sesamy-profile .main-container {
    margin: var(--margin, 30px auto);
    border: 1px solid var(--divider-color, #e4e4e5);
    line-height: var(--line-height, 1.4rem);
    max-width: var(--container-width, 850px);
    font-family: var(--font-family, "Roboto", "Inter", sans-serif);
  }

  sesamy-profile .content-layout-right {
    margin: var(--margin, 0 0 0 22px);
  }

  sesamy-profile .content-layout-left {
    min-width: var(--user-info-width, 236px);
    max-width: var(--user-info-width, 300px);
  }

  sesamy-profile .content-layout-left img {
    width: var(--image-width, 182px);
    height: var(--image-height, 182px);
    border-radius: var(--image-border-radius, 50%);
  }

  sesamy-profile .email-container input {
    margin-bottom: var(--margin, 0);
  }

  sesamy-profile .subscription {
    border-top: 1px solid var(--subscription-border-color, #22222280);
    border-bottom: 1px solid var(--subscription-border-color, #22222280);
  }

  sesamy-profile #personal-info {
    font-size: var(--font-size, 20px);
    font-family: var(--font-family, "Inter", sans-serif);
    font-weight: var(--font-weight, 400);
    color: var(--font-color, #222222);
  }

  sesamy-profile button {
    background-color: var(--cancel-button-color, #8c8c8c);
    border: 1px solid var(--cancel-button-color, #b3b3b3);
  }

  sesamy-profile button:first-child {
    background-color: var(--cancel-button-color, #fff);
    margin-right: var(--margin, 12px);
  }

  sesamy-profile input {
    font-size: var(--font-size, 15px);
    border: 1px solid var(--divider-color, #d3d3d3);
    height: var(--input-height, 50px);
    margin-bottom: var(--bottom-input-margin, 40px);
  }

  sesamy-profile .input-wrapper label {
    background-color: var(--background-color, #fff);
    font-family: var(--label-font-family, "Inter", sans-serif);
    font-weight: var(--label-font-weight, medium);
    font-size: var(--label-font-size, 15px);
    color: var(--label-color, #22222250);
  }

  sesamy-profile .input-wrapper input {
    font-family: var(--input-font-family, "Inter", sans-serif);
    font-weight: var(--input-font-weight, medium);
    font-size: var(--input-font-size, 15px);
    color: var(--input-color, #222222);
  }

  @media only screen and (max-width: 640px) {
    sesamy-profile .content-layout-right {
      margin: var(--margin, 0 0 0 0);
    }
  }

  @media only screen and (min-width: 768px) {
    sesamy-profile .content-layout-left::after {
      border-right: 1px solid var(--divider-color, #e4e4e5);
    }
  }
</style>
```
