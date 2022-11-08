---
sidebar_position: 2
---

# Scopes

When creating a new user session it is possible to specify what the user will be able to access during this session by requesting various scopes.

These are the scopes currently available:

- openid (required), the users identity
- email, the users email
- profile, the user name
- offline_access, provides a refresh token which is used to keep the user session open for longer than one day
- vault:self, grants access to read the users entitlements

It is only possible to request the scopes that have been allowed for a specific client.
