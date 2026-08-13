import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: '#0d1117',
          raised: '#161b22',
          elevated: '#1c2128',
          border: '#30363d',
        },
        bull: {
          DEFAULT: '#00c853',
          muted: '#00c85333',
        },
        bear: {
          DEFAULT: '#ff1744',
          muted: '#ff174433',
        },
        caution: {
          DEFAULT: '#ff6d00',
          muted: '#ff6d0033',
        },
        info: {
          DEFAULT: '#2196f3',
          muted: '#2196f333',
        },
        text: {
          primary: '#e6edf3',
          secondary: '#8b949e',
          muted: '#484f58',
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.875rem' }],
      },
    },
  },
  plugins: [],
} satisfies Config
