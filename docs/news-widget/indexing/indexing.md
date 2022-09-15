---
sidebar_position: 1
---

# Indexing

In order to sell a news artcile it needs to be added to the Sesamy product catalog. This is done by indexing content metadata from the publishers website.

There are three solutions for indexing content:

- Webhooks. Update a single article directly
- Sitemaps. Updates all content on a regular basis
- Checkout. Adding a new article to the checkout it will index the artile and cache the metadata

## Webhooks

An article can be queued for indexing by making a POST request with the url of the article as parameters:

```
POST https://api.sesamy.com/suppliers/hooks/article/sesamy/VENDOR_ID
Content-Type: application/json

{
    "url": "ARTICLE_URL"
}
```

The following query parameters are available:

- vendor_id (required)

The following body properties are available:

- url (required)

The request will return the following response:

```
HTTP/1.1 200 OK
Content-Type: text/plain

OK
```

## Sitemaps

The sitemap of the publisher website will be indexed on a schedule and any new or updated article will be synced to the catalog

## Checkout

If a customer adds an article to the checkout which isn't in the Sesamy product catalog it will be indexed as part of the checkout process.
