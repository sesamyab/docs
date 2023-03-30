---
sidebar_position: 12
---

# sesamy-register-subscription

The register subscription component displays form where a user that has a subscription from another system can link that subscription to their sesamy account. This requires a data connection for the existing subscriptions to be setup by support@sesamy.com

![register-subscription](/img/web-components/register-subscription.png)

## Usage

### Basic usage

```html
<html>
  <head></head>
  <body>
    <sesamy-register-subscriptions></sesamy-register-subscriptions>

    <script
      defer
      src="https://assets.sesamy.com/scripts/web-components/sesamy-bundle.min.js"
    ></script>
  </body>
</html>
```

### Styling

The `sesamy-register-subscriptions` element are packaged with base styles, which can be adjusted by modifying CSS custom properties.

The list of CSS custom properties are (the value set is the `default` value, if the property is not presented it will take that value):

```html
<style>
  sesamy-transactions {
    --margin: 30px auto;
    --border: 1px solid #e4e4e5;
    --font-family: Helvetica;
    --max-width: 100%;
    --padding: 23px 32px 32px 32px;
    --background: transparent;
    --button-background: #fff;
    --button-color: #222222;
    --button-font-family: Helvetica;
    --button-font-size: 15px;
    --button-font-weight: 400;
    --button-width: 100%;
    --button-max-width: 100%;
    --button-height: 45px;
    --button-border: 1px solid #b3b3b3;
    --button-border-radius: 50px;
    --button-padding: 14px 30px;
    --button-background: #22222220;
    --button-opacity-hover: 1;
    --input-font-size: 15px;
    --input-border: 1px solid #d3d3d3;
    --input-border-radius: 4px;
    --input-height: 50px;
    --input-margin-bottom: 20px;
    --input-background: transparent;
    --label-font-family: Inter sans-serif;
    --label-font-weight: medium;
    --label-font-size: 15px;
    --label-color: #22222250;
  }
</style>
```
