import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  docs: [
    'intro',
    {
      type: 'category',
      label: 'Liquid Staking',
      link: {
        type: 'doc',
        id: 'liquid-staking/liquid-staking',
      },
      items: [
        'liquid-staking/overview',
        'liquid-staking/kapt-and-stkapt',
        'liquid-staking/defi-use-cases',
        'liquid-staking/kofi-points',
        'liquid-staking/fees',
        'liquid-staking/faq',
        'liquid-staking/legal-disclaimer',
      ],
    },
    {
      type: 'category',
      label: 'Security',
      items: [
        'security/contracts',
        'security/security-audits',
      ],
    },
  ],
};

export default sidebars;
