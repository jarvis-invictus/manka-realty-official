export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: {
          50: '#eef2fb',
          100: '#dbe3f6',
          200: '#bcccef',
          300: '#8ea9e2',
          400: '#5a7fd0',
          500: '#3a5dba',
          600: '#2a459c',
          700: '#22397f',
          800: '#1e3a8a',
          900: '#172b60',
          950: '#101c40',
        },
        canvas: '#f5f6f8',
        ink: {
          DEFAULT: '#12161f',
          muted: '#5b6472',
          soft: '#8b94a3',
        },
        line: '#e5e8ee',
      },
      borderRadius: {
        card: '14px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(16,28,64,0.04), 0 6px 16px -8px rgba(16,28,64,0.12)',
        raised: '0 2px 4px rgba(16,28,64,0.05), 0 16px 32px -12px rgba(16,28,64,0.18)',
        overlay: '0 24px 64px -16px rgba(16,28,64,0.34)',
      },
    },
  },
}
