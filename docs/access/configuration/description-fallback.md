---
sidebar_position: 3
---

# Description Fallback

As many podcast hosting services doesn't support the access XML tags there's a fallback to add the same information in the episode descriptions.

The syntax used is very similar to markdown and the goal is to make it as easy to write by hand as possible

## Usage

The data is added anywhere in the description of a channel or an episode as a JSON object and work very similar to how the XML tags work.

## Channel level tags

Below is an example of a channel tag with the access data in the description:

```xml
<channel>
    <description>
        Some text that will be visible in the description

        # Products

        ## Subscription

        - Id: subscription
        - Price: 9 EUR
        - Type: Recurring

        Some text describing the subscription product

        ## A special episode

        - Id: special-episode
        - Price: 2 EUR
        - Type: Single Purchase

        Another text describing this episode

    </description>
```

## Episode level tags

The episode contains a product tag that links it to one or more of the products defined in the channel description.

Below is an example of the access-item tag:

```xml
<channel>
    <item>
        <guid isPermaLink="false">25094780-d6fa-4772-b47e-0e30edaebd00</guid>
        <description>
            A description of an episode ending with a new line.

            # Products

            ## A special episode

            - Id: special-episode
        </description>
        ...
    </item>
    ...
<channel>
```
