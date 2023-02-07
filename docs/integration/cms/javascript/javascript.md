---
sidebar_position: 1
---

# Javascript

The Sesamy paywall can be integrated with any CMS and existing paywall using client side javascript. See the [javascript api documentation](/docs/products/web-components/javascript-api.md) for detailed information.

The browser can determine if a user has access to an article by using the `getEntitlement` function:

```html
<scritpt>
sesamy
    .getEntitlement(location.href)
    .then(entitlement => {
        if (entitlement) {
            // The user has access to this article
            // If there is an existing paywall it could for instance be unlocked by sending an event..
            dispatchEvent(new CustomEvent('some_event', {}));
            // ... or we can fetch a signed link to an api
            sesamy.getAccess(entitlement.sku)
        }
    })
</script>
```
