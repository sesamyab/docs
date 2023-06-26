---
sidebar_position: 2
---

# Creating Links

This article guides you on how to create links to the Sesamy checkout. The links will be used to direct users to a specific product checkout page, with various customization options available through query string parameters.

## Overview

The base URL for the Sesamy checkout is `https://checkout2.sesamy.com/`. This URL alone won't function properly without additional parameters that specify the details of the product and the client. These parameters are added to the URL as a query string. Here's an example URL with query string parameters:

```
https://checkout2.sesamy.com/?sku=sid:jWkwFiSIWsgNk26l-ksjd&option=VkPw-Um9wP88DgZ0e7mLu&lang=sv&redirect-url=https://example.com.se&client-id=<clientId>&discountCode=<discountCode>
```

This URL includes six parameters: `sku`, `option`, `lang`, `redirect-url`, `client-id`, and `discountCode`.

## Required Parameters

There are two required parameters you need to include in every Sesamy checkout URL:

- `client-id`: This identifies the publisher. Contact Sesamy support to get your client-id.
- `sku`: This is the "store keeping unit" with is the id of the product.

## Optional Parameters

In addition to the required parameters, there are several optional ones that you can use to customize the checkout experience:

- `option`: This specifies the variant of a product. For example, it could be used to denote whether a subscription is monthly or yearly, or to specify different podcast episodes in a podcast series. The purchase option id's are provided by Sesamy.
- `lang`: This is a two-letter language code that sets the language for the checkout page. If not specified, it defaults to the browser language.
- `discountCode`: This applies a discount code to the checkout.
- `redirect-url`: This specifies where the user will be redirected after a purchase is complete.
- `email`: This is the email of the user.

## Constructing a URL

Here's how you can construct a Sesamy checkout URL with these parameters:

1. Start with the base URL: `https://checkout2.sesamy.com/`
2. Add a question mark to start the query string: `https://checkout2.sesamy.com/?`
3. Add the `client-id` and `sku` parameters, separated by an ampersand (&):

```
https://checkout2.sesamy.com/?client-id=yourClientId&sku=yourSku
```

4. If you want to include optional parameters, continue adding them, separated by ampersands:

```
https://checkout2.sesamy.com/?client-id=yourClientId&sku=yourSku&option=yourOption&lang=sv&discountCode=yourDiscountCode&redirect-url=yourRedirectUrl&email=userEmail
```

Remember to replace `yourClientId`, `yourSku`, `yourOption`, `sv`, `yourDiscountCode`, `yourRedirectUrl`, and `userEmail` with your actual values.

And that's it! You've successfully created a Sesamy checkout URL. This will help guide your users to the correct product and enhance their checkout experience.
