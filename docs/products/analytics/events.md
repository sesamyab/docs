---
sidebar_position: 2
---

# Events

The analytics registers three types of events:

- Page events which are triggered for each page view.
- Web component events.
- Custom event from the javascript API.

## Page Events

The page events are triggered on each page load or routing in the case of single page applications.

The event contains the following information:

- Url
- User Agent
- Referer
- Geolocation via IP-lookup
- Locale

## Custom Events

The web components generates article specific events for a set of user interactions:

- ViewArticle. Triggered when an article is within the view port of the the browser.
- Scroll. Triggered when 25, 50, 75, 90 and 100% of an article is visiable withing the view port of the browser.
- AddToCart. Triggered when a product is added to the cart.
- Idle. Triggered when a user has been idle on a page for more than 20 seconds.

## Javascript API

The analytics library exposes an API on `window.sesamy.analytics` from tracking of customer events in the client.

The API exposes a `track` function that takes an event name and a json object as payload:

```
// Basic event tracking
sesamy.analytics.track('buttonClicked')

// Event tracking with payload
sesamy.analytics.track('itemPurchased', {
  price: 11,
  sku: '1234'
})
```

The analytics library will decorate each call with a user id and information about the current page.

## Toogle analytics

Anlytics are enabled by default. You can disable analytics either from a meta tag or toggle analytics from the JavaScript API.

```
<!-- Including the following tag in the <head> of your HTML will disable analytics -->
<meta property="sesamy:analytics" content="false" />
```

```
// You can also use the JavaScript API to enable and disable the analytics
window.sesamy.analytics.enable()
window.sesamy.analytics.disable()
```
