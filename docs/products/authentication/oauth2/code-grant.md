---
sidebar_position: 3
---

# Code Grant

The code grant flow works similar to the [implicit grant flow](/docs/products/authentication/oauth2/implicit-grant.md), but instead of returning the access token directly to the browser a code is returned. This code can be resolved to a token using the client_secret.

A authorization code grant flow is initiated by redirecting the user to the login service:

```
https://login.sesamy.com/authorize?client_id=YOUR_CLIENT_ID&response_type=code&scope=openid&state=STATE&redirect_uri=REDIRECT_URI
```

The following query properties are available:

- client_id (required)
- response_type (required). Needs to be set to code.
- scope (required). A set of scopes that the generating token will have. See [scopes](/docs/products/authentication/scopes.md) for more info.
- redirect_uri (required). The url where the user will be redirected once the authentication is completed.
- state (optional). Pass a state that will be returned in the redirect querystring.

Once a user is authenticated the user will be redirected back to the specified redirect_uri with the code as additional query string parameters:

```
https://example.com/some-page?code=AUTHORIZATION_CODE
```

The code is valid for 15 minutes and can only be used once.

## Exchange authorization code for an access token

To exchange the authorization code for an access token, the app makes a POST request to the token endpoint:

```
POST https://token.sesamy.com/oauth/token
Content-Type: application/x-www-form-urlencoded

client_id=YOUR_CLIENT_ID&client_secret=YOUR_CLIENT_SECRET&code=CODE&grant_type=authorization_code
```

The request will return the following response:

```
HTTP/1.1 200 OK
Content-Type: application/json
{
  "access_token":"eyJz93a...k4laUWw",
  "token_type":"Bearer",
  "expires_in":86400
}
```
