/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config.html for all the possible
// site configuration options.

/* List of projects/orgs using your project for the users page */
const users = [
  {
    caption: 'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/docusaurus.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
];

const siteConfig = {
  tagline: 'Next-generation Sip Server',
  url: 'https://routr.io' /* your website url */,
  baseUrl: '/' /* base url for your project */,
  // For github.io type URLs, you would set the url and baseUrl like:
  //url: 'https://fonoster.github.io/routr',
  //baseUrl: '/',
  editUrl: "https://github.com/fonoster/routr/edit/master/docs/",
  // Used for publishing and more
  projectName: 'routr',
  organizationName: 'fonoster',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'getting-started-introduction', label: 'Docs'},
    {doc: 'api-reference', label: 'API'},
    {page: 'help', label: 'Help'},
    //{blog: false, label: 'GitHub'},
  ],

  // If you have users set above, you add it here:
  users,

  title: '1.0',
  disableTitleTagline: true,

  /* path to images for header/footer */
  headerIcon: 'img/logo.png',
  footerIcon: 'img/docusaurus.svg',
  favicon: 'img/favicon.ico',

  /* colors for website */
  colors: {
    primaryColor: '#444444',
    secondaryColor: '#205C3B',
  },

  /* custom fonts for website */
  /*fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },*/

  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    ' Brought to you by Fonoster, Inc and friends.',

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'androidstudio',
  },

  // Add custom scripts here that would be placed in <script> tags
  scripts: ['https://buttons.github.io/buttons.js'],

  /* On page navigation for the current documentation page */
  onPageNav: 'separate',

  /* Open Graph and Twitter card images */
  ogImage: 'img/logo.png',
  twitterImage: 'img/logo.png',

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: 'https://github.com/fonoster/routr',
};

module.exports = siteConfig;
