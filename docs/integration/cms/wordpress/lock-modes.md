---
sidebar_position: 2
---

# Lock Modes

There are different solutions for locking the content depending on the customer needs:

- SignedURL (default). The locked content is fetched on a per user basis from an API endpoint. This is the most secure option.
- Embed. The locked content is embedded on the public website. It is less secure but has SEO benefits as the entire content will be indexed by the search engines.
- Encode. The locked content is embedded on the public website, but in a base64 format. It makes it harder for for instance adblockers or other tools to get access to the content by simply appying css rules.
- Event. A custom event is emitted when a user has access. This can be used to integrate with existing paywalls.
- None. The paywall is not rendered and the content is not hidden.
