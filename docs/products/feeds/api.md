---
sidebar_position: 2
---

# Creating a Private Podcast Feed with the Sesamy API

In this article, we will guide you on how to create a private podcast feed for a user using the Sesamy API. Sesamy API allows publishers to seamlessly integrate their systems and create personalized, private podcast feeds based on the user's email address. This includes steps to fetch a Sesamy user ID from an email, check the user's access to a specific podcast, fetch a private feed link, parse the podcast episodes, and finally, present a subscription page for the user.

## Step 1: Fetch the API token

Before we begin, we need to fetch the API token. This token is crucial for authenticating your requests to the Sesamy API.

To fetch your API token, use the following command:

```bash
curl --location 'https://token.sesamy.com/oauth/token' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'client_id={clientId}' \
--data-urlencode 'client_secret={clientSecret}' \
--data-urlencode 'grant_type=client_credentials' \
--data-urlencode 'scope=vault:impersonate profile:user:read'
```

This should return the access token like this:

```json
{"access_token":"{token}","token_type":"Bearer","scope":"vault:impersonate profile:user:read","expires_in":86400}
```

## Step 2: Get the Sesamy user id for an email

This involves calling the Sesamy API to convert a user's email address into a user ID. The Sesamy user ID is required to interact with other parts of the API.

API endpoint: `https://api.sesamy.com/profile/email/{email}`

Replace `{email}` with the user's email address. 

```bash
curl --location 'https://api.sesamy.com/profile/email/{email}?forceCreation=true' \
--header 'Authorization: Bearer {token}'
```

You should get a JSON response that includes the user's Sesamy ID, like so:

```json
{
    "id":"email|647de5a1450917dcafaaa30b",
    "userId":"email|647de5a1450917dcafaaa30b","hasPrimaryAddress":false
}
```

## Step 3: Check if the user has access to a podcast

Call the Sesamy API with the user's Sesamy ID to check whether they have access to a specific podcast:

Replace `{userId}` with the user's Sesamy ID and `{sku}` with the product ID of your podcast. The `{onboardingOriginId}` will be provided by Sesamy support.

```bash
curl --location 'https://api.sesamy.com/vault/entitlements/auto-onboard' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {token}' \
--data '{
    "onboardingOriginId": "{onboardingOriginId}",
    "userId": "{userId}",
    "sku": "{sku}",
    "origin": "EXTERNAL"
}'
```

You will get a JSON response which tells whether the user has access:

```json
[{
	"entitlementId":"{entitlementId}",
	"userId":"{userId}",
	"purchaseOptionId":"0ip8NvvStgz9eqL1YpX-Q",
	"purchaseOptionData":{
		"title":"Title",
		"description":"description",
		"purchaseType":"OWN"
	},
	"sku":"sid:2QNn9E1brlrKDGAf-lOY-",
	"title":"Title",
	...
}]
```

If the user has access and has previosly linked their Spotify account with Sesamy this call will also unlock the Podcast in Spotify

## Step 3: Fetch a link to a private feed for the user

After confirming that the user has access to the podcast, fetch a private feed link that the user can use to open the podcast in Apple Podcasts or other podcatchers:

```bash
curl --location 'https://api.sesamy.com/vault/entitlements/{entitlementId}/access?userId={userId}&format=RSS' \
--header 'Authorization: Bearer {token}'
```

The response will be a JSON object containing a unique URL for the user to access the podcast:

```json
[
    {
        "title": "Title",
        "filename": "sid:2QNn9E1brlrKDGAf-lOY-_private.rss",
        "id": "{id}",
        "url": "{privateFeedUrl}",
        "mimeType": "application/rss+xml",
        "type": "feed"
    }
]
```

## Step 4: Parse the podcast episodes

Once you have the URL, you can parse the episodes from the podcast using Sesamy's parser service:
```bash
curl -X GET "https://parser.sesamy.com/rss?url={privateFeedUrl}&format=sesamy"
```

The parser service will return the parsed podcast data.

## Step 5: Show a subscription page

You can use the Sesamy's consume service to show a subscription page where the user can choose to open the podcast in a podcatcher or in Spotify:
```bash
curl -X GET "https://consume.sesamy.com/sv?rss={pfivateFeedUrl}"
```

That's it! Following these steps will allow a publisher to create a private podcast feed for a user using the Sesamy API. Remember to replace the placeholders with your actual data and your Sesamy API key. 

Note: This assumes that your Sesamy API key has the necessary permissions to perform these actions. If not, you may need to contact Sesamy support.