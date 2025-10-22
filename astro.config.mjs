// @ts-check
import { defineConfig } from 'astro/config';
import yaml from '@rollup/plugin-yaml';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://varunagrawal.github.io',
  base: '/anti-racism-resources',

  vite: {
    plugins: [yaml()]
  },

  integrations: [react()]
});