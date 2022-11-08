---
sidebar_position: 2
---

# Meta Tags

When a new article or post is created it is added to the catalog of products either by using the meta tags of the page or the `sesamy-content-data` tag.

These tags are required to create a valid product: `title`, `description`, `image`, `price` and `currency`.

In addition, there are optional fields that for instance can be used to create subscriptions.

The fields are fetched with fallback so for instance the `title` field is fetched from the `sesamy:title` meta tag if available. If it isn't available it falls back to the `og:title` meta tag and so on.

## Required Fields

### `title`

1. `sesamy:title` meta tag

```html
<meta property="sesamy:title" content="any title" />
```

2. `og:title` meta tag

```html
<meta property="og:title" content="any title" />
```

3. <title\> tag

```html
<title>any title</title>
```

4. First <H1\> found

```html
<h1>any title</h1>
```

### `description`

1. `sesamy:description` meta tag

```html
<meta property="sesamy:description" content="any description" />
```

2. `og:description` meta tag

```html
<meta property="og:description" content="any description" />
```

3. `description` meta tag

```html
<meta property="description" content="any description" />
```

### `image`

1. `sesamy:image` meta tag

```html
<meta property="sesamy:image" content="[IMAGE_URL]" />
```

2. `og:image` meta tag

```html
<meta property="og:image" content="[IMAGE_URL]" />
```

3. `image` meta tag

```html
<meta property="image" content="[IMAGE_URL]" />
```

### `price`

1. `sesamy:price` meta tag

```html
<meta property="sesamy:price" content="10" />
```

2. `og:price` meta tag

```html
<meta property="og:price" content="10" />
```

3. `price` meta tag

```html
<meta property="price" content="10" />
```

### `currency` (`DKK`, `EUR` and `SEK`)

1. `sesamy:currency` meta tag

```html
<meta property="sesamy:currency" content="EUR" />
```

2. `og:currency` meta tag

```html
<meta property="og:currency" content="EUR" />
```

3. `currency` meta tag

```html
<meta property="currency" content="EUR" />
```

## Optional Fields

### Section / Category

1. `sesamy:section` meta tag is used to specify the category of a given article.

```html
<meta property="sesamy:section" content="Technology" />
```

2. `article:section` meta tag according to the Opengraph Standard

```html
<meta property="article:section" content="Technology" />
```

### Tags

1. `sesamy:tag` meta tag, multiple of these tags can be used to specify several tags.

```html
<meta property="sesamy:tag" content="Technology" />
```

```html
<meta property="sesamy:tag" content="Technology" />
<meta property="sesamy:tag" content="Apple" />
<meta property="sesamy:tag" content="Iphone" />
```

2. `article:tag` meta tag according to the Opengraph Standard, this can be used multiple times to specify several tags.

```html
<meta property="article:tag" content="Technology" />
```

```html
<meta property="article:tag" content="Technology" />
<meta property="article:tag" content="Apple" />
<meta property="article:tag" content="Iphone" />
```

### Publish date and time

1. `sesamy:published_time` meta tag is used to specify the date and time when the article was published. Ex: `2022-10-31T20:30:02Z`

```html
<meta property="sesamy:published_time" content="2022-10-31T20:30:02Z" />
```

2. `article:published_time` meta tag according to the Opengraph Standard

```html
<meta property="article:published_time" content="2022-10-31T20:30:02Z" />
```

### Product Type

The default value is `SINGLE_PAYMENT`

1. `sesamy:product-type` meta tag

```html
<meta property="sesamy:product-type" content="[SINGLE_PAYMENT | RECURRING]" />
```

### Client ID

The client id used for [Sesamy Authentication](/docs/products/authentication)

1. `sesamy:client-id` meta tag

```html
<meta property="sesamy:client-id" content="[CLIENT_ID]" />
```

### Publisher Content ID

The publisher ID for the content. Indexed and passed back to the website when [unlocking content](/docs/integration/CMS/unlocking-content.md)

1. `sesamy:publisher-content-id` meta tag

```html
<meta property="sesamy:publisher-content-id" content="[PUBLISHER_CONTENT_ID]" />
```
