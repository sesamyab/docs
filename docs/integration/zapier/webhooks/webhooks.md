---
sidebar_position: 1
---

# Zapier Webhooks

Sesamy's integrates with Zapier and allows you to listen to certain events that you can use to synchronize data with hundreds of third party services like MailChimp, Slack or Gmail.

# How to setup Zapier Events

1 - Go to https://zapier.com and create an account (or log into your existing account).

2 - Go to create a new Zap and search for the Sesamy App.

![more-block](/img/zapier/webhooks/webhooks-1.png)

3 - Select the event you want to listen to.

![more-block](/img/zapier/webhooks/webhooks-2.png)

4 - Connect your Zapier account to the App.

![more-block](/img/zapier/webhooks/webhooks-3.png)

5 - On the Trigger tab, fill the filtering fields (More details on each event later)

![more-block](/img/zapier/webhooks/webhooks-4.png)

6 - Click on Test to test the trigger and get a sample response.

![more-block](/img/zapier/webhooks/webhooks-5.png)

![more-block](/img/zapier/webhooks/webhooks-6.png)

7 - Select the tool you want to integrate to. Each tool will have each own setup steps.

![more-block](/img/zapier/webhooks/webhooks-7.png)

8 - You are all set! Each time an event is triggered the data will be synchronized between Sesamy and the tool you selected.

## We support the following events

You can find the full list of events when you create a Zap https://zapier.com/app/zaps

### Vendor User Subscription Created

Subscribe to this event if you want to synchronize data each time a user purchases a subscription. Select your vendor ID from the triggers list.

![more-block](/img/zapier/webhooks/subscription-created.png)

Sample hook payload:

```
{
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
        sku: '123-xyz',
        entitlementId: 'abc-xyz',
        purchaseOptionId: 'xyz-567',
        title: 'Yearly subscription',
        description: 'A yearly subscription...',
        productType: 'bundle',
        status: 'active',
      }
```

### Vendor User Subscription Updated

Subscribe to this event if you want to synchronize data each time a user subscription is updated (it's status changes). Select your vendor ID from the triggers list.

![more-block](/img/zapier/webhooks/subscription-updated.png)

Sample hook payload:

```
{
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
        sku: '123-xyz',
        entitlementId: 'abc-xyz',
        purchaseOptionId: 'xyz-567',
        title: 'Yearly subscription',
        description: 'A yearly subscription...',
        productType: 'bundle',
        status: 'active',
      }
```

### Vendor User Subscription Canceled

Subscribe to this event if you want to synchronize data each time a user subscription is canceled (This includes status CANCELED (a user cancels but still has access until their subscription expires), EXPIRED and DELETED (user does not have access anymore). Select your vendor ID from the triggers list.

![more-block](/img/zapier/webhooks/subscription-canceled.png)

Sample hook payload:

```
{
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
        sku: '123-xyz',
        entitlementId: 'abc-xyz',
        purchaseOptionId: 'xyz-567',
        title: 'Yearly subscription',
        description: 'A yearly subscription...',
        productType: 'bundle',
        status: 'active',
      }
```

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

![more-block](/img/zapier/webhooks/vendor-checkout-completed.png)

Filtering parameters:

- Vendor Id (Required): Select your vendor ID from the list.
- Product Type (Optional): The event will be sent only if the product type matches (Audiobook, E-book, Article)

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
