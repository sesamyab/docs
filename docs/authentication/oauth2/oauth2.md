---
sidebar_position: 1
---

# Oauth 2

OAuth is an open standard to authorization. OAuth provides client applications a ‘secure delegated access’ to server resources on behalf of a resource owner. It specifies a process for resource owners to authorize third-party access to their server resources without sharing their credentials.

A technical specification of OAuth 2.0 is described in the standard [RFC 6749](https://datatracker.ietf.org/doc/html/rfc6749). A non-technical simple specification is given in this guide and Wikipedia.

## Grant types

The services supports three different grant types:

- Implicit Grant. Used for single page applications and web components.
- Code Grant. Used for web servers, apps and integrations.
- Client Credentials. User for services and not for requests on behalf of a user.

## State

When creating Oauth2 requests it's possiblet to pass a state to the request which serves two functions. When the user is redirected back to your app, whatever value you include as the state will also be included in the redirect. This gives your app a chance to persist data between the user being directed to the authorization server and back again, such as using the state parameter as a session key. This may be used to indicate what action in the app to perform after authorization is complete, for example, indicating which of your app’s pages to redirect to after authorization.

The state parameter also serves as a CSRF protection mechanism if it contains a random value per request. When the user is redirected back to your app, double check that the state value matches what you set it to originally.
