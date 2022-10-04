---
sidebar_position: 7
---

# sesamy-content-container

The content container component displays either the locked preview version of the content or the the actual content depending on if the user has access.

## Usage

### Basic usage

The content container can be used purely client side or by fetching the locked content from the server.

The content container matches the current url against the users purchases. In client side mode it displays the content from the preview of the content slot depending on if the user has access.

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
      src="https://assets.sesamy.com/scripts/web-components/sesamy-content-container.min.js"
    ></script>
  </body>
</html>
```

## Passing custom attributes

### Publisher content ID

The ID of the content on the publisher side. It can be used to fetch data about the content from a [sesamy-content-data](/docs/news-widget/web-components/sesamy-content-data.md) web component with a matching ID.

### Public

By setting the public property the article will be unlocked for all users.

### Lock Modes

There are three different flows for the displaying the locked content once the `sesamy-content-conainer` is unlocked:

- If the attribute `lock-mode="embed"` (default behavior): the locked content is fetched from the content slot as in the example above.
- If the attribute `lock-mode="signedUrl"`: the content is fetched from the publishers server using a signed url.
- If the attribute `lock-mode="event`: an event is being emitted that could for instance be used to integrate with existing paywall solutions.

### Event lock mode

If the `lock-mode="event"` is used, once the checkout flow is finished and the item was succesfully purchased, instead of displaying the unlocked content, a custom event `sesamyAccess` will be dispatched. The `detail` property of the event will contain the information regarding the unlocked article.

```html
<script>
  document.addEventListener("sesamyAccess", function (e) {
    console.log(e.detail);
  });
</script>
```

#### Event payload structure

The `detail` property of the `sesamyAccess` event will contain an object with two properties:

##### - `signedURL` (`String`)

The signed URL with the unlocked content.

##### - `itemSrc` (`String`)

An item source (url or sku) that identifies the purchased item.

### Pass

The pass property is a semi-colon concatenated list of the [passes](/docs/news-widget/passes.md) that the article is part of.

### Access Url

When using the `lock-mode=signedUrl` lock mode the content is fetched from the server. By default it fetches the locked content from the article url using the signed url, but depending on how the content is hosted it can be more convinient to fetch the locked content from a separate api path. By specifying the `access-url` property on the content-container it will use this url to fetch the locked content and pass the signed url in the `x-sesamy-signed-url` header instead:

```
<sesamy-content-container
    lock-mode="signedUrl"
    access-url="https://example.com/api/access/test-article"
>
```

### Receipt Link

This message is shown below the article once it is unlocked, it contains a link to the confirmation screen of the checkout where te item was purchased.
It can be configured by setting the attribute `receipt-link` in the sesamy-content-container tag (`<sesamy-content-container receipt-link="none">`).

The following options are available for the `receipt-link` attribute:

- Text (default) (`receipt-link="text"`): Displays a `powered by Sesamy` message
- Embed (`receipt-link="embed"`): Displays a receipt in an embedded window
- None (`receipt-link="none"`): Removed the receipt link message

The styling of the unlocked message can be configured with the following css variables:

```html
<style>
  sesamy-content-container {
    --unlock-message-flex-direction: column; // default value is `row`
    --unlock-message-align-items: flex-start; // default value is `center`
  }
</style>
```

The language of the unlock message is defined by the lang attribute on the html tag:

```html
<html lang="en">
  …
</html>
```

If no language is specified the language will default to english.

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
      src="https://assets.sesamy.com/scripts/web-components/sesamy-content-container.min.js"
    ></script>
  </body>
</html>
```
