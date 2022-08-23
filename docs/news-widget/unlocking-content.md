---
sidebar_position: 4
---

# Unlocking Content

When a user has purchased a post the unlocked content can be displayed using the `sesamy-content-container` compont. The content can either be embedded directly on the page or fetched from the server using a signed url.

The signed url's can for instance be shared in a order confirmation email and renders a page without any further authentication. To avoid that the signed links are being distributed that have a limited expiery.

The signed url's requires that the cms hosting the content can validate the signature and serve the locked content for valid requests.

## Signed link validation

The links consists of four parts:

- Url of the content
- Optional information, such as the publishers product id
- Expire timestamp
- Signature of the previous parts of the url

This is a sample of a signed link:
`https://test.example.com/test-article?se=TIMESTAMP&si=PUBLISHER_PRODUCT_ID&ss=RSA_256_HASH`

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

### Signed link with pass

If an article is part of a pass (for instance an subscription) the signed link will be for the pass rather than the article. This way a signed link can be reused for all articles within a subscription until the link is expired. In this case the backend need to validate that article is part of the pass before serving the content.

The signed link is passed to he backend as a pass query string (the signature is shortened for brevity):
`https://test.example.com/test-article?pass=https%3A%2F%2Ftest.example.com%2Fsubscription%3Fse%3D1656098737770%26si%3D113%26ss%3DPTKUZ...`
