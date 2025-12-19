const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'ROS 2 Nervous System for Humanoid Robotics',
  tagline: 'Educational content on ROS 2 as the middleware nervous system in humanoid robotics',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'your-organization', // Usually your GitHub org/user name.
  projectName: 'ros2-nervous-system', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/your-username/ros2-nervous-system/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/your-username/ros2-nervous-system/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'ROS 2 Nervous System',
        logo: {
          alt: 'ROS 2 Nervous System Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Chapters',
          },
          {
            href: 'https://github.com/your-username/ros2-nervous-system',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Content',
            items: [
              {
                label: 'ROS 2 Fundamentals',
                to: '/docs/ros2-nervous-system/ros2-as-nervous-system',
              },
              {
                label: 'Communication Patterns',
                to: '/docs/ros2-nervous-system/nodes-topics-services',
              },
              {
                label: 'URDF Description',
                to: '/docs/ros2-nervous-system/urdf-description',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'ROS 2 Documentation',
                href: 'https://docs.ros.org/',
              },
              {
                label: 'Docusaurus',
                href: 'https://docusaurus.io/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/your-username/ros2-nervous-system',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ROS 2 Nervous System for Humanoid Robotics. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
