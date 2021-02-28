import React from 'react'
import { Box, Heading, Link, Text, Center, VStack, Image } from '@chakra-ui/react'
import { Link as GatsbyLink } from 'gatsby'
import HeroImage from "../components/hero-image"
import SEO from "../components/seo"


const IndexPage = ({data}) => (
  <>
  <SEO title="Home" />
  <Heading>With passion for the future</Heading>
  <Text fontSize="xl" my={5}>
    We focus on contamination prevention and upstream bioprocessing to provide tailored, efficient and compliant solutions
  </Text>
  <Box as="div" v="1440px" marginBottom="1.45rem">
    <HeroImage 
    />
  </Box>
  <br />
</>
)

export default IndexPage
