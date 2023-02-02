---
sidebar_position: 1
---

# Wordpress Plugin

The wordpress plugin is a wrapper around the web components to offer user management, single purchase and subscriptions.

The latest version of the plugin is available here:
https://assets.sesamy.com/scripts/wordpress-sesamy/sesamy-wordpress.zip

## Pre Install Configuration

Before the plugin can be installed the follwing steps are required:

- Register a Sesamy client.
- Add a user as admin of the client.
- Whitelist the domain of the website for the Sesamy indexing service.

Contact support@sesamy.com with the information about the domain and the user.

## Configuration

Once the plugin is installed the Sesamy configuration page is available in the WordPress admin

![Sesamy Admin](/img/wordpress/wp-config.png)

- Client ID (required). Is provided by sesamy support.
- Content types. The content types for which the paywall will be applied.
- Lock mode. In which mode the paywall will be applied: SignedURL, Embed, Event or None.

## Lock Modes

There are different solutions for locking the content depending on the customer needs:

- SignedURL (default). The locked content is fetched on a per user basis from an API endpoint. This is the most secure option.
- Embed. The locked content is embedded on the public website. It is less secure but has SEO benefits as the entire content will be indexed by the search engines.
- Event. A custom event is emitted when the article is unlocked but the locked content is not rendered. This is for instance used for integrating with existing paywalls.
- None. No paywall is displayed and the the content of the article is not modifed, but an event is emitted if the article is unlocked.
