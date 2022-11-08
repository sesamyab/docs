---
sidebar_position: 2
---

# Implicit Grant

With the implicit grant flow the user is redirected from the login form to the publishers website with the token passed as query string.

A implicit authentciation flow is initiated by redirecting the user to the login service:

```
https://login.sesamy.com/authorize?client_id=YOUR_CLIENT_ID&response_type=token&scope=openid&state=STATE&redirect_uri=REDIRECT_URI
```

The following query properties are available:

- client_id (required)
- response_type (required). Needs to be set to token.
- scope (required). A set of scopes that the generating token will have. See [scopes](/docs//authentication/scopes.md) for more info.
- redirect_uri (required). The url where the user will be redirected once the authentication is completed.
- state (optional). Pass a state that will be returned in the redirect querystring.

Once a user is authenticated the user will be redirected back to the specified redirect_uri with the token and expires_in as additional query string parameters:

```
https://example.com/some-page?token=ACCESS_TOKEN&expires_in=86000
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

The generated token is valid for 24 hours.
