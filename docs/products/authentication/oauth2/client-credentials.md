---
sidebar_position: 4
---

# Client Credentials

The Client Credentials grant is used when applications request an access token to access their own resources, not on behalf of a user.

A client can retrieve an access token by making a POST request to the token endpoint:

```
POST https://token.sesamy.com/oauth/token
Content-Type: application/x-www-form-urlencoded

client_id=YOUR_CLIENT_ID&client_secret=YOUR_CLIENT_SECRET&scope=SCOPES&grant_type=client_credentials
```

The following query properties are available:

- client_id (required)
- client_secret (required)
- grant_type (required). Needs to be set to client_credentials.
- scope (required). A set of scopes that the generating token will have. See [scopes](/docs/products/authentication/scopes.md) for more info.

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
