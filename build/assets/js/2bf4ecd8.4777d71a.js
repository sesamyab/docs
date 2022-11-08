"use strict";
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [445],
  {
    3905: function (e, t, a) {
      a.d(t, {
        Zo: function () {
          return s;
        },
        kt: function () {
          return u;
        },
      });
      var n = a(7294);
      function r(e, t, a) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = a),
          e
        );
      }
      function l(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            a.push.apply(a, n);
        }
        return a;
      }
      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? l(Object(a), !0).forEach(function (t) {
                r(e, t, a[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
            : l(Object(a)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(a, t)
                );
              });
        }
        return e;
      }
      function o(e, t) {
        if (null == e) return {};
        var a,
          n,
          r = (function (e, t) {
            if (null == e) return {};
            var a,
              n,
              r = {},
              l = Object.keys(e);
            for (n = 0; n < l.length; n++)
              (a = l[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (n = 0; n < l.length; n++)
            (a = l[n]),
              t.indexOf(a) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, a) &&
                  (r[a] = e[a]));
        }
        return r;
      }
      var p = n.createContext({}),
        c = function (e) {
          var t = n.useContext(p),
            a = t;
          return e && (a = "function" == typeof e ? e(t) : i(i({}, t), e)), a;
        },
        s = function (e) {
          var t = c(e.components);
          return n.createElement(p.Provider, { value: t }, e.children);
        },
        m = {
          inlineCode: "code",
          wrapper: function (e) {
            var t = e.children;
            return n.createElement(n.Fragment, {}, t);
          },
        },
        d = n.forwardRef(function (e, t) {
          var a = e.components,
            r = e.mdxType,
            l = e.originalType,
            p = e.parentName,
            s = o(e, ["components", "mdxType", "originalType", "parentName"]),
            d = c(a),
            u = r,
            g = d["".concat(p, ".").concat(u)] || d[u] || m[u] || l;
          return a
            ? n.createElement(g, i(i({ ref: t }, s), {}, { components: a }))
            : n.createElement(g, i({ ref: t }, s));
        });
      function u(e, t) {
        var a = arguments,
          r = t && t.mdxType;
        if ("string" == typeof e || r) {
          var l = a.length,
            i = new Array(l);
          i[0] = d;
          var o = {};
          for (var p in t) hasOwnProperty.call(t, p) && (o[p] = t[p]);
          (o.originalType = e),
            (o.mdxType = "string" == typeof e ? e : r),
            (i[1] = o);
          for (var c = 2; c < l; c++) i[c] = a[c];
          return n.createElement.apply(null, i);
        }
        return n.createElement.apply(null, a);
      }
      d.displayName = "MDXCreateElement";
    },
    1203: function (e, t, a) {
      a.r(t),
        a.d(t, {
          assets: function () {
            return s;
          },
          contentTitle: function () {
            return p;
          },
          default: function () {
            return u;
          },
          frontMatter: function () {
            return o;
          },
          metadata: function () {
            return c;
          },
          toc: function () {
            return m;
          },
        });
      var n = a(3117),
        r = a(102),
        l = (a(7294), a(3905)),
        i = ["components"],
        o = { sidebar_position: 2 },
        p = "Meta Tags",
        c = {
          unversionedId: "integration/indexing/meta-tags",
          id: "integration/indexing/meta-tags",
          title: "Meta Tags",
          description:
            "When a new article or post is created it is added to the catalog of products either by using the meta tags of the page or the sesamy-content-data tag.",
          source: "@site/docs/integration/indexing/meta-tags.md",
          sourceDirName: "integration/indexing",
          slug: "/integration/indexing/meta-tags",
          permalink: "/docs/integration/indexing/meta-tags",
          draft: !1,
          editUrl:
            "https://github.com/sesamyab/docs/blob/dev/docs/integration/indexing/meta-tags.md",
          tags: [],
          version: "current",
          sidebarPosition: 2,
          frontMatter: { sidebar_position: 2 },
          sidebar: "tutorialSidebar",
          previous: {
            title: "Indexing",
            permalink: "/docs/integration/indexing/",
          },
          next: { title: "Passes", permalink: "/docs/integration/cms/passes" },
        },
        s = {},
        m = [
          { value: "Required Fields", id: "required-fields", level: 2 },
          { value: "<code>title</code>", id: "title", level: 3 },
          { value: "<code>description</code>", id: "description", level: 3 },
          { value: "<code>image</code>", id: "image", level: 3 },
          { value: "<code>price</code>", id: "price", level: 3 },
          {
            value:
              "<code>currency</code> (<code>DKK</code>, <code>EUR</code> and <code>SEK</code>)",
            id: "currency-dkk-eur-and-sek",
            level: 3,
          },
          { value: "Optional Fields", id: "optional-fields", level: 2 },
          { value: "Section / Category", id: "section--category", level: 3 },
          { value: "Tags", id: "tags", level: 3 },
          {
            value: "Publish date and time",
            id: "publish-date-and-time",
            level: 3,
          },
          { value: "Product Type", id: "product-type", level: 3 },
          { value: "Client ID", id: "client-id", level: 3 },
          {
            value: "Publisher Content ID",
            id: "publisher-content-id",
            level: 3,
          },
        ],
        d = { toc: m };
      function u(e) {
        var t = e.components,
          a = (0, r.Z)(e, i);
        return (0, l.kt)(
          "wrapper",
          (0, n.Z)({}, d, a, { components: t, mdxType: "MDXLayout" }),
          (0, l.kt)("h1", { id: "meta-tags" }, "Meta Tags"),
          (0, l.kt)(
            "p",
            null,
            "When a new article or post is created it is added to the catalog of products either by using the meta tags of the page or the ",
            (0, l.kt)("inlineCode", { parentName: "p" }, "sesamy-content-data"),
            " tag."
          ),
          (0, l.kt)(
            "p",
            null,
            "These tags are required to create a valid product: ",
            (0, l.kt)("inlineCode", { parentName: "p" }, "title"),
            ", ",
            (0, l.kt)("inlineCode", { parentName: "p" }, "description"),
            ", ",
            (0, l.kt)("inlineCode", { parentName: "p" }, "image"),
            ", ",
            (0, l.kt)("inlineCode", { parentName: "p" }, "price"),
            " and ",
            (0, l.kt)("inlineCode", { parentName: "p" }, "currency"),
            "."
          ),
          (0, l.kt)(
            "p",
            null,
            "In addition, there are optional fields that for instance can be used to create subscriptions."
          ),
          (0, l.kt)(
            "p",
            null,
            "The fields are fetched with fallback so for instance the ",
            (0, l.kt)("inlineCode", { parentName: "p" }, "title"),
            " field is fetched from the ",
            (0, l.kt)("inlineCode", { parentName: "p" }, "sesamy:title"),
            " meta tag if available. If it isn't available it falls back to the ",
            (0, l.kt)("inlineCode", { parentName: "p" }, "og:title"),
            " meta tag and so on."
          ),
          (0, l.kt)("h2", { id: "required-fields" }, "Required Fields"),
          (0, l.kt)(
            "h3",
            { id: "title" },
            (0, l.kt)("inlineCode", { parentName: "h3" }, "title")
          ),
          (0, l.kt)(
            "ol",
            null,
            (0, l.kt)(
              "li",
              { parentName: "ol" },
              (0, l.kt)("inlineCode", { parentName: "li" }, "sesamy:title"),
              " meta tag"
            )
          ),
          (0, l.kt)(
            "pre",
            null,
            (0, l.kt)(
              "code",
              { parentName: "pre", className: "language-html" },
              '<meta property="sesamy:title" content="any title" />\n'
            )
          ),
          (0, l.kt)(
            "ol",
            { start: 2 },
            (0, l.kt)(
              "li",
              { parentName: "ol" },
              (0, l.kt)("inlineCode", { parentName: "li" }, "og:title"),
              " meta tag"
            )
          ),
          (0, l.kt)(
            "pre",
            null,
            (0, l.kt)(
              "code",
              { parentName: "pre", className: "language-html" },
              '<meta property="og:title" content="any title" />\n'
            )
          ),
          (0, l.kt)(
            "ol",
            { start: 3 },
            (0, l.kt)("li", { parentName: "ol" }, "<title", ">", " tag")
          ),
          (0, l.kt)(
            "pre",
            null,
            (0, l.kt)(
              "code",
              { parentName: "pre", className: "language-html" },
              "<title>any title</title>\n"
            )
          ),
          (0, l.kt)(
            "ol",
            { start: 4 },
            (0, l.kt)("li", { parentName: "ol" }, "First <H1", ">", " found")
          ),
          (0, l.kt)(
            "pre",
            null,
            (0, l.kt)(
              "code",
              { parentName: "pre", className: "language-html" },
              "<h1>any title</h1>\n"
            )
          ),
          (0, l.kt)(
            "h3",
            { id: "description" },
            (0, l.kt)("inlineCode", { parentName: "h3" }, "description")
          ),
          (0, l.kt)(
            "ol",
            null,
            (0, l.kt)(
              "li",
              { parentName: "ol" },
              (0, l.kt)(
                "inlineCode",
                { parentName: "li" },
                "sesamy:description"
              ),
              " meta tag"
            )
          ),
          (0, l.kt)(
            "pre",
            null,
            (0, l.kt)(
              "code",
              { parentName: "pre", className: "language-html" },
              '<meta property="sesamy:description" content="any description" />\n'
            )
          ),
          (0, l.kt)(
            "ol",
            { start: 2 },
            (0, l.kt)(
              "li",
              { parentName: "ol" },
              (0, l.kt)("inlineCode", { parentName: "li" }, "og:description"),
              " meta tag"
            )
          ),
          (0, l.kt)(
            "pre",
            null,
            (0, l.kt)(
              "code",
              { parentName: "pre", className: "language-html" },
              '<meta property="og:description" content="any description" />\n'
            )
          ),
          (0, l.kt)(
            "ol",
            { start: 3 },
            (0, l.kt)(
              "li",
              { parentName: "ol" },
              (0, l.kt)("inlineCode", { parentName: "li" }, "description"),
              " meta tag"
            )
          ),
          (0, l.kt)(
            "pre",
            null,
            (0, l.kt)(
              "code",
              { parentName: "pre", className: "language-html" },
              '<meta property="description" content="any description" />\n'
            )
          ),
          (0, l.kt)(
            "h3",
            { id: "image" },
            (0, l.kt)("inlineCode", { parentName: "h3" }, "image")
          ),
          (0, l.kt)(
            "ol",
            null,
            (0, l.kt)(
              "li",
              { parentName: "ol" },
              (0, l.kt)("inlineCode", { parentName: "li" }, "sesamy:image"),
              " meta tag"
            )
          ),
          (0, l.kt)(
            "pre",
            null,
            (0, l.kt)(
              "code",
              { parentName: "pre", className: "language-html" },
              '<meta property="sesamy:image" content="[IMAGE_URL]" />\n'
            )
          ),
          (0, l.kt)(
            "ol",
            { start: 2 },
            (0, l.kt)(
              "li",
              { parentName: "ol" },
              (0, l.kt)("inlineCode", { parentName: "li" }, "og:image"),
              " meta tag"
            )
          ),
          (0, l.kt)(
            "pre",
            null,
            (0, l.kt)(
              "code",
              { parentName: "pre", className: "language-html" },
              '<meta property="og:image" content="[IMAGE_URL]" />\n'
            )
          ),
          (0, l.kt)(
            "ol",
            { start: 3 },
            (0, l.kt)(
              "li",
              { parentName: "ol" },
              (0, l.kt)("inlineCode", { parentName: "li" }, "image"),
              " meta tag"
            )
          ),
          (0, l.kt)(
            "pre",
            null,
            (0, l.kt)(
              "code",
              { parentName: "pre", className: "language-html" },
              '<meta property="image" content="[IMAGE_URL]" />\n'
            )
          ),
          (0, l.kt)(
            "h3",
            { id: "price" },
            (0, l.kt)("inlineCode", { parentName: "h3" }, "price")
          ),
          (0, l.kt)(
            "ol",
            null,
            (0, l.kt)(
              "li",
              { parentName: "ol" },
              (0, l.kt)("inlineCode", { parentName: "li" }, "sesamy:price"),
              " meta tag"
            )
          ),
          (0, l.kt)(
            "pre",
            null,
            (0, l.kt)(
              "code",
              { parentName: "pre", className: "language-html" },
              '<meta property="sesamy:price" content="10" />\n'
            )
          ),
          (0, l.kt)(
            "ol",
            { start: 2 },
            (0, l.kt)(
              "li",
              { parentName: "ol" },
              (0, l.kt)("inlineCode", { parentName: "li" }, "og:price"),
              " meta tag"
            )
          ),
          (0, l.kt)(
            "pre",
            null,
            (0, l.kt)(
              "code",
              { parentName: "pre", className: "language-html" },
              '<meta property="og:price" content="10" />\n'
            )
          ),
          (0, l.kt)(
            "ol",
            { start: 3 },
            (0, l.kt)(
              "li",
              { parentName: "ol" },
              (0, l.kt)("inlineCode", { parentName: "li" }, "price"),
              " meta tag"
            )
          ),
          (0, l.kt)(
            "pre",
            null,
            (0, l.kt)(
              "code",
              { parentName: "pre", className: "language-html" },
              '<meta property="price" content="10" />\n'
            )
          ),
          (0, l.kt)(
            "h3",
            { id: "currency-dkk-eur-and-sek" },
            (0, l.kt)("inlineCode", { parentName: "h3" }, "currency"),
            " (",
            (0, l.kt)("inlineCode", { parentName: "h3" }, "DKK"),
            ", ",
            (0, l.kt)("inlineCode", { parentName: "h3" }, "EUR"),
            " and ",
            (0, l.kt)("inlineCode", { parentName: "h3" }, "SEK"),
            ")"
          ),
          (0, l.kt)(
            "ol",
            null,
            (0, l.kt)(
              "li",
              { parentName: "ol" },
              (0, l.kt)("inlineCode", { parentName: "li" }, "sesamy:currency"),
              " meta tag"
            )
          ),
          (0, l.kt)(
            "pre",
            null,
            (0, l.kt)(
              "code",
              { parentName: "pre", className: "language-html" },
              '<meta property="sesamy:currency" content="EUR" />\n'
            )
          ),
          (0, l.kt)(
            "ol",
            { start: 2 },
            (0, l.kt)(
              "li",
              { parentName: "ol" },
              (0, l.kt)("inlineCode", { parentName: "li" }, "og:currency"),
              " meta tag"
            )
          ),
          (0, l.kt)(
            "pre",
            null,
            (0, l.kt)(
              "code",
              { parentName: "pre", className: "language-html" },
              '<meta property="og:currency" content="EUR" />\n'
            )
          ),
          (0, l.kt)(
            "ol",
            { start: 3 },
            (0, l.kt)(
              "li",
              { parentName: "ol" },
              (0, l.kt)("inlineCode", { parentName: "li" }, "currency"),
              " meta tag"
            )
          ),
          (0, l.kt)(
            "pre",
            null,
            (0, l.kt)(
              "code",
              { parentName: "pre", className: "language-html" },
              '<meta property="currency" content="EUR" />\n'
            )
          ),
          (0, l.kt)("h2", { id: "optional-fields" }, "Optional Fields"),
          (0, l.kt)("h3", { id: "section--category" }, "Section / Category"),
          (0, l.kt)(
            "ol",
            null,
            (0, l.kt)(
              "li",
              { parentName: "ol" },
              (0, l.kt)("inlineCode", { parentName: "li" }, "sesamy:section"),
              " meta tag is used to specify the category of a given article."
            )
          ),
          (0, l.kt)(
            "pre",
            null,
            (0, l.kt)(
              "code",
              { parentName: "pre", className: "language-html" },
              '<meta property="sesamy:section" content="Technology" />\n'
            )
          ),
          (0, l.kt)(
            "ol",
            { start: 2 },
            (0, l.kt)(
              "li",
              { parentName: "ol" },
              (0, l.kt)("inlineCode", { parentName: "li" }, "article:section"),
              " meta tag according to the Opengraph Standard"
            )
          ),
          (0, l.kt)(
            "pre",
            null,
            (0, l.kt)(
              "code",
              { parentName: "pre", className: "language-html" },
              '<meta property="article:section" content="Technology" />\n'
            )
          ),
          (0, l.kt)("h3", { id: "tags" }, "Tags"),
          (0, l.kt)(
            "ol",
            null,
            (0, l.kt)(
              "li",
              { parentName: "ol" },
              (0, l.kt)("inlineCode", { parentName: "li" }, "sesamy:tag"),
              " meta tag, multiple of these tags can be used to specify several tags."
            )
          ),
          (0, l.kt)(
            "pre",
            null,
            (0, l.kt)(
              "code",
              { parentName: "pre", className: "language-html" },
              '<meta property="sesamy:tag" content="Technology" />\n'
            )
          ),
          (0, l.kt)(
            "pre",
            null,
            (0, l.kt)(
              "code",
              { parentName: "pre", className: "language-html" },
              '<meta property="sesamy:tag" content="Technology" />\n<meta property="sesamy:tag" content="Apple" />\n<meta property="sesamy:tag" content="Iphone" />\n'
            )
          ),
          (0, l.kt)(
            "ol",
            { start: 2 },
            (0, l.kt)(
              "li",
              { parentName: "ol" },
              (0, l.kt)("inlineCode", { parentName: "li" }, "article:tag"),
              " meta tag according to the Opengraph Standard, this can be used multiple times to specify several tags."
            )
          ),
          (0, l.kt)(
            "pre",
            null,
            (0, l.kt)(
              "code",
              { parentName: "pre", className: "language-html" },
              '<meta property="article:tag" content="Technology" />\n'
            )
          ),
          (0, l.kt)(
            "pre",
            null,
            (0, l.kt)(
              "code",
              { parentName: "pre", className: "language-html" },
              '<meta property="article:tag" content="Technology" />\n<meta property="article:tag" content="Apple" />\n<meta property="article:tag" content="Iphone" />\n'
            )
          ),
          (0, l.kt)(
            "h3",
            { id: "publish-date-and-time" },
            "Publish date and time"
          ),
          (0, l.kt)(
            "ol",
            null,
            (0, l.kt)(
              "li",
              { parentName: "ol" },
              (0, l.kt)(
                "inlineCode",
                { parentName: "li" },
                "sesamy:published_time"
              ),
              " meta tag is used to specify the date and time when the article was published. Ex: ",
              (0, l.kt)(
                "inlineCode",
                { parentName: "li" },
                "2022-10-31T20:30:02Z"
              )
            )
          ),
          (0, l.kt)(
            "pre",
            null,
            (0, l.kt)(
              "code",
              { parentName: "pre", className: "language-html" },
              '<meta property="sesamy:published_time" content="2022-10-31T20:30:02Z" />\n'
            )
          ),
          (0, l.kt)(
            "ol",
            { start: 2 },
            (0, l.kt)(
              "li",
              { parentName: "ol" },
              (0, l.kt)(
                "inlineCode",
                { parentName: "li" },
                "article:published_time"
              ),
              " meta tag according to the Opengraph Standard"
            )
          ),
          (0, l.kt)(
            "pre",
            null,
            (0, l.kt)(
              "code",
              { parentName: "pre", className: "language-html" },
              '<meta property="article:published_time" content="2022-10-31T20:30:02Z" />\n'
            )
          ),
          (0, l.kt)("h3", { id: "product-type" }, "Product Type"),
          (0, l.kt)(
            "p",
            null,
            "The default value is ",
            (0, l.kt)("inlineCode", { parentName: "p" }, "SINGLE_PAYMENT")
          ),
          (0, l.kt)(
            "ol",
            null,
            (0, l.kt)(
              "li",
              { parentName: "ol" },
              (0, l.kt)(
                "inlineCode",
                { parentName: "li" },
                "sesamy:product-type"
              ),
              " meta tag"
            )
          ),
          (0, l.kt)(
            "pre",
            null,
            (0, l.kt)(
              "code",
              { parentName: "pre", className: "language-html" },
              '<meta property="sesamy:product-type" content="[SINGLE_PAYMENT | RECURRING]" />\n'
            )
          ),
          (0, l.kt)("h3", { id: "client-id" }, "Client ID"),
          (0, l.kt)(
            "p",
            null,
            "The client id used for ",
            (0, l.kt)(
              "a",
              { parentName: "p", href: "/docs/products/authentication" },
              "Sesamy Authentication"
            )
          ),
          (0, l.kt)(
            "ol",
            null,
            (0, l.kt)(
              "li",
              { parentName: "ol" },
              (0, l.kt)("inlineCode", { parentName: "li" }, "sesamy:client-id"),
              " meta tag"
            )
          ),
          (0, l.kt)(
            "pre",
            null,
            (0, l.kt)(
              "code",
              { parentName: "pre", className: "language-html" },
              '<meta property="sesamy:client-id" content="[CLIENT_ID]" />\n'
            )
          ),
          (0, l.kt)(
            "h3",
            { id: "publisher-content-id" },
            "Publisher Content ID"
          ),
          (0, l.kt)(
            "p",
            null,
            "The publisher ID for the content. Indexed and passed back to the website when ",
            (0, l.kt)(
              "a",
              {
                parentName: "p",
                href: "/docs/news-widget/unlocking-content.md",
              },
              "unlocking content"
            )
          ),
          (0, l.kt)(
            "ol",
            null,
            (0, l.kt)(
              "li",
              { parentName: "ol" },
              (0, l.kt)(
                "inlineCode",
                { parentName: "li" },
                "sesamy:publisher-content-id"
              ),
              " meta tag"
            )
          ),
          (0, l.kt)(
            "pre",
            null,
            (0, l.kt)(
              "code",
              { parentName: "pre", className: "language-html" },
              '<meta property="sesamy:publisher-content-id" content="[PUBLISHER_CONTENT_ID]" />\n'
            )
          )
        );
      }
      u.isMDXComponent = !0;
    },
  },
]);
