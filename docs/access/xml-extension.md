---
sidebar_position: 2
---

# XML Extension

Sesamy access uses the Access XML extention for both reading and writing RSS.

With the Pod Access extension it is possible to declare which episodes are locked and which products they are part of. It is also possible to declare feed level settings and behaviours.

## Usage

The Access tags can be applied both on a feed level and for individual episodes.

## Channel level tags

The following tags are supported on the channel level:

- Product

Below is an example of a channel tag with the podaccess tags:

```xml
<channel>
    <access:product price="13" currency="SEK" guid="ffe1ee6e-b59b-4187-9811-b3f9a6e07d75">
        <title>Season 1<title>
        <description>
            <p>A description about the first season</p>
        </description>
        <link>https://sesamy.com/products/...</link>
    </access:product>
```

## Epsisode level tags

The access-item tag is a superset of the rss item tag, but with extra properties to handle monetization.

Below is an example of the access-item tag:

```xml
<channel>
    <access:access-item locked="true" price="13" currency="SEK" productIds="4b9c10c3-992a-4fbb-b468-2f5c4955dd9c|ffe1ee6e-b59b-4187-9811-b3f9a6e07d75">
        <guid isPermaLink="false">25094780-d6fa-4772-b47e-0e30edaebd00</guid>
        ...
    </access:access-item>
    ...
<channel>
```
