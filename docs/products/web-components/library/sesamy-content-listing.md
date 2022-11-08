---
sidebar_position: 9
---

# sesamy-content-listing

The content listings component is used for tracking which articles have been viewed in a list of articles.

The components logs the following data:

- The url of the article
- The x and y offset of the article
- The time spent on the page before the article was viewed

It only wraps the html of an article listing without affecting the rendering.

## Usage

### Basic usage

```html
<html>
  <head></head>
  <body>
    <sesamy-content-listing item-src="https://example.com/article">
      <div>The article</div>
    </sesamy-content-listing>

    <script type="module">
      import "../dist/src/sesamy-bundle.js";
    </script>
  </body>
</html>
```
