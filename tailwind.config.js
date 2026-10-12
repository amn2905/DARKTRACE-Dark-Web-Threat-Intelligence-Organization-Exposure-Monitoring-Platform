/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc7fb',
          400: '#38a9f7',
          500: '#0e8ce6',
          600: '#026fc4',
          700: '#03589f',
          800: '#074b83',
          900: '#0c3f6e',
          950: '#082849',
        },
        navy: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        severity: {
          critical: {
            text: '#991b1b',
            bg: '#fef2f2',
            border: '#fecaca',
            solid: '#dc2626',
          },
          high: {
            text: '#9a3412',
            bg: '#fff7ed',
            border: '#fed7aa',
            solid: '#ea580c',
          },
          medium: {
            text: '#854d0e',
            bg: '#fefce8',
            border: '#fef08a',
            solid: '#ca8a04',
          },
          low: {
            text: '#1e40af',
            bg: '#eff6ff',
            border: '#bfdbfe',
            solid: '#2563eb',
          },
          info: {
            text: '#334155',
            bg: '#f8fafc',
            border: '#e2e8f0',
            solid: '#64748b',
          },
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'Monaco', 'Courier New', 'monospace'],
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgb(0 0 0 / 0.04), 0 1px 2px -1px rgb(0 0 0 / 0.04)',
        'card-hover': '0 4px 12px 0 rgb(0 0 0 / 0.07), 0 2px 4px -1px rgb(0 0 0 / 0.04)',
        'panel': '0 10px 25px -5px rgb(0 0 0 / 0.08), 0 8px 10px -6px rgb(0 0 0 / 0.04)',
        'dropdown': '0 12px 28px 0 rgb(0 0 0 / 0.12), 0 2px 6px 0 rgb(0 0 0 / 0.06)',
      },
      fontSize: {
        '2xs': '0.6875rem',
      },
    },
  },
  plugins: [],
}
