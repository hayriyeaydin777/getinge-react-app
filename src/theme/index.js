import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
    colors: {
        darkBlueGrey: "#18274a",
        brandPurple: "#673FB4",
        brand: {
          100: "#f7fafc",
          // ...
          900: "#1a202c",
        },
      },
});

export default customTheme;