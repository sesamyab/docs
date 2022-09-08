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

The list of CSS custom properties are (the value set is the `default` value, if the property is not presented it will take that value):

```html
<style>
  sesamy-profile {
    --max-width: 100%; // Container maximum width
    --margin: 30px auto; // Container margin
    --padding: 23px 32px 32px 32px; // Container padding
    --border: 1px solid #e4e4e5; // Container border
    --background: transparent; // Container background
    --font-family: "Inter"; // Texts font family
    --title-color: #222222; // Title font color
    --avatar-size: 182px; // Avatar size
    --avatar-border: 0; // Avatar border
    --avatar-border-radius: 50%; // Avatar border radius
    --input-height: 50px; // Input height
    --input-color: #222222; // Input font color
    --input-font-size: 15px; // Input font size
    --input-border: 1px solid #d3d3d3; // Input border
    --input-border-radius: 4px; // Input border radius
    --label-color: #22222250; // Label font color
    --label-font-size: 15px; // Label font size
    --link-color: #0d66d0; // Link font color
  }
</style>
```
