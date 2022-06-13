---
sidebar_position: 2
---

# XML Extension

Sesamy access uses the Access XML extention for both reading and writing RSS.

With the Access extension it is possible to declare which episodes are locked and which products they are part of. It is also possible to declare feed level settings and behaviours.

The sesamy namespace has to be added as a property in the rss element:

```xml
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd" xmlns:media="http://search.yahoo.com/mrss/" xmlns:sesamy="http://schemas.sesamy.com/feed/1.0">
  <channel>
```

## Usage

The Access tags can be applied both on a feed level and for individual episodes.

## Channel level tags

The following tags are supported on the channel level:

- Product. Specifies the different products available for the current feed
- FeedId. A unique ID for the feed
- Private. If this is a user unique feed with the values `yes` or `no`
- VendorId. The unique ID for the publisher

Below is an example of a channel tag with the tags:

```xml
<channel>
    <sesamy:feed-id>sid:mgfbtQAeItFHCrvMem9i3</sesamy:feed-id>
    <sesamy:vendor-id>sid:mgfbtQAeItFHCrvMem9i3</sesamy:vendor-id>
    <sesamy:private>no</sesamy:private>
    <sesamy:product>
        <id>ffe1ee6e-b59b-4187-9811-b3f9a6e07d75</id>
        <title>Season 1<title>
        <price>13</price>
        <currency>SEK</currency>
        <description>
            <![CDATA[<p>A description about the first season</p>]]>
        </description>
        <type>Single Purchase</type>
        <link>https://sesamy.com/products/...</link>
    </sesamy:product>
```

## Episode level tags

The sesamy-item tag is a superset of the rss item tag, but with extra properties to handle unlocking of content.

The sesamy item has the following attributes:

- Locked. Specifies if the episode is locked with the values `true` or `false`
- Sample. Specifies if the episode is a sample and with the values `true` or `false`
- Permissions. A concatinated list of the valid permissions that can unlock the episode, using a `|` as separator.

Below is an example of the access-item tag:

```xml
<channel>
    <sesamy:sesamy-item locked="true" sample="false" permissions="4b9c10c3-992a-4fbb-b468-2f5c4955dd9c|ffe1ee6e-b59b-4187-9811-b3f9a6e07d75">
        <guid isPermaLink="false">25094780-d6fa-4772-b47e-0e30edaebd00</guid>
        ...
    </access:access-item>
    ...
<channel>
```
