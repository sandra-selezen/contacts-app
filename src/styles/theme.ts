import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: 'inherit',
  },
  colors: {
    dark: {
      900: "#121417",
      800: "#101012",
      700: "#1F1F22",
    },
    light: {
      900: "#EFEFEF",
      800: "#7878A3",
      700: "#5C5C7B"
    },
    primary: "#877EFF",
    secondary: "#FFB620",
    glassmorphism: "rgba(16, 16, 18, 0.60)"
  }
});