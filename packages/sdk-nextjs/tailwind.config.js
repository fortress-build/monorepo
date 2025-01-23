import typography from "@tailwindcss/typography";
// import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";
import defaultTheme from "tailwindcss/defaultTheme";

module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  plugins: [animate, typography, require("tailwindcss-animate")],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
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
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
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
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	}
  },
  // theme: {
  //   container: {
  //     center: true,
  //     padding: "2rem",
  //     screens: {
  //       "2xl": "1400px",
  //     },
  //   },
  //   extend: {
  //     colors: {
  //       border: "hsl(var(--border) / <alpha-value>)",
  //       input: "hsl(var(--input) / <alpha-value>)",
  //       ring: "hsl(var(--ring) / <alpha-value>)",
  //       background: "hsl(var(--background) / <alpha-value>)",
  //       foreground: "hsl(var(--foreground) / <alpha-value>)",
  //       primary: {
  //         DEFAULT: "hsl(var(--primary) / <alpha-value>)",
  //         foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
  //       },
  //       secondary: {
  //         DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
  //         foreground: "hsl(var(--secondary-foreground) / <alpha-value>)",
  //       },
  //       destructive: {
  //         DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
  //         foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
  //       },
  //       muted: {
  //         DEFAULT: "hsl(var(--muted) / <alpha-value>)",
  //         foreground: "hsl(var(--muted-foreground) / <alpha-value>)",
  //       },
  //       accent: {
  //         DEFAULT: "hsl(var(--accent) / <alpha-value>)",
  //         foreground: "hsl(var(--accent-foreground) / <alpha-value>)",
  //       },
  //       popover: {
  //         DEFAULT: "hsl(var(--popover) / <alpha-value>)",
  //         foreground: "hsl(var(--popover-foreground) / <alpha-value>)",
  //       },
  //       card: {
  //         DEFAULT: "hsl(var(--card) / <alpha-value>)",
  //         foreground: "hsl(var(--card-foreground) / <alpha-value>)",
  //       },
  //       success: {
  //         DEFAULT: "hsl(var(--success) / <alpha-value>)",
  //         foreground: "hsl(var(--success-foreground) / <alpha-value>)",
  //       },
  //       warning: {
  //         DEFAULT: "hsl(var(--warning) / <alpha-value>)",
  //         foreground: "hsl(var(--warning-foreground) / <alpha-value>)",
  //       },
  //       brand: {
  //         DEFAULT: "hsl(var(--primary) / <alpha-value>)",
  //         foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
  //       },
  //       sidebar: {
  //         DEFAULT: "hsl(var(--sidebar-background))",
  //         foreground: "hsl(var(--sidebar-foreground))",
  //         primary: "hsl(var(--sidebar-primary))",
  //         "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
  //         accent: "hsl(var(--sidebar-accent))",
  //         "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
  //         border: "hsl(var(--sidebar-border))",
  //         ring: "hsl(var(--sidebar-ring))",
  //       },
  //     },
  //     fontFamily: {
  //       sans: ["var(--font-geist-sans)", ...defaultTheme.fontFamily.sans],
  //       mono: ["var(--font-geist-mono)", ...defaultTheme.fontFamily.mono],
  //     },
  //     keyframes: {
  //       "accordion-down": {
  //         from: {
  //           height: "0",
  //         },
  //         to: {
  //           height: "var(--radix-accordion-content-height)",
  //         },
  //       },
  //       "accordion-up": {
  //         from: {
  //           height: "var(--radix-accordion-content-height)",
  //         },
  //         to: {
  //           height: "0",
  //         },
  //       },
  //     },
  //     animation: {
  //       "accordion-down": "accordion-down 0.2s ease-out",
  //       "accordion-up": "accordion-up 0.2s ease-out",
  //     },
  //     typography: "typographyConfig",
  //   },
  // },
};
