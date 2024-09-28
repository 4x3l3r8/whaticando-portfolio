import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
// Supports weights 100-700
import "@fontsource-variable/josefin-sans";
import "@fontsource/preahvihear";

export const theme = extendTheme(
  {
    fonts: {
      accent: `"preahvihear", sans-serif`,
      work: `"Work Sans Variable", sans-serif`,
    },
    colors: {
      primary: {
        50: "#e5f3ff",
        100: "#b3daff",
        200: "#80c2ff",
        300: "#4daaff",
        400: "#1a91ff",
        500: "#0078e6", // Your specified button color
        600: "#005db3",
        700: "#004380",
        800: "#003362",
        900: "#001f3b",
      },
    },
    styles: {
      global: () => ({
        body: {
          fontFamily: `'Josefin Sans Variable', sans-serif`,
        },
      }),
    },
  },
  withDefaultColorScheme({ colorScheme: "primary" })
);
