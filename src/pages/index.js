import React from "react"
import { Link } from "gatsby"
import { Box, Text } from "@chakra-ui/react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Box p={8}>
      <Text fontSize="xl">Hello World</Text>
    </Box>
  </Layout>
)

export default IndexPage
