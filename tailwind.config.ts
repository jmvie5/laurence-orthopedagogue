import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

function invertShades<T extends { [key: number]: string }>(o: T): T {
  const inverted: T = {} as T;

  for (const [key, value] of Object.entries(o)) {
    inverted[1000 - Number(key)] = value;
  }

  return inverted;
}

export default {
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satisfy: ["Satisfy"],
        mulish: ["Mulish"],
      },
      colors: {
        "lbf-blanc": "#e4dacd",
        "lbf-rose": "#e2bea8",
        "lbf-orange": "#e6a97e",
        "lbf-rouge": "#cd6547",
        "lbf-vert": "#9da686",
        "lbf-bleu": "#5d878d",
      },
      backgroundImage: {
        "nuage-orange": "url('nuage-orange.svg')",
      },
      screens: {
        xxs: "420px",

        xs: "500px",

        sm: "700px",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      defaultTheme: "light",
      themes: {
        light: {
          // https://nextui.org/docs/customization/theme#themecolors
          // https://www.tints.dev/?foreground=6e4b81&default=6E4B81&primary=50EB8A&secondary=9A7BFF&focus=FFBF94
          // + foreground lightness maximum: 103
          // + default base tint: 950
          colors: {
            background: {
              // DEFAULT: '#150f1a',
              DEFAULT: "#e4dacd",
              foreground: "#E4DACD",
            },
            foreground: {
              50: "#FBFAF8",
              100: "#FAF8F5",
              200: "#F4F0EB",
              300: "#EFE9E1",
              400: "#EAE2D7",
              500: "#E4DACD",
              600: "#C6B195",
              700: "#A7875D",
              800: "#715A3D",
              900: "#382D1E",
            },
            default: {
              50: "#FDF6F2",
              100: "#FAEEE5",
              200: "#F5DDCC",
              300: "#F0CCB2",
              400: "#EBBB98",
              500: "#E6A97E",
              600: "#DB8243",
              700: "#B35F23",
              800: "#783F17",
              900: "#3C200C",
            },
            primary: {
              50: "#F5F6F3",
              100: "#ECEEE7",
              200: "#D9DCD0",
              300: "#C3C9B6",
              400: "#B0B89E",
              500: "#9DA686",
              600: "#808A66",
              700: "#5F674C",
              800: "#414734",
              900: "#21231A",
            },
            secondary: {
              50: "#F0F4F5",
              100: "#DDE7E9",
              200: "#BBCFD2",
              300: "#9DBABE",
              400: "#7BA2A8",
              500: "#5D878D",
              600: "#4B6D72",
              700: "#395256",
              800: "#243537",
              900: "#121A1C",
            },
            focus: {
              50: "#FAEEEB",
              100: "#F5E1DB",
              200: "#EBC2B7",
              300: "#E1A08F",
              400: "#D7826B",
              500: "#CD6547",
              600: "#AC4A2F",
              700: "#803723",
              800: "#582618",
              900: "#2C130C",
            },
            success: {
              DEFAULT: "#50eb8a",
              foreground: "#150f1a",
              // dark: '#329a65',
              // light: '#c4ffe2',
            },
            warning: {
              DEFAULT: "#fac334",
              foreground: "#150f1a",
              // dark: '#d0783a',
              // light: '#ffeb9c',
            },
            danger: {
              DEFAULT: "#de5a42",
              // foreground: '#150f1a',
              foreground: "#ffffff",
              // dark: '#953b34',
              // light: '#ffb196',
            },
            content1: {
              DEFAULT: "#22182A",
            },
            content2: {
              DEFAULT: "#3A2947",
            },
            content3: {
              DEFAULT: "#513A64",
            },
            content4: {
              DEFAULT: "#694B81",
            },
          },
        },
      },
    }),
  ],
} satisfies Config;
