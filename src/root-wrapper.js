import { ChakraProvider } from '@chakra-ui/react'
import customTheme from "./theme"
import React from 'react'
import Layout from './components/layout'

export const wrapPageElement = ({ element }) => {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <Layout>{element}</Layout>
    </ChakraProvider>
  )
}