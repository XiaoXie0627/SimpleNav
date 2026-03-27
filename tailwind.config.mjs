/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        'on-primary': 'var(--on-primary)',
        'primary-container': 'var(--primary-container)',
        'on-primary-container': 'var(--on-primary-container)',
        secondary: 'var(--secondary)',
        surface: 'var(--surface)',
        'on-surface': 'var(--on-surface)',
      },
      borderRadius: {
        'card': '16px',
        'input': '4px',
        'pill': '9999px'
      },
      boxShadow: {
        'elevation-1': '0 1px 2px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.1)',
        'elevation-2': '0 1px 2px rgba(0,0,0,0.1), 0 2px 6px rgba(0,0,0,0.1)',
        'elevation-3': '0 4px 8px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.1)',
        'elevation-4': '0 6px 10px rgba(0,0,0,0.1), 0 2px 3px rgba(0,0,0,0.1)',
      }
    }
  },
  plugins: []
};
