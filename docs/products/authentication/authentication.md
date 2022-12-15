---
sidebar_position: 1
---

# Getting Started

Sesamy authentication service is an easy and secure way to add user management to any app or website. The user accounts are common for all websites using the Sesamy Authentication making it easier for the customers to get started with a new service.

## For Publishers

The recommennded way of adding authentication and user management to a website is to simply add the our login web components:

```html
<html>
  <body>
    <sesamy-login client-id="demo"></sesamy-login>

    <script
      type="module"
      src="https://assets.sesamy.com/scripts/web-components/sesamy-login.min.js"
    ></script>
  </body>
</html>
```

This webcomponent will add a login button that handles the login flow and displays the logged in user. Contact Sesamy Support to register a client ID and whitelist the website domains.

It is also possible to integrate the authentication using standard oauth2 API's, both with implict for flow SPA's and authorization code flow for servers.

Each publisher is sandboxed ensuring that the publishers only can access the customers purchases and interactions related to their own content.

## For Distributors

A content distributor can use the authentication service to integrate with other services on behalf of the users. An example would be making podcasts available in the Spotify app.
