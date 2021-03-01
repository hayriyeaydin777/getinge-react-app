import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
    colors: {
        turkcell_blue_200: "#1753c9",
        backgroundGrey: "#f4f5f7",
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