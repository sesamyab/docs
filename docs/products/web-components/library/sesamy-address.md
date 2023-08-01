---
sidebar_position: 11
---

# sesamy-address

The address component displays and allows updating the address of the current vendor user. It could for instance be used on a user profile website

## Usage

### Basic usage

```html
<html>
  <head></head>
  <body>
    <sesamy-address></sesamy-address>

    <script
      defer
      src="https://assets.sesamy.com/scripts/web-components/sesamy-address.min.js"
    ></script>
  </body>
</html>
```

### Passing custom attributes

#### Title

By specifying a `title` attribute the title of the component can be set. If the attribute is set to an empty string the title is removed.

```html
<html>
  <head></head>
  <body>
    <sesamy-address title="Another title"></sesamy-address>

    <script
      type="module"
      src="https://assets.sesamy.com/scripts/web-components/sesamy-bundle.min.js"
    ></script>
  </body>
</html>
```

### Styling

The `sesamy-address` element are packaged with base styles, which can be adjusted by modifying CSS custom properties.

The list of CSS custom properties are (the value set is the `default` value, if the property is not presented it will take that value):

```html
<style>
  sesamy-profile {
    --max-width: 100%; // Container maximum width
    --margin: 30px auto; // Container margin
    --padding: 23px 32px 32px 32px; // Container padding
    --border: 1px solid #e4e4e5; // Container border
    --background: transparent; // Container background
    --font-family: "Roboto", "Inter", sans-serif; // Texts font family
    --input-margin-bottom: 20px; // Input bottom margin
    --input-background: transparent; // Input background
    --input-height: 50px; // Input height
    --input-color: #222222; // Input font color
    --input-font-size: 15px; // Input font size
    --input-border: 1px solid #d3d3d3; // Input border
    --input-border-radius: 4px; // Input border radius
    --label-font-family: "Inter", sans-serif; // Label font family
    --label-font-weight: medium; // Label font weight
    --label-color: #22222250; // Label font color
    --label-font-size: 15px; // Label font size
    --button-background: #ffffff; // Button background
    --button-background-hover: var(
      --button-background-hover,
      var(--button-background, #22222220)
    ); // Button background (hover state)
    --button-opacity-hover: 1; // Button opacity (hover state)
    --button-color: #222222; // Button font color
    --button-font-family: "Helvetica"; // Button font family
    --button-font-size: 15px; // Button font size
    --button-font-weight: 400; // Button font weight
    --button-width: 100%; // Button width
    --button-max-width: 100%; // Button max width
    --button-height: 45px; // Button height
    --button-border: 1px solid #b3b3b3; // Button border
    --button-border-radius: 50px; // Button border radius
    --button-padding: 14px 30px; // Button padding
  }
</style>
```
