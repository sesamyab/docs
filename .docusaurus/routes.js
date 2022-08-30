import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '8d7'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'df1'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'bd6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '581'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'e1e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '2ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '920'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '788'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '8e2'),
    routes: [
      {
        path: '/docs/access/api',
        component: ComponentCreator('/docs/access/api', 'ec6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/access/configuration/',
        component: ComponentCreator('/docs/access/configuration/', '9f4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/access/configuration/description-fallback',
        component: ComponentCreator('/docs/access/configuration/description-fallback', '953'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/access/configuration/sources',
        component: ComponentCreator('/docs/access/configuration/sources', 'fef'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/access/configuration/xml-extension',
        component: ComponentCreator('/docs/access/configuration/xml-extension', '7bc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/access/getting-started',
        component: ComponentCreator('/docs/access/getting-started', '622'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/analytics/',
        component: ComponentCreator('/docs/analytics/', 'f74'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/analytics/events',
        component: ComponentCreator('/docs/analytics/events', 'f90'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/analytics/GDPR',
        component: ComponentCreator('/docs/analytics/GDPR', 'dc7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/authentication/getting-started',
        component: ComponentCreator('/docs/authentication/getting-started', '222'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/authentication/oauth2/',
        component: ComponentCreator('/docs/authentication/oauth2/', '48e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/authentication/oauth2/client-credentials',
        component: ComponentCreator('/docs/authentication/oauth2/client-credentials', 'c2c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/authentication/oauth2/code-grant',
        component: ComponentCreator('/docs/authentication/oauth2/code-grant', '082'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/authentication/oauth2/implicit-grant',
        component: ComponentCreator('/docs/authentication/oauth2/implicit-grant', 'ae2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/authentication/scopes',
        component: ComponentCreator('/docs/authentication/scopes', '049'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/news-widget/',
        component: ComponentCreator('/docs/news-widget/', '9b3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/news-widget/getting-started',
        component: ComponentCreator('/docs/news-widget/getting-started', '03f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/news-widget/meta-tags',
        component: ComponentCreator('/docs/news-widget/meta-tags', 'f9a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/news-widget/passes',
        component: ComponentCreator('/docs/news-widget/passes', '505'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/news-widget/unlocking-content',
        component: ComponentCreator('/docs/news-widget/unlocking-content', '9ee'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/news-widget/web-components/sesamy-button',
        component: ComponentCreator('/docs/news-widget/web-components/sesamy-button', '382'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/news-widget/web-components/sesamy-button-container',
        component: ComponentCreator('/docs/news-widget/web-components/sesamy-button-container', 'db9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/news-widget/web-components/sesamy-content-container',
        component: ComponentCreator('/docs/news-widget/web-components/sesamy-content-container', 'dba'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/news-widget/web-components/sesamy-content-data',
        component: ComponentCreator('/docs/news-widget/web-components/sesamy-content-data', '3d6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/news-widget/web-components/sesamy-content-listing',
        component: ComponentCreator('/docs/news-widget/web-components/sesamy-content-listing', '602'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/news-widget/web-components/sesamy-entitlements',
        component: ComponentCreator('/docs/news-widget/web-components/sesamy-entitlements', '68f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/news-widget/web-components/sesamy-login',
        component: ComponentCreator('/docs/news-widget/web-components/sesamy-login', '881'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/news-widget/web-components/sesamy-profile',
        component: ComponentCreator('/docs/news-widget/web-components/sesamy-profile', '1cf'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '415'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
