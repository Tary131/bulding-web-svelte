import type { Config } from 'tailwindcss';

export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: '#F57C1F',
					foreground: '#ffffff',
					50: '#fef3e7',
					100: '#fde4c4',
					200: '#fbc88d',
					300: '#f9a855',
					400: '#F57C1F',
					500: '#F57C1F',
					600: '#d66a1a',
					700: '#b85715',
					800: '#9a4513',
					900: '#7c3310',
					950: '#5e220d'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
					50: '#ffffff',
					100: '#fafafa',
					200: '#f5f5f5',
					300: '#f0f0f0',
					400: '#e5e5e5',
					500: '#d4d4d4',
					600: '#a3a3a3',
					700: '#737373',
					800: '#525252',
					900: '#404040',
					950: '#262626'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		}
	},
	plugins: []
} satisfies Config;

