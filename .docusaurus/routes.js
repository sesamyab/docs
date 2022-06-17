import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '300'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5af'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'ff1'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '060'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'b20'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'e76'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '281'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'ee4'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'b27'),
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
        path: '/docs/news-widget/sesamy-button',
        component: ComponentCreator('/docs/news-widget/sesamy-button', '6ba'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/news-widget/sesamy-button-container',
        component: ComponentCreator('/docs/news-widget/sesamy-button-container', '034'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/news-widget/sesamy-content-container',
        component: ComponentCreator('/docs/news-widget/sesamy-content-container', '3cb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/news-widget/sesamy-login',
        component: ComponentCreator('/docs/news-widget/sesamy-login', '2a5'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '572'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
