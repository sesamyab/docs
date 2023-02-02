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

### Passing custom attributes

#### Title

By specifying a `title` attribute the title of the component can be set. If the attribute is set to an empty string the title is removed.

```html
<html>
  <head></head>
  <body>
    <sesamy-profile title="Another title"></sesamy-profile>

    <script
      type="module"
      src="https://assets.sesamy.com/scripts/web-components/sesamy-bundle.min.js"
    ></script>
  </body>
</html>
```

#### Contact Us Message

By specifying a `contact-us-message` attribute the message for contacting support can be modified.

```html
<html>
  <head></head>
  <body>
    <sesamy-profile contact-us-message="Contact us!"></sesamy-profile>

    <script
      type="module"
      src="https://assets.sesamy.com/scripts/web-components/sesamy-bundle.min.js"
    ></script>
  </body>
</html>
```

#### Contact Us Email

By specifying a `contact-us-email` attribute the email for contacting support can be modified.

```html
<html>
  <head></head>
  <body>
    <sesamy-profile contact-us-email="hello@example.com"></sesamy-profile>

    <script
      type="module"
      src="https://assets.sesamy.com/scripts/web-components/sesamy-bundle.min.js"
    ></script>
  </body>
</html>
```

#### Hide Profile Image

By specifying a `hide-profile-image` attribute the profile image will not be shown.

```html
<html>
  <head></head>
  <body>
    <sesamy-profile hide-profile-image></sesamy-profile>

    <script
      type="module"
      src="https://assets.sesamy.com/scripts/web-components/sesamy-bundle.min.js"
    ></script>
  </body>
</html>
```

#### Prevent contact email editing

By specifying a `read-only-contact-email` attribute the contact email field will be disabled.

```html
<html>
  <head></head>
  <body>
    <sesamy-profile read-only-contact-email></sesamy-profile>

    <script
      type="module"
      src="https://assets.sesamy.com/scripts/web-components/sesamy-bundle.min.js"
    ></script>
  </body>
</html>
```

#### Manage Subscriptions

By specifying a `manage-subscriptions` attribute a link to the subscription portal will be displayed.

```html
<html>
  <head></head>
  <body>
    <sesamy-profile manage-subscriptions></sesamy-profile>

    <script
      type="module"
      src="https://assets.sesamy.com/scripts/web-components/sesamy-bundle.min.js"
    ></script>
  </body>
</html>
```

### Client Id

The client-id is required and specified using the [meta tags](/docs/integration/indexing/meta-tags.md)

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
    --font-family: "Helvetica"; // Texts font family
    --title-color: #222222; // Title font color
    --left-block-max-width: 300px; // Image container max width
    --left-block-border-right: 1px solid #e4e4e5; // Image container right border (divider)
    --avatar-size: 182px; // Avatar size
    --avatar-border: 0; // Avatar border
    --avatar-border-radius: 50%; // Avatar border radius
    --right-block-flex: none; // Data container flex
    --input-margin-bottom: 20px; // Input bottom margin
    --input-background: transparent; // Input background
    --input-height: 50px; // Input height
    --input-color: #222222; // Input font color
    --input-font-size: 15px; // Input font size
    --input-border: 1px solid #d3d3d3; // Input border
    --input-border-radius: 4px; // Input border radius
    --label-color: #22222250; // Label font color
    --label-font-size: 15px; // Label font size
    --contact-color: #22222299; // Contact text color
    --link-color: #0d66d0; // Link font color
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
