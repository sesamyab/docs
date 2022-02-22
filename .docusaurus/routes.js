
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug','3d6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config','914'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content','c28'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry','0da'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes','244'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','f4c'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page','be1'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','374'),
    routes: [
      {
        path: '/docs/access/api',
        component: ComponentCreator('/docs/access/api','ec6'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/access/configuration/',
        component: ComponentCreator('/docs/access/configuration/','9f4'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/access/configuration/description-fallback',
        component: ComponentCreator('/docs/access/configuration/description-fallback','953'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/access/configuration/sources',
        component: ComponentCreator('/docs/access/configuration/sources','fef'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/access/configuration/xml-extension',
        component: ComponentCreator('/docs/access/configuration/xml-extension','7bc'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/access/getting-started',
        component: ComponentCreator('/docs/access/getting-started','622'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro','aed'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/news-widget/button-sesamy Component',
        component: ComponentCreator('/docs/news-widget/button-sesamy Component','fab'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/news-widget/button-sesamy-container Component',
        component: ComponentCreator('/docs/news-widget/button-sesamy-container Component','251'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/news-widget/getting-started',
        component: ComponentCreator('/docs/news-widget/getting-started','03f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/','f49'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
