---
sidebar_position: 2
---

# Lock Modes

There are different solutions for locking the content depending on the customer needs:

- SignedURL (default). The locked content is fetched on a per user basis from an API endpoint. This is the most secure option.
- Embed. The locked content is embedded on the public website. It is less secure but has SEO benefits as the entire content will be indexed by the search engines.
- Event. A custom event is emitted when a user has access. This can be used to integrate with existing paywalls.
- None. The paywall is not rendred and the content is not hidden.
