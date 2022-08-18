---
sidebar_position: 8
---

# sesamy-config

The config web component is only used as a central storage for common configuration for a website, such as client-id and language.

The other web components have a fallback flow where they for each property uses the value defined directly and then falls back to the value specified on the `sesamy-config` component.

The `sesamy-config` tag is also used by the Sesamy Catalog when indexing content.

## Usage

### Basic usage

```html
<html>
  <head></head>
  <body>
    <sesamy-config currency="SEK" client-id="sesamy"></sesamy-config>

    <script type="module">
      import "../dist/src/sesamy-bundle.js";
    </script>
  </body>
</html>
```
