const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

const themesPreset = require('../../libs/shared/themes/tailwind.preset');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [themesPreset],
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
