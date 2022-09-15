---
sidebar_position: 7
---

# Javascript API

The web components library exposes an API on `window.sesamy` to query the purchases of the user.

## getEntitlement

The `getEntitlement` function queries for the entitlement object that defines the customers access to the content:

```
// Get entitlment
sesamy.getEntitlement(ARTICLE_SRC_OR_SKU, PASSES_ARRAY)
```

**Arguments:**

- ARTICLE_SRC_OR_SKU (string): The url or sku for the content
- PASSES_ARRAY (array|undefined): An array of the passes that the content are part of

**Returns:**

(Promise<object|undefined\>): An entitlment or a signedURL object

**Example:**

```
// Get the entitlement for an article
const entitlement = sesamy.getEntitlement('https://example.com/article', ['https://example.com/subscription'])
```

## getAccess

The `getAccess` function returns an url to access a content resource, for instance an article or a podcast feed:

```
// Get access url
sesamy.getAccess(ARTICLE_SRC_OR_SKU, PASSES_ARRAY, FORMAT)
```

**Arguments:**

- ARTICLE_SRC_OR_SKU (string): The url or sku for the content
- PASSES_ARRAY (array|undefined): An array of the passes that the content are part of
- FORMAT (URL|RSS): The requested format of the access link

**Returns:**

(Promise<string|undefined\>): An url to access the content

**Example:**

```
// Get the access url
const accessUrl = sesamy.getEntitlement('sid:A2-3YbkzKvJLT8KVJsNZL', [], 'RSS')
```

## isLoggedIn

The `isLoggedIn` function returns if the user currently is logged in with a valid session:

```
// Check if a user is logged in. Returns a Promise<boolean>
sesamy.isLoggedIn()
```

**Arguments:**

**Returns:**

(Promise<boolean\>): The logged in state

**Example:**

```
// Get if the user is logged int
sesamy.isLoggedIn().then(result => console.log(result))
```
