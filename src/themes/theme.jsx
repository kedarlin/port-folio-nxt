import { Button, extendTheme } from "@chakra-ui/react";
import "@fontsource/open-sans/300.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/700.css";

export const theme = extendTheme({
  colors: {
    brand: {
      100: "#f7fafc",
      900: "#1a202c",
    },
    brend: {
      400: "#94E214",
    }
  },
  fonts: {
    body: "roadradio-thin",
    Button: "Tech-Mono",
  },
  styles: {
    global: () => ({
      body: {
        bg: "#141414",
        color: "#FFFFFF",
      },
    }),
  },
  components: {},
});
