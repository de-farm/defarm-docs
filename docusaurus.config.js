// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Defarm",
  tagline: "Dinosaurs are cool",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://your-docusaurus-test-site.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  plugins: ["docusaurus-plugin-sass"],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        appId: "O9QSL985BS",
        apiKey: "ceb5366064b8fbf70959827cf9f69227",
        indexName: "ionicframework",
        contextualSearch: true,
        externalUrlRegex: "external\\.com|domain\\.com",
        replaceSearchResultPathname: {
          from: "/docs/", // or as RegExp: /\/docs\//
          to: "/",
        },
        searchParameters: {
          facetFilters: ["language:en", ["filter1", "filter2"], "filter3"],
        },
        searchPagePath: "search",
      },
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Defarm",
        logo: {
          alt: "Defarm Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            docId: "index",
            label: "Guide",
            position: "left",
            to: "/docs",
          },
          {
            docId: "components",
            label: "Components",
            position: "left",
            to: "/docs/components",
          },
          {
            docId: "cli",
            label: "CLI",
            position: "left",
            to: "/docs/cli",
          },
          {
            docId: "native",
            label: "Native",
            position: "left",
            to: "/docs/native",
          },
          {
            type: "search",
            position: "right",
          },
          {
            typety: "dropdown",
            label: "Community",
            position: "right",
            items: [
              {
                href: "https://ionicframework.com/community",
                label: "Community Hub",
                target: "_blank",
              },
              {
                href: "https://forum.ionicframework.com/",
                label: "Forum",
                target: "_blank",
              },
              {
                href: "https://www.meetup.com/topics/ionic-framework/",
                label: "Meetups",
                target: "_blank",
              },
              {
                href: "https://blog.ionicframework.com/",
                label: "Blog",
                target: "_blank",
              },
              {
                href: "https://twitter.com/ionicframework",
                label: "Twitter",
                target: "_blank",
              },
            ],
            className: "navbar__link--community",
          },
          {
            type: "dropdown",
            label: "Support",
            position: "right",
            items: [
              {
                href: "https://ionicframework.com/support",
                label: "Help Center",
                target: "_blank",
                rel: null,
              },
              {
                href: "https://ionic.zendesk.com/",
                label: "Customer Support",
                target: "_blank",
                rel: null,
              },
              {
                href: "https://ionicframework.com/advisory",
                label: "Enterprise Advisory",
                target: "_blank",
                rel: null,
              },
            ],
            className: "navbar__link--support",
          },
          {
            type: "html",
            position: "right",
            value: "<div class='divider' />",
          },
          {
            type: "html",
            position: "right",
            value: `<a class='navbar__link' href="#"><svg width="19" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.5 1.896a6.99 6.99 0 01-2.12.637c.768-.5 1.345-1.294 1.624-2.233a6.975 6.975 0 01-2.346.98 3.738 3.738 0 00-1.23-.948A3.4 3.4 0 0012.962 0C10.92 0 9.269 1.808 9.269 4.037c-.001.31.03.62.096.921a9.707 9.707 0 01-4.208-1.217A10.794 10.794 0 011.752.738a4.329 4.329 0 00-.502 2.029c0 1.4.657 2.637 1.65 3.362a3.379 3.379 0 01-1.68-.504v.05c0 1.958 1.276 3.587 2.963 3.958a3.424 3.424 0 01-.972.142c-.234 0-.466-.025-.695-.075.47 1.604 1.835 2.77 3.452 2.804-1.314 1.126-2.928 1.734-4.587 1.73a6.837 6.837 0 01-.881-.059C2.188 15.373 4.15 16.006 6.153 16c6.8 0 10.516-6.154 10.516-11.492 0-.175-.004-.35-.011-.52A7.935 7.935 0 0018.5 1.895z" fill="currentColor"/></svg></a>`,
          },
          {
            type: "html",
            position: "right",
            value: `<a class='navbar__link' href="#"><svg width="17" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.75 0C4.194 0 .5 3.675.5 8.204c0 3.625 2.365 6.696 5.642 7.782.052.01.096.014.14.014.306 0 .424-.218.424-.407 0-.197-.007-.71-.011-1.397-.31.068-.586.097-.833.097-1.587 0-1.948-1.197-1.948-1.197-.376-.946-.917-1.2-.917-1.2-.718-.489-.004-.503.052-.503h.003c.829.071 1.264.85 1.264.85.412.7.965.896 1.458.896.387 0 .737-.121.943-.214.074-.529.287-.89.523-1.096-1.83-.208-3.757-.911-3.757-4.054 0-.896.32-1.629.847-2.2-.084-.207-.368-1.043.081-2.171 0 0 .06-.018.185-.018.298 0 .972.11 2.084.86a7.955 7.955 0 012.066-.275c.7.004 1.407.093 2.066.275 1.113-.75 1.787-.86 2.085-.86.125 0 .184.018.184.018.45 1.128.166 1.964.081 2.171.527.575.847 1.307.847 2.2 0 3.15-1.93 3.843-3.767 4.046.294.254.56.754.56 1.518 0 1.097-.012 1.982-.012 2.25 0 .193.115.411.42.411a.735.735 0 00.148-.014C14.639 14.9 17 11.825 17 8.204 17 3.675 13.306 0 8.75 0z" fill="currentColor"/></svg></a>`,
          },
          {
            type: "html",
            position: "right",
            value: `<a class='navbar__link' href="#"><svg width="20" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.93 1.326A15.93 15.93 0 0012.86.001a.06.06 0 00-.066.033c-.175.328-.37.756-.506 1.092a14.516 14.516 0 00-4.573 0A11.295 11.295 0 007.2.034.063.063 0 007.135 0C5.707.26 4.34.711 3.065 1.326a.06.06 0 00-.028.024C.444 5.416-.266 9.382.083 13.298c.001.02.011.038.026.05a16.296 16.296 0 004.994 2.65.063.063 0 00.07-.025c.385-.552.728-1.133 1.022-1.744a.068.068 0 00-.035-.093 10.7 10.7 0 01-1.56-.78.07.07 0 01-.007-.112c.105-.082.21-.168.31-.255a.06.06 0 01.065-.009c3.273 1.569 6.817 1.569 10.051 0a.06.06 0 01.066.008c.1.087.205.174.31.256.036.029.034.088-.005.112-.499.306-1.017.564-1.561.78a.068.068 0 00-.034.093c.3.61.643 1.192 1.02 1.743a.062.062 0 00.07.025 16.242 16.242 0 005.003-2.65.069.069 0 00.026-.048c.417-4.528-.699-8.461-2.957-11.948a.052.052 0 00-.026-.025zM6.684 10.914c-.985 0-1.797-.95-1.797-2.116 0-1.166.796-2.116 1.797-2.116 1.01 0 1.814.958 1.798 2.116 0 1.166-.796 2.116-1.798 2.116zm6.646 0c-.986 0-1.797-.95-1.797-2.116 0-1.166.796-2.116 1.797-2.116 1.009 0 1.813.958 1.797 2.116 0 1.166-.788 2.116-1.797 2.116z" fill="currentColor"/></svg></a>`,
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/docusaurus",
              },
              {
                label: "Discord",
                href: "https://discordapp.com/invite/docusaurus",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/docusaurus",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/facebook/docusaurus",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
