import { extendTheme } from "@chakra-ui/react";
import { theme } from "@chakra-ui/react";

export default extendTheme({
  colors: {
    primary: theme.colors.blackAlpha,
  },
  styles: {
    global: {
      html: {
        scrollBehavior: "smooth",
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
      },
      body: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: "1400px",
        margin: "auto",
        height: "100vh",
        backgroundColor: "hsl(226, 43%, 10%)",
      },
    },
  },
});
