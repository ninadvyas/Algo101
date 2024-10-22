import { type DocsLayoutProps } from 'fumadocs-ui/layout';
import { type HomeLayoutProps } from 'fumadocs-ui/home-layout';
import { pageTree } from '@/app/source';

// shared configuration
export const baseOptions: HomeLayoutProps = {
  nav: {
    title: 'Algo101',
  },
  // links: [
  //   {
  //     text: 'Documentation',
  //     url: '/docs',
  //     active: 'nested-url',
  //   },
  //   {
  //     text: 'Practice QA',
  //     url: '/practice',
  //     active: 'nested-url',
  //   },
  // ],
};

// docs layout configuration
export const docsOptions: DocsLayoutProps = {
  ...baseOptions,
  tree: pageTree,
};
