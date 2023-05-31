---
sidebar_position: 7
---

# Javascript API

The web components library exposes an API on `window.sesamy` to query the purchases of the user.

## getUserProfile

The `getUserProfile` function queries for the profile endpoint for the currents users profile:

```javascript
// Get user profile
sesamy.getUserProfile();
```

**Returns:**

(Promise<object|null\>): A user profile or null

**Example:**

```javascript
// Get the user profile for the current user
const userProfile = await sesamy.getUserProfile();
```

The userProfile will be in the following format

```json
{
  "version": 1,
  "tz": "Europe/Madrid",
  "entity": "Profile",
  "email": "name@example.com",
  "fullName": "name@example.com",
  "picture": "https://s.gravatar.com/avatar/fc7c7179a07fe38c0feebd68c8d54e63?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fma.png",
  "created": "2022-06-13T09:48:41.824Z",
  "identities": [
    {
      "source": "auth0",
      "profileData": {},
      "provider": "auth0",
      "userId": "61715b8ebe82f0006ab0613b"
    }
  ],
  "email_verified": true,
  "externalId": {
    "auth0.auth0": "61715b8ebe82f0006ab0613b",
    "auth0.email": "63beae22c2ff41bf4309c69c"
  },
  "modified": "2022-11-15T09:58:12.877Z",
  "nickname": "nick",
  "userId": "auth0|61715b8ebe82f0006ab0613b",
  "lastIdpSync": "2023-01-16T10:19:38.804Z"
}
```

## updateUserProfileContactInfo

The `updateUserProfileContactInfo` function updates the contact information from the current user:

```javascript
// Update contact information
sesamy.updateUserProfileContactInfo({
  email: USER_EMAIL, // Optional
  firstName: USER_FIRST_NAME, // Optional
  lastName: USER_LAST_NAME, // Optional
});
```

**Arguments:**

- USER_EMAIL (string): The updated contact email of the user.
- USER_FIRST_NAME (string): The updated contact first name of the user.
- USER_LAST_NAME (string): The updated contact last name of the user.

**Returns:**

**Example:**

```javascript
// Update the contact information of the current user
await sesamy.updateUserProfileContactInfo({
  email: "jondoe@example.com",
  firstName: "Jon",
  lastName: "Doe",
});
```

## getEntitlement

The `getEntitlement` function queries for the entitlement object that defines the customers access to the content:

```javascript
// Get entitlment
sesamy.getEntitlement(ARTICLE_SRC_OR_SKU, PASSES_ARRAY);
```

**Arguments:**

- ARTICLE_SRC_OR_SKU (string): The url or sku for the content
- PASSES_ARRAY (array|undefined): An array of the passes that the content are part of

**Returns:**

(Promise<object|undefined\>): An entitlment or a signedURL object

**Example:**

```javascript
// Get the entitlement for an article
const entitlement = sesamy.getEntitlement("https://example.com/article", [
  "https://example.com/subscription",
]);
```

## getSubscriptions

The `getSubscriptions` function queries for the subscriptions of the current user:

```javascript
// Get subscriptions
sesamy.getSubscriptions();
```

**Arguments:**

**Returns:**

(Promise<[]\>): An array of the subscriptions

**Example:**

```javascript
// Get the subscriptions for the current user
const subscriptions = await sesamy.getSubscriptions();
```

The subscriptions will be in the following format

```json
[
  {
    "id": "test_id",
    "userId": "google-oauth2|test",
    "currency": "sek",
    "cancelAt": 1687532004,
    "cancelAtPeriodEnd": true,
    "canceledAt": 1684853728,
    "created": 1684853604,
    "currentPeriodEnd": 1687532004,
    "currentPeriodStart": 1684853604,
    "endedAt": null,
    "checkoutId": "test-3d31-40cc-bb71-9dfe08992e78",
    "interval": "month",
    "amount": 9900,
    "status": "active",
    "product": {
      "name": "Montly subscription",
      "description": " 99 kr per month w/taxes included",
      "distributorId": "sesamy",
      "optionId": "test-option-id",
      "productId": "sid:test",
      "sku": "sid:test",
      "vendorId": "test-vendor",
      "image": "https://images.sesamy.dev/cover/test/monthly-sub.png"
    }
  }
]
```

## cancelSubscription

The `cancelSubscription` function cancel a subscription from the current user:

```javascript
// Get subscriptions
sesamy.cancelSubscription(SUBSCRIPTION_ID);
```

**Arguments:**

- SUBSCRIPTION_ID (string): The id of the subscription to cancel.

**Returns:**

**Example:**

```javascript
// Cancel the subscription for the current user
const subscriptions = await sesamy.cancelSubscription("test-id");
```

## getAccess

The `getAccess` function returns an url to access a content resource, for instance an article or a podcast feed:

```javascript
// Get access url
sesamy.getAccess(ARTICLE_SRC_OR_SKU, PASSES_ARRAY, FORMAT);
```

**Arguments:**

- ARTICLE_SRC_OR_SKU (string): The url or sku for the content
- PASSES_ARRAY (array|undefined): An array of the passes that the content are part of
- FORMAT (URL|RSS): The requested format of the access link

**Returns:**

(Promise<string|undefined\>): An url to access the content

**Example:**

```javascript
// Get the access url
const accessUrl = sesamy.getEntitlement("sid:A2-3YbkzKvJLT8KVJsNZL", [], "RSS");
```

## isLoggedIn

The `isLoggedIn` function returns if the user currently is logged in with a valid session:

```javascript
// Check if a user is logged in. Returns a Promise<boolean>
sesamy.isLoggedIn();
```

**Arguments:**

**Returns:**

(Promise<boolean\>): The logged in state

**Example:**

```javascript
// Get if the user is logged int
sesamy.isLoggedIn().then((result) => console.log(result));
```

## login

The `login` function redirects the user to the login page:

**Arguments:**

**Returns:**

**Example:**

```javascript
// Redirect the user to the login page
sesamy.login();
```

## logout

The `logout` function clears the user session and bounces the user to the sesamy logout page to clear the cookie there as well.:

**Arguments:**

**Returns:**

Redicrects the user to the logout page

**Example:**

```javascript
// Logout user
sesamy.logout();
```

## openCheckout

The `openCheckout` function generates a checkout url and redirects the user to the checkout page:

```javascript
// Open checkout
sesamy.openCheckout({
  itemSrc: ITEM_SRC_OR_SKU,
  checkoutVersion: CHECKOUT_VERSION, // Optional
  publisherContentId: PUBLISHER_CONTENT_ID, // Optional
  price: PRICE, // Optional
  currency: CURRENCY, // Optional
  utmSource: UTM_SOURCE; // Optional
  utmMedium: UTM_MEDIUM; // Optional
  utmCampaign: UTM_CAMPAIGN; // Optional
  utmTerm: UTM_TERM; // Optional
  utmContent: UTM_CONTENT; // Optional
```

**Arguments:**

- ITEM_SRC_OR_SKU (string): The url or sku for the content
- CHECKOUT_VERSION (string): The checkout version to use
- PUBLISHER_CONTENT_ID (string): The publisher content id
- PRICE (number): The price of the item
- CURRENCY (string): The currency of the item
- DISCOUNT_CODE (string): The discount code applied to the checkout
- UTM_SOURCE (string): The source UTM tag
- UTM_MEDIUM (string): The medium UTM tag
- UTM_CAMPAIGN (string): The campaign UTM tag
- UTM_TERM (string): The term UTM tag
- UTM_CONTENT (string): The content UTM tag

**Returns:**

Redirects the user to the checkout page

**Example:**

```javascript
// Open a checkout for an article
sesamy.openCheckout({
  itemSrc: "https://example.com/article",
  checkoutVersion: "2",
  publisherContentId: "article-1",
  price: 100,
  currency: "SEK",
  discountCode: "DISC50",
  utmSource: "google",
  utmMedium: "cpc",
  utmCampaign: "sale",
  utmTerm: "article",
  utmContent: "ad",
});
```

If the product uses a purchase option this is appeneded to the itemSrc attribute with a `:` as a separator:

```javascript
sesamy.openCheckout({
  itemSrc: "https://example.com/article:option-1",
  checkoutVersion: "2",
  publisherContentId: "article-1",
  price: 100,
  currency: "SEK",
});
```

## parsePodcast

The `parsePodcast` function parses a podcast using the url to feed an returns it in a json format:

```javascript
// Open checkout
sesamy.parsePodcast(FEED_URL);
```

**Arguments:**

- FEED_URL (string): The url to a podcast feed

**Returns:**

A podcast with episodes in a json format

```json
{
  "title": "Åh fan! - Premium",
  "externalIds": {},
  "description": ".",
  "summary": ".",
  "image": "https://assets.example.com/system/shows/images/eb5/efa/53-/large/fokus-podden.png",
  "author": "Fokus Redaktion",
  "owner": {
    "name": "Fokus Redaktion",
    "email": "redaktion@fokus.se"
  },
  "publishDate": "2023-05-29T12:17:49.000Z",
  "language": "en",
  "keywords": [],
  "rssUrl": "https://feed.sesamy.com/sid:2QNn9E1brlrKDGAf-lOY-",
  "copyright": "Sesamy AB",
  "isHidden": false,
  "isExplicit": false,
  "isComplete": false,
  "podcastType": "EPISODIC",
  "totalSeasons": 0,
  "totalEpisodes": 1,
  "episodes": [
    {
      "guid": "94d2db0ef890140723600cf8cd4ec89c",
      "title": "Test",
      "subtitle": "",
      "description": "",
      "url": "https://media.example.com/ahfanpremium/fokuspodden_211020_mix01.mp3",
      "link": "https://sesamy.com/products/sid:2QNn9E1brlrKDGAf-lOY-?guid=94d2db0ef890140723600cf8cd4ec89c",
      "image": "https://assets.example.com/system/shows/images/eb5/efa/53-/large/fokus-podden.png",
      "duration": 2819,
      "isExplicit": false,
      "episodeType": "full",
      "contentType": "audio/mpeg",
      "contentLength": 45119702,
      "publishDate": "2023-05-29T12:17:49.000Z",
      "isLocked": false,
      "isSesamy": false,
      "isSample": false,
      "permissions": []
    }
  ],
  "products": [],
  "categories": [],
  "sesamy": {
    "vendorId": "test-fokus",
    "isPrivate": false
  }
}
```

**Example:**

```javascript
// Open a checkout for an article
sesamy.parsePodcast("https://feed.sesamy.com/sid:2QNn9E1brlrKDGAf-lOY-");
```
