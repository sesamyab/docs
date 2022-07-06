---
sidebar_position: 7
---

# sesamy-content-data

The content data web component is only used as a central storage for other web components and doesn't contain any other functionality.

The other web components have a fallback flow where they for each property uses the value defined directly and then falls back to the value specified on a `sesamy-content-data` tag with an `id` matching the `pid` components property.

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
      image="ttps://example.com/test-article.jpg"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nuncante. Proin dignissim non diam a iaculis. Vivamus nec tincidunt nisl. Vivamus nec tincidunt nisl. Curabitur vel vehicula felis. Donec iaculis tincidunt varius. Curabitur tincidunt varius purus, a malesuada quam fermentum eleifend. Maecenas eget lorem justo."
    ></sesamy-content-data>
    <sesamy-content-container pid="123">
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

    <sesamy-button-container pid="123">
      <sesamy-button pid="123"></sesamy-button>
    </sesamy-button-container>

    <script type="module">
      import "../dist/src/sesamy-bundle.js";
    </script>
  </body>
</html>
```
