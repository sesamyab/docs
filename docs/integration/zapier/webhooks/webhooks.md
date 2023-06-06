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
            contactEmail: 'zapier@sesamy.com'
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
            contactEmail: 'zapier@sesamy.com'
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

### Vendor User Subscription Ended

Subscribe to this event if you want to synchronize data each time a user subscription is ended. The reason for the ending can be obtained on the status field:

- CANCELED: The subscription has been canceled either by refunding the purchase or by user request.
- EXPIRED: The subscription has expired. This happens when the subscription payment fails so the subscription is not automatically renewed.
- DELETED: A subscription has been deleted by Sesamy due to technical reasons.

Select your vendor ID from the triggers list.

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
        },
        sku: '123-xyz',
        entitlementId: 'abc-xyz',
        purchaseOptionId: 'xyz-567',
        title: 'Yearly subscription',
        description: 'A yearly subscription...',
        productType: 'bundle',
        status: 'CANCELED', // CANCELED EXPIRED or DELETED
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
        contactEmail: 'zapier@sesamy.com'
    },
}
```

### Vendor User Signed Up

Subscribe to this event if you want to synchronize data each time an user signs up to your platform. This trigger will only trigger once when a user signs up and may not contain all user selected settings like address or the accepted terms and conditions date (those are show to the user after he/she signs up). To get that data and keep it up to date please listen to the trigger "Vendor User Created Or Updated" below.

Sample hook payload:

```
{
    acceptedTCVersion: '2022-11-08T12:49:11.190Z',
    newsletters: { newsletterX: true },
    mobilePhone: '699000111222',
    user: {
        userId: '123',
        firstName: 'Bob',
        lastName: 'James',
        email: 'zapier@sesamy.com',
        contactEmail: 'zapier@sesamy.com',
    },
    deliveryAddress: {
        firstName: 'Lucas',
        lastName: 'James',
        addressLineOne: 'Bergsjösvängen 1',
        addressLineTwo: '',
        zip: '41560',
        city: 'Göteborg',
        country: 'SE',
    },
    billingAddress: {
        firstName: 'Lucas',
        lastName: 'James',
        addressLineOne: 'Bergsjösvängen 1',
        addressLineTwo: '',
        zip: '41560',
        city: 'Göteborg',
        country: 'SE',
    },
    businessDetails: {
        companyName: 'X Company',
        vatNr: '1234'
    }
}
```

### Vendor User Created Or Updated

Subscribe to this event if you want to synchronize data each time an user is created or updated. For example when a user signs up, he/she may latter set some extra settings like address or accept the terms and conditions durning the checkout process. So if you want to have the full user's data in sync you need to use this endpoint and keep your user up to date.

Sample hook payload:

```
{
    acceptedTCVersion: '2022-11-08T12:49:11.190Z',
    newsletters: { newsletterX: true },
    mobilePhone: '699000111222',
    user: {
        userId: '123',
        firstName: 'Bob',
        lastName: 'James',
        email: 'zapier@sesamy.com',
        contactEmail: 'zapier@sesamy.com'
    },
    deliveryAddress: {
        firstName: 'Lucas',
        lastName: 'James',
        addressLineOne: 'Bergsjösvängen 1',
        addressLineTwo: '',
        zip: '41560',
        city: 'Göteborg',
        country: 'SE',
    },
    billingAddress: {
        firstName: 'Lucas',
        lastName: 'James',
        addressLineOne: 'Bergsjösvängen 1',
        addressLineTwo: '',
        zip: '41560',
        city: 'Göteborg',
        country: 'SE',
    },
    businessDetails: {
        companyName: 'X Company',
        vatNr: '1234'
    }
}
```
