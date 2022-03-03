---
sidebar_position: 3
---

# Description Fallback

As many podcast hosting services doesn't support the access XML tags there's a fallback to add the same information in the episode descriptions.

## Usage

The data is added anywhere in the description of a channel or an episode as a JSON object and work very similar to how the XML tags work.

## Channel level tags

Below is an example of a channel tag with the podaccess data in the description:

```xml
<channel>
    <description>
        A description of a show ending with a new line.
        {"access":
            {
                "price": 13,
                "currency": "SEK"
                "guid": "ffe1ee6e-b59b-4187-9811-b3f9a6e07d75"
            }
        }
        It is also possible to add a description at the end as long as it's on a separate line
    </description>
```

## Epsisode level tags

The access-item tag is a superset of the rss item tag, but with extra properties to handle monetization.

Below is an example of the access-item tag:

```xml
<channel>
    <item>
        <guid isPermaLink="false">25094780-d6fa-4772-b47e-0e30edaebd00</guid>
        <description>
            A description of an episode ending with a new line.
            {"access":
                {
                    "price": 13,
                    "currency": "SEK"
                    "productIds": ["4b9c10c3-992a-4fbb-b468-2f5c4955dd9c","ffe1ee6e-b59b-4187-9811-b3f9a6e07d75"]
                }
            }
            It is also possible to add a description at the end as long as it's on a separate line
        </description>
        ...
    </item>
    ...
<channel>
```
