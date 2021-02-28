/* import React from "react";
import { withPerformance } from "storybook-addon-performance";
import { ChakraProvider } from "@chakra-ui/react";
import { action } from "@storybook/addon-actions"

// Gatsby's Link overrides:
// Gatsby Link calls the `enqueue` & `hovering` methods on the global variable ___loader.
// This global object isn't set in storybook context, requiring you to override it to empty functions (no-op),
// so Gatsby Link doesn't throw any errors.
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
}
// This global variable is prevents the "__BASE_PATH__ is not defined" error inside Storybook.
global.__BASE_PATH__ = "/"
// Navigating through a gatsby app using gatsby-link or any other gatsby component will use the `___navigate` method.
// In Storybook it makes more sense to log an action than doing an actual navigate. Checkout the actions addon docs for more info: https://github.com/storybookjs/storybook/tree/master/addons/actions.
window.___navigate = pathname => {
  action("NavigateTo:")(pathname)
}

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: {
      order: [
        "Style Dictionary",
        ["Intro", "Colours", "Typography"],
        "Atoms",
        "Layout",
        "Forms"
      ]
    }
  }
};

export const themes = [{ name: "dark" }, { name: "light" }];

const withChakra = (StoryFn: Function) => (
  <ChakraProvider>
    <StoryFn />
  </ChakraProvider>
);

export const decorators = [withChakra, withPerformance]; */




/* import CSSReset from "@chakra-ui/css-reset"
import { extendTheme } from "@chakra-ui/react"
import { ChakraProvider, Box } from "@chakra-ui/react"
import { addDecorator } from "@storybook/react"
import * as React from "react"

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
}

const theme = extendTheme({ colors })

const newTheme = {
  ...theme,
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  }
}

export const Chakra = ({ children }) => (
  <ChakraProvider theme={theme}>
    <CSSReset />
    <Box p={5}>
      {children}
    </Box>
  </ChakraProvider>
)

addDecorator(StoryFn =>
  <Chakra>
    <StoryFn />
  </Chakra>)
 */

import React from 'react';

import { GlobalStyle } from '../src/shared/global';

// Global decorator to apply the styles to all stories
export const decorators = [
  Story => (
    <>
      <GlobalStyle />
      <Story />
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

