import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
  colors: {
    brand: {
      50: "#E0FCFF",
      100: "#BEF8FD",
      200: "#87EAF2",
      300: "#54D1DB",
      400: "#38BEC9",
      500: "#2CB1BC",
      600: "#14919B",
      700: "#0E7C86",
      800: "#0A6C74",
      900: "#044E54",
    },
  },
});

export default theme;
