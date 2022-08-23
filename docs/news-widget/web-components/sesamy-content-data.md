---
sidebar_position: 7
---

# sesamy-content-data

The content data web component is only used as a central metadata storage for an article that other web components can fall back to and doesn't contain any other functionality.

The other web components have a fallback flow where they for each property uses the value defined directly and then falls back to the value specified on a `sesamy-content-data` tag with an `id` matching the `publisher-content-id` components property.

The `sesamay-content-data` tag is also used by the Sesamy Catalog when indexing content.

## Usage

### Basic usage

```html
<html>
  <head></head>
  <body>
    <sesamy-content-data
      id="123"
      price="9"
      currency="SEK"
      item-src="https://example.com/test-article"
      image="https://example.com/test-article.jpg"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nuncante. Proin dignissim non diam a iaculis. Vivamus nec tincidunt nisl. Vivamus nec tincidunt nisl. Curabitur vel vehicula felis. Donec iaculis tincidunt varius. Curabitur tincidunt varius purus, a malesuada quam fermentum eleifend. Maecenas eget lorem justo."
    ></sesamy-content-data>
    <sesamy-content-container publisher-content-id="123">
      <div slot="preview">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nunc
          ante. Proin dignissim non diam a iaculis. Vivamus nec tincidunt nisl.
          Curabitur vel vehicula felis. Donec iaculis tincidunt varius.
          Curabitur tincidunt varius purus, a malesuada quam fermentum eleifend.
          Maecenas eget lorem justo.
        </p>
      </div>
    </sesamy-content-container>

    <sesamy-button-container publisher-content-id="123">
      <sesamy-button publisher-content-id="123"></sesamy-button>
    </sesamy-button-container>

    <script type="module">
      import "../dist/src/sesamy-bundle.js";
    </script>
  </body>
</html>
```
