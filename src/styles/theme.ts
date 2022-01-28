import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { mode, Styles } from "@chakra-ui/theme-tools";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const styles: Styles = {
  global: (props) => ({
    body: {
      color: mode("gray.700", "whiteAlpha.900")(props),
    },
  }),
};

export const theme = extendTheme({
  config,
  styles,
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
});
