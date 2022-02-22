---
sidebar_position: 1
---

# Configuration

The Sesamy Access service can be configured in a variaty of ways depending on how the premium content is stored and if Sesamy Access is serving the public feed.

## Proxy Mode

In proxy mode the Access service put in front of another hosting service and the public feed is served through Sesamy. This is the most flexible setup as it's possible to for instance delay public access to episodes independent of the current hosting platforms capabilities.

As Sesamy Access has access to the complete feed it can also generate any private feeds without any futher configuration.

The product and pricing information can either be added to the source feed using [xml](/docs/access/xml-extension) of the [description fields](/docs/access/description-fallback)

Existing feeds public feeds needs to be redirected to the Sesamy Access public feed.

It is important that the url of the source feeds are not made publically available since they will contain premium content.

## Hosting integration

If the current hosting service is comaptible with Sesamy Access the proxy mode can be enabled within the hosting service without redirect the public feed. With hosting integration there's also no risk of exposing premium content as there's no public feed containing all content.

## Private feed only

If none of the options above are possible due to the current hosting service it is also possible to only deliver the private feeds with Sesamy Access. In this case the private content needs to be made available in a separate feed and can be blended with the episodes in the public feed.

As the public feed isn't updated by Sesamy there's no automatic way to add links in the feed to the Sesamy Checkout and these links have to be manually added in the description fields and in the audio files.
