const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');
import PrimeUI from 'tailwindcss-primeui';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{html,ts}'),
    join(__dirname, 'apps/djps/src/**/*.{html,ts}'),  // your specific app path
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        // PrimeNG Theme Variables Mapping
        primary: 'var(--primary)',
        'primary-contrast': 'var(--primary-contrast)',
        'primary-emphasis': 'var(--primary-emphasis)',

        'surface-0': 'var(--surface-0)',
        'surface-50': 'var(--surface-50)',
        'surface-100': 'var(--surface-100)',
        'surface-200': 'var(--surface-200)',
        'surface-300': 'var(--surface-300)',
        'surface-400': 'var(--surface-400)',
        'surface-500': 'var(--surface-500)',
        'surface-600': 'var(--surface-600)',
        'surface-700': 'var(--surface-700)',
        'surface-800': 'var(--surface-800)',
        'surface-900': 'var(--surface-900)',
        'surface-950': 'var(--surface-950)',

        'text-color': 'var(--text-color)',
        'text-color-emphasis': 'var(--text-color-emphasis)',
        'text-muted-color': 'var(--text-muted-color)',
        'text-muted-color-emphasis': 'var(--text-muted-color-emphasis)',

        'border-surface': 'var(--border-surface)',
        'bg-emphasis': 'var(--bg-emphasis)',
        'bg-highlight': 'var(--bg-highlight)',
        'bg-highlight-emphasis': 'var(--bg-highlight-emphasis)',
      },
      borderRadius: {
        'rounded-border': 'var(--rounded-border)',
      },
      animation: {
        // Add your PrimeNG animations if needed
        fadein: 'fadein 0.15s linear',
        fadeout: 'fadeout 0.15s linear',
        slidedown: 'slidedown 0.45s ease-in-out',
        slideup: 'slideup 0.45s cubic-bezier(0, 1, 0, 1)',
        scalein: 'scalein 0.15s linear',
        zoomin: 'zoomin 0.15s linear',
        flip: 'flip 0.15s linear',
        flipup: 'flipup 0.15s linear',
        flipleft: 'flipleft 0.15s linear',
        flipright: 'flipright 0.15s linear',
      },
      keyframes: {
        // Optional custom keyframes (if you want later)
        fadein: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeout: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        slidedown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideup: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        scalein: {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        },
        zoomin: {
          '0%': { transform: 'scale(0.8)' },
          '100%': { transform: 'scale(1)' },
        },
        flip: {
          '0%': { transform: 'rotateX(90deg)' },
          '100%': { transform: 'rotateX(0deg)' },
        },
        flipup: {
          '0%': { transform: 'rotateX(-90deg)' },
          '100%': { transform: 'rotateX(0deg)' },
        },
        flipleft: {
          '0%': { transform: 'rotateY(-90deg)' },
          '100%': { transform: 'rotateY(0deg)' },
        },
        flipright: {
          '0%': { transform: 'rotateY(90deg)' },
          '100%': { transform: 'rotateY(0deg)' },
        },
      },
    },
  },
  plugins: [PrimeUI],
};
