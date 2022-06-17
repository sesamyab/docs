---
sidebar_position: 5
---

# sesamy-content-container Component

The content container component displays either the locked preview version of the content or the the actual content depending on if the user has access.

## Usage

### Basic usage

The content container matches the current url against the users purchases and displays the content from the preview of the content slot depending on if the user has access.

```html
<html>
  <head></head>
  <body>
    <sesamy-content-container>
      <div slot="preview">
        <p>Preview content</p>
      </div>
      <div slot="content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nunc
          ante. Proin dignissim non diam a iaculis. Vivamus nec tincidunt nisl.
          Curabitur vel vehicula felis. Donec iaculis tincidunt varius.
          Curabitur tincidunt varius purus, a malesuada quam fermentum eleifend.
          Maecenas eget lorem justo.
        </p>
      </div>
    </sesamy-content-container>

    <script
      defer
      src="https://assets.sesamy.dev/scripts/checkout-button/sesamy-content-container.min.js"
    ></script>
  </body>
</html>
```

### Gradient

The `sesamy-content-container` can show a gradient over the preview content by adding a gradient property to the tag.

```html
<html>
  <head></head>
  <body>
    <sesamy-content-container gradient>
      <div slot="preview">
        <p>Preview content</p>
      </div>
      <div slot="content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nunc
          ante. Proin dignissim non diam a iaculis. Vivamus nec tincidunt nisl.
          Curabitur vel vehicula felis. Donec iaculis tincidunt varius.
          Curabitur tincidunt varius purus, a malesuada quam fermentum eleifend.
          Maecenas eget lorem justo.
        </p>
      </div>
    </sesamy-content-container>

    <script
      defer
      src="https://assets.sesamy.dev/scripts/checkout-button/sesamy-content-container.min.js"
    ></script>
  </body>
</html>
```
