---
sidebar_position: 1
---

# Zapier Webhooks

Sesamy's integrates with Zapier and allows you to listen to certain events that you can use to synchronize data with hundreds of third party services like MailChimp, Slack or Gmail.

## We support the following events

You can find the full list of events when you create a Zap https://zapier.com/app/zaps

### User Checkout Completed

Subscribe to this event if you want to synchronize data each time you buy an item on the Sesamy Checkout.

Filtering parameters:

- Min total price (Optional): The event will be sent only if the price is above the amount
- Max total price (Optional): The event will be sent only if the price is below the amount

Sample hook payload:

```
{
    checkoutId: 'abc-xyz',
    totalPrice: 100,
    currency: 'SEK',
}
```

### User Entitlement Created

Subscribe to this event if you want to synchronize data each time an entitlement (book, podcast or article) is assigned to your Sesamy account.

Filtering parameters:

- Product Type (Optional): The event will be sent only if the product type matches (Audiobook, E-book, Article)
- Origin (Optional): The event will be sent only if the origin matches (Checkout)

Sample hook payload:

```
{
    userId: 'xyz-123',
    entitlementId: 'xyz-456',
    productType: 'ebook',
    sku: 'xyz-789',
    purchaseOptionId: 'xyz-567',
    supplierId: 'xyz-568',
    origin: 'CHECKOUT',
    originId: 'xyz-568',
    status: 'VALID',
}
```

### Vendor User Checkout Completed

Subscribe to this event if you want to synchronize data each time a user coming from your vendor platform buys an item on the Sesamy Checkout.

Filtering parameters:

- User Id (Optional): The event will be sent only if the user id matches
- Min total price (Optional): The event will be sent only if the price is above the amount
- Max total price (Optional): The event will be sent only if the price is below the amount

Sample hook payload:

```
{
    checkoutId: 'abc-xyz',
    totalPrice: 100,
    currency: 'SEK',
    createdAt: '2022-11-08T12:49:11.190Z',
    user: {
        userId: '123',
        firstName: 'Bob',
        lastName: 'James',
        email: 'zapier@sesamy.com',
        contactEmail: 'zapier@sesamy.com',
        primaryAddress: {
            firstName: 'Lucas',
            lastName: 'James',
            addressLineOne: 'Bergsjösvängen 1',
            addressLineTwo: '',
            zip: '41560',
            city: 'Göteborg',
            country: 'SE',
        },
    },
}
```

### Vendor User Entitlement Created

Subscribe to this event if you want to synchronize data each time an entitlement (book, podcast or article) is assigned to one of your vendor user's Sesamy account.

Filtering parameters:

- Product Type (Optional): The event will be sent only if the product type matches (Audiobook, E-book, Article)
- Origin (Optional): The event will be sent only if the origin matches (Checkout)

Sample hook payload:

```
{
    userId: 'xyz-123',
    entitlementId: 'xyz-456',
    productType: 'ebook',
    sku: 'xyz-789',
    purchaseOptionId: 'xyz-567',
    supplierId: 'xyz-568',
    origin: 'CHECKOUT',
    originId: 'xyz-568',
    status: 'VALID',
    createdAt: '2022-11-08T12:49:11.190Z',
    user: {
        userId: '123',
        firstName: 'Bob',
        lastName: 'James',
        email: 'zapier@sesamy.com',
        contactEmail: 'zapier@sesamy.com',
        primaryAddress: {
            firstName: 'Lucas',
            lastName: 'James',
            addressLineOne: 'Bergsjösvängen 1',
            addressLineTwo: '',
            zip: '41560',
            city: 'Göteborg',
            country: 'SE',
        },
    },
}
```

### Vendor User Signed Up

Subscribe to this event if you want to synchronize data each time an user signs up to your platform.

Sample hook payload:

```
{
    acceptedTCVersion: '2022-11-08T12:49:11.190Z',
    user: {
        userId: '123',
        firstName: 'Bob',
        lastName: 'James',
        email: 'zapier@sesamy.com',
        contactEmail: 'zapier@sesamy.com',
        primaryAddress: {
            firstName: 'Lucas',
            lastName: 'James',
            addressLineOne: 'Bergsjösvängen 1',
            addressLineTwo: '',
            zip: '41560',
            city: 'Göteborg',
            country: 'SE',
        },
    },
}
```
