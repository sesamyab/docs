---
sidebar_position: 4
---

# Unlocking Content

When a user has purchased a post the unlocked content can be displayed using the `sesamy-content-container` component. The content can either be embedded directly on the page or fetched from the server using a signed url.

The signed url's can for instance be shared in a order confirmation email and renders a page without any further authentication. To avoid that the signed links are being distributed that have a limited expiery.

The signed url's requires that the cms hosting the content can validate the signature and serve the locked content for valid requests.

## Signed link validation

The links consists of four parts:

- Url of the content
- Optional information, such as the publishers content id
- Expire timestamp
- Signature of the previous parts of the url

This is a sample of a signed link:
`https://test.example.com/test-article?se=TIMESTAMP&si=PUBLISHER_CONTENT_ID&ss=RSA_256_HASH`

The `https://test.example.com/test-article` is the url of purchased article, `se=1656098737770` is the expire of the url and `ss=...` is the signature.

If a publisher provided a Publihser Content ID in the metatags this ID will also be passed as a `sp` querystring parameter in the signed link:
`https://test.example.com/test-article?sp=PUBLISHER_CONTENT_ID&se=TIMESTAMP&si=PUBLISHER_PRODUCT_ID&ss=RSA_256_HASH`

## Validation of the signature

The urls are signed with a `RSA256` asymetric key that can be verified with the public Sesamy key. The public key is published in a jwks-format here: `https://assets.sesamy.com/vault-jwks.json`

This is an example of how to verify the signed url in node-js with typescript:

```
import { verify, createPublicKey, KeyObject } from 'crypto';
import jwkToPem from 'jwk-to-pem';

async function fetchPublicKey() {
const response = await fetch('https://assets.sesamy.com/vault-jwks.json');

    if (!response.ok) {
        throw new Error('Failed to fetch public key');
    }

    return response.json();

}

async function getPublicKey() {
const jwks = await fetchPublicKey();

    const pemKey = jwkToPem(jwks);
    return createPublicKey(pemKey);

}

async function verifySignature(signedUrl: string) {
const publicKey = await getPublicKey();

    const [url, signature] = signedUrl.split('&ss=');
    if (!verify('RSA-SHA256', Buffer.from(url), publicKey, Buffer.from(signature, 'base64'))) {
        throw new Error('Signature not valid');
    }

}

```

This is an example of how to verify the signed url in php:

```
<?php

require __DIR__ . '/vendor/autoload.php';

use Jose\Component\Core\JWK;
use Jose\Component\Core\AlgorithmManager;
use Jose\Component\Signature\Algorithm\RS256;

function verify_signature($url)
{
    $url_to_sign = explode('&ss=', $url)[0];
    $signature = explode('&ss=', $url)[1];

    $parsed_url = parse_url($url);
    parse_str($parsed_url['query'], $parsed_query);

    $expire = $parsed_query['se'];
    if ($expire  < time()) {
        return new Exception('Link is expired');
    }

    $algorithm_manager = new AlgorithmManager([
        new RS256()
    ]);

    $rs256 = $algorithm_manager->get('RS256');
    $json = '{
        "kty": "RSA",
        "n": "sFATY4fG4n822Zn8bQpszyF9navI_O5lwEg12fEHJGq69EKEfX1xFBXYNj8xEg6ROe4Zl-ssG1Co3Mb3M8zSE9shGSNmMB86oqPOZ9RZTYmiGg_Uh6FqGuP_-SzUC6k8gGVzoo1gn06dqv_S06cT7GW616T57DVHS280FPZ1JLmu88VaBhY_8kgCAqEWgdveLYYWzJhuiTcocCUVRbIElKwWzLbze4BpUQtLQmW5QL-zwYOYXlbamnN-2VP7ZshTqRZEG-LCwI9DEWVUZsdSBdDtG0xH8aTf1BxCAcdcFdPJM2lNa9DmQnNlcB420jL3vKu2mFxxE1Zn_5PIu19pmQ",
        "e": "AQAB"
        }';
    $jwk = JWK::createFromJson($json);
    return $rs256->verify($jwk, $url_to_sign, base64_decode($signature));
}

```

### Signed link with pass

If an article is part of a pass (for instance an subscription) the signed link will be for the pass rather than the article. This way a signed link can be reused for all articles within a subscription until the link is expired. In this case the backend need to validate that article is part of the pass before serving the content.

The signed link is passed to he backend as a pass query string (the signature is shortened for brevity):
`https://test.example.com/test-article?pass=https%3A%2F%2Ftest.example.com%2Fsubscription%3Fse%3D1656098737770%26si%3D113%26ss%3DPTKUZ...`

## Serving locked content via API

By setting the lock mode of the content-container web component to `signedUrl` the content is fetched from the server. By default it fetches the locked content from the article url using the signed url, but by specifying the `access-url` property on the content-container it will use this url to fetch the locked content and pass the signed url in the `x-sesamy-signed-url` header instead:

```
<sesamy-content-container
    lock-mode="signedUrl"
    access-url="https://example.com/api/access/test-article"
>
```

### Cross-Origin Resource Sharing (CORS)

Cross-Origin Resource Sharing (CORS) is a browser mechanism which enables controlled access to resources located outside of the browser domain. When serving content from an API endpoint on a separate domain the API needs to handle [preflight requests](https://developer.mozilla.org/en-US/docs/Glossary/Preflight_request).
