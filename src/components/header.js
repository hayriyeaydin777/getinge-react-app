import { chakra, VisuallyHidden, Box, Heading, Link, Image, Flex, Stack, HStack, Button, Input, useColorModeValue, InputGroup, InputRightAddon, InputLeftElement, InputRightElement, PhoneIcon, CheckIcon, IconButton } from '@chakra-ui/react'
import { Link as GatsbyLink } from 'gatsby'
import PropTypes from "prop-types"
import React from 'react'
import ThemeToggle from './toggle-theme'
import Logo from '../static/images/logo.png';



const Header = ({ image }) => {
  const bg = useColorModeValue("white", "gray.800");
  const cl = useColorModeValue("gray.800", "white");

  const backgroundOpacity = (bg, opacity) => ({
    _after: {
      bg: bg,
      opacity: opacity,
      pos: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      zIndex: -1,
      content: '" "',
    },
  });

  return (
    <>
    <Box as="header" background="darkBlueGrey" marginBottom="0">
    <Box as="div" m="0 auto" maxW="1440px" p="25px 0">
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
            margin="0"
              htmlWidth="194px"
              htmlHeight="40px"
              maxHeight="40px"
              objectFit="contain"
              src={Logo} 
              alt="Getinge"
            />
            </HStack>
          </Link>
        </Flex>
        <Flex>
          <HStack spacing="5" display={{ base: "none", md: "flex" }}>
          <Flex
            direction="column"
            alignItems="start"
            justifyContent="center"
            w="440px"
          >
          <chakra.form w="full" m={0}>
          <VisuallyHidden>Takip Numarası ile Kayıt Ara</VisuallyHidden>
          <Box display={{ base: "block", lg: "none" }}>
            <Input
              height="50px"
              size="lg"
              color="red"
              type="email"
              placeholder="Takip Numarası ile Kayıt Ara"
              bg="white"
              required="true"
            />
            <Button
              w="full"
              height="50px"
              mt={2}
              color="white"
              variant="solid"
              colorScheme="brand"
              size="lg"
              type="submit"
            >
              Ara
            </Button>
          </Box>
          <InputGroup size="lg" w="full" display={{ base: "none", lg: "flex" }}>
            <Input
              height="50px"
              size="lg"
              color="brand.900"
              type="input"
              placeholder="Takip Numarası ile Kayıt Ara"
              bg="white"
              required="true"
            />
            <InputRightElement w="70px" h="50px" m="0">
              <Button
                mt={0}
                height="50px"
                color="white"
                variant="solid"
                bg="turkcell_blue_200"
                size="lg"
                type="submit"
                roundedLeft={0}
              >
                Ara
              </Button>
            </InputRightElement>
          </InputGroup>
        </chakra.form>
          </Flex>
          </HStack>
        </Flex>
        <Flex justify="flex-end" align="center" color="gray.400">
          <HStack spacing="5" display={{ base: "none", md: "flex" }}>
          <Button
              height="50px"
              bg={bg}
              color="gray.500"
              display="inline-flex"
              alignItems="center"
              fontSize="md"
              _hover={{ color: cl }}
              _focus={{ boxShadow: "none" }}
            >
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
  </>
  
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
