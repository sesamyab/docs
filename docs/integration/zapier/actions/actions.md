---
sidebar_position: 1
---

# Zapier Actions

Sesamy's integrates with Zapier and allows you to send certain information from hundreds of third party services like Spreadsheets, Slack or Gmail.

## We support the following actions

You can find the full list of actions when you create a Zap https://zapier.com/app/zaps

### External Purchase

This action will allow you to synchronize your system's purchases with the Sesamy platform.

- Source: (Required) The first step is to create an external source from the Sesamy Portal. Must be type 'HOOK'. This source will appear in the Zap dropdown options.
- vendorId: (Required) You have to select the vendor ID from the dropdown vendors list.
- publisherPurchaseId: (Optional) If you send a purchase ID we will store it so you can match it against your system's data.
- sku & poId: (Required) Either send the product SKU and purchase option Id or send a productId
- productId: (Required) If you do not send the product ID you must send sku & poId. To use this option you must have defined the product mapping first.
- startsAt: (Required) Optional subscription's start date
- endsAt: (Optional) Subscription's end date
- firstName: (Optional) Customer first name
- lastName: (Optional) Customer last name
- email: (Optional) Customer email
- userId: (Optional) Customer's sesamy userId
- publisherUserId: (Optional) If you send a publisher user ID we will store it so you can match it against your system's data.
- notes: (Optional) Notes about this purchase
- Delivery address fields: (Optional) A delivery address
- Billing address fields: (Optional) A billing address

Sample hook payload:

```
{
    source: 'sesamy-source-id-1234',
    vendorId: 'vendor-id-1234',
    publisherPurchaseId: 'purchase-id-1234',
    sku: '1234',
    poId: '1234',
    startsAt: '2022-11-08T12:49:11.190Z',
    endsAt: '2022-12-08T12:49:11.190Z',
    firstName: 'John',
    lastName: 'James',
    email: 'zapier@sesamy.com',
    userId: '1234',
    publisherUserId: 'user-id-1234',
    notes: 'Note..',
    productId: 'product-1234',
    deliveryAddressFirstName: 'John',
    deliveryAddressLastName: 'James',
    deliveryAddressCo: '',
    deliveryAddressStreet: 'Sveavägen 59',
    deliveryAddressCity: 'Stockholm',
    deliveryAddressZip: '113 59',
    deliveryAddressCountry: 'SE',
    billingAddressFirstName: 'John',
    billingAddressLastName: 'James',
    billingAddressCo: '',
    billingAddressStreet: 'Sveavägen 59',
    billingAddressCity: 'Stockholm',
    billingAddressZip: '113 59',
    billingAddressCountry: 'SE',
}
```
