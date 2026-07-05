import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}', // Ensure src directory is included
  ],
  theme: {
    extend: {
      colors: {
        'emerald-primary': '#10b981', // Your custom Emerald Green
        'yellow-accent': '#facc15', // Your custom Yellow
        'surface-clean': '#f8fafc', // Light grey for clean backgrounds
        // Text colors (you can define these more specifically if needed)
        'zinc-900': '#18181b', // Dark zinc for headings
        'zinc-500': '#52525b', // Medium zinc for body text
        'zinc-50': '#FAFAFA', // Light zinc for dark mode text
        'zinc-950': '#09090b', // Darkest zinc for dark mode backgrounds
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      animation: {
        'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
    },
  },
  plugins: [],
  darkMode: 'class', // Enable dark mode with class strategy
};
export default config;
