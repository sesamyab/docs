---
sidebar_position: 7
---

# Javascript API

The web components library exposes an API on `window.sesamy` to query the purchases of the user.

## getEntitlement

The `getEntitlement` function queries for the entitlement object that grants access to an article:

```
// Get entitlment
sesamy.getEntitlement(ARTICLE_SRC, PASSES_ARRAY)
```

**Arguments:**

- ARTICLE_SRC (string): The url for the article
- PASSES_ARRAY (array|undefined): An array of the passes that the article are part of

**Returns:**

(object|undefined): An entitlment or a signedURL object

**Example:**

```
// Get a list of entitlements
const entitlement = sesamy.getEntitlements('https://example.com/article', ['https://example.com/subscription'])
```

## isLoggedIn

The `isLoggedIn` function returns if the user currently is logged in with a valid session:

```
// Check if a user is logged in. Returns a Promise<boolean>
sesamy.isLoggedIn()
```

**Arguments:**

**Returns:**

(Promise\<boolean\>): The logged in state

**Example:**

```
// Get if the user is logged int
sesamy.isLoggedIn().then(result => console.log(result))
```
