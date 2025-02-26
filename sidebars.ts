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
      label: '📚 LEARN',
      link: {
        type: 'doc',
        id: 'learn/overview',
      },
      items: [
        'learn/what-is-liquid-staking',
        'learn/how-liquid-staking-works',
        'learn/benefits-of-liquid-staking',
        'learn/risks-of-liquid-staking',
        'learn/liquid-staking-vs-traditional',
        'learn/glossary',
      ],
    },
    {
      type: 'category',
      label: '☕️ PROTOCOL',
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
      label: '🪙 TOKENOMICS',
      items: [
        'tokenomics/token-utilities',
      ],
    },
    {
      type: 'category',
      label: '🔒 SECURITY',
      link: {
        type: 'doc',
        id: 'security/security',
      },
      items: [
        'security/security-audits',
      ],
    },
    {
      type: 'category',
      label: '💻 DEVELOPERS',
      link: {
        type: 'doc',
        id: 'developers/overview',
      },
      items: [
        'developers/contracts',
      ],
    },
    {
      type: 'category',
      label: '🔑 VALIDATORS',
      items: [
        'validators/how-to-join',
      ],
    },
    {
      type: 'category',
      label: '🤝 PARTNERSHIPS',
      items: [
        'partnerships/become-our-partner',
        'partnerships/brand-assets',
      ],
    },
  ],
};

export default sidebars;
