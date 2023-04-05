---
sidebar_position: 3
---

# Podcast App Integration

Sesamy supports integration of locked podcasts with any rss compliant podcasts app. This way the users can consume the locked content in their podcast app of choice and doesn't have to add a new app to access the content. With the solution you also get better data about your listeners and their listening habits.

## How it works

There are two ways the users can access the locked content in the podcast app:

- The user can open the podcast app from your website using the [Sesamy Entitlements Web Component](/docs/product/web-components/library/sesamy-entitlements)
- The user can follow a link the locked podcast from the description of the podcast in the podcast app. Some apps, such as overcast, also provides a support or purchase button in the podcast app.

When a user unlocks a premium podcast in the Podcast app by clicking a link, the user will be authenticated either in Sesamy or directly by the publisher. After the authentication Sesamy will validate if the user has a valid subscription and if so, the user will be presented with a dialog where they can open the unlocked feed the podcast app.

If the user does not have a valid subscription, the user will be redirected to a checkout page or to the publihser's website.

![podcast-app-flow](/img/podcasts/podcast-app-flow.png)
