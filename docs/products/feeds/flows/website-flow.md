---
sidebar_position: 4
---

# Website Flow

The users can listen to locked podcasts directly on the publishers website using the private feeds and the [podcast parsing API](/docs/products/web-components/javascript-api.md).

If the publisher uses the Sesamy authentication they can use the `getAccess` api to get the url of the private feed and then pass it to the `parsePodcast` api to get the show and episodes in a json format. There is currently now web component avaialble to render the podcast episodes.
