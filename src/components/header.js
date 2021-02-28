import { Box, Heading, Link, Image, Flex, Stack, HStack, Button, useColorModeValue } from '@chakra-ui/react'
import { Link as GatsbyLink } from 'gatsby'
import PropTypes from "prop-types"
import React from 'react'
import ThemeToggle from './toggle-theme'
import Logo from '../static/images/logo.png';



const Header = ({ image }) => {
  const bg = useColorModeValue("white", "gray.800");
  const cl = useColorModeValue("gray.800", "white");
  return (
    <Box as="header" background="darkBlueGrey" marginBottom="1.45rem">
    <Box as="div" m="0 auto" maxW="1440px" p="1.45rem 1.0875rem">
      <Heading margin="0">
      <Flex
        w="full"
        h="full"
        px="6"
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex align="flex-start">
          <Link href="/">
            <HStack>
            <Image
              htmlWidth="194px"
              htmlHeight="40px"
              objectFit="contain"
              src={Logo} 
              alt="Getinge"
            />
            </HStack>
          </Link>
        </Flex>
        <Flex>
          <HStack spacing="5" display={{ base: "none", md: "flex" }}>
            <Button
              bg={bg}
              color="gray.500"
              display="inline-flex"
              alignItems="center"
              fontSize="md"
              _hover={{ color: cl }}
              _focus={{ boxShadow: "none" }}
            >
              Takip Numarası ile Kayıt Ara
            </Button>
          </HStack>
        </Flex>
        <Flex justify="flex-end" align="center" color="gray.400">
          <HStack spacing="5" display={{ base: "none", md: "flex" }}>
            <Button colorScheme="brand" variant="solid" size="sm">
              Sık Sorulan Sorular
            </Button>
          </HStack>
        </Flex>
      </Flex>
      

      </Heading>
    </Box>
    <Box as="div" position="fixed" right="20px" top="20px">
      <ThemeToggle />
    </Box>
  </Box>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
