import React from 'react'
import { 
  Box, 
  Heading, 
  Link, 
  Text, 
  Center, 
  VStack, 
  Image,
  Icon,
  chakra,
  useColorModeValue,
  Flex,
  Badge,
  Input,
  VisuallyHidden,
  SimpleGrid,
  Button,
  InputGroup,
  InputRightElement,
  Spacer,
  HStack
} from '@chakra-ui/react'
import { StarIcon } from "@chakra-ui/icons";
import { Link as GatsbyLink } from 'gatsby'
import HeroImage from "../components/hero-image"
import SEO from "../components/seo"


const IndexPage = ({props, data}) => {

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
  <SEO title="Home" />

  <SimpleGrid
      columns={{ base: 1}}
      spacing={0}
      {...backgroundOpacity("brand.500", 0.25)}
    >
      <Flex
        mb="-400"
        zIndex="9999"
        direction="column"
        alignItems="start"
        justifyContent="center"
        px={{ base: 4, lg: 20 }}
      >
        <Text
          mb={2}
          fontSize="md"
          fontWeight="bold"
          color={useColorModeValue("brand.600", "gray.300")}
          lineHeight="shorter"
        >
          With passion for <Text fontSize={{ base: "4xl", md: "4xl", lg: "5xl" }} my={2} color={useColorModeValue("brand.600", "gray.300")}>
        the future
      </Text>
        </Text>
        <chakra.p
         maxWidth="400"
          pr={{ base: 0, lg: 16 }}
          mb={4}
          fontSize="sm"
          color={useColorModeValue("brand.600", "gray.400")}
          letterSpacing="wider"
        >
          We focus on contamination prevention and upstream bioprocessing to provide tailored, efficient and compliant solutions
        </chakra.p>
      </Flex>
      <Box zIndex= "-9999">
        <HeroImage
          fit="cover"
          w="full"
          h={{ base: 64, md: "full" }}
          bg="gray.100"
          loading="lazy"
        />
      </Box>
    </SimpleGrid>

    <Box background="backgroundGrey" mb="25px" py="25px">
      <Flex
        w="full"
        h="full"
        px="6"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box w="442px" h="100px" mt="-50">
          <Flex w="442px" h="100px"
          maxW="md"
          mx="auto"
          bg={useColorModeValue("white", "gray.800")}
          shadow="lg"
          rounded="lg"
          overflow="hidden"
          >
            <Flex w="356px" p={{ base: 4, md: 4 }} alignItems="center">
            <chakra.p
              alignItems="center"
              fontSize="sm"
              color={useColorModeValue("gray.600", "gray.400")}
            >
              Ayın Projesi
            </chakra.p>

            <Flex mt={3} alignItems="center" justifyContent="space-between">
            </Flex>
          </Flex>
          <Flex alignItems="center" justifyContent="center"
            w="85px"
            background="darkBlueGrey"
          >
            <StarIcon alignItems="center" color="white" />
          </Flex>
          </Flex>
        </Box>
        <Spacer />
        <Box w="442px" h="100px" mt="-50">
          <Flex w="442px" h="100px"
          maxW="md"
          mx="auto"
          bg={useColorModeValue("white", "gray.800")}
          shadow="lg"
          rounded="lg"
          overflow="hidden"
          >
            <Flex w="356px" p={{ base: 4, md: 4 }} alignItems="center">
            <chakra.p
              alignItems="center"
              fontSize="sm"
              color={useColorModeValue("gray.600", "gray.400")}
            >
              Öneri ve İyileştirme
            </chakra.p>

            <Flex mt={3} alignItems="center" justifyContent="space-between">
            </Flex>
          </Flex>
          <Flex alignItems="center" justifyContent="center"
            w="85px"
            background="darkBlueGrey"
          >
            <StarIcon alignItems="center" color="white" />
          </Flex>
          </Flex>
        </Box>
        <Spacer />
        <Box w="442px" h="100px" mt="-50">
          <Flex w="442px" h="100px"
          maxW="md"
          mx="auto"
          bg={useColorModeValue("white", "gray.800")}
          shadow="lg"
          rounded="lg"
          overflow="hidden"
          >
            <Flex w="356px" p={{ base: 4, md: 4 }} alignItems="center">
            <chakra.p
              alignItems="center"
              fontSize="sm"
              color={useColorModeValue("gray.600", "gray.400")}
            >
              Operasyonel Mükemmellik Uygulamaları
            </chakra.p>

            <Flex mt={3} alignItems="center" justifyContent="space-between">
            </Flex>
          </Flex>
          <Flex alignItems="center" justifyContent="center"
            w="85px"
            background="darkBlueGrey"
          >
            <StarIcon alignItems="center" color="white" />
          </Flex>
          </Flex>
        </Box>
      </Flex>

      <Flex
        w="full"
        h="full"
        px="6"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box w="442px" h="100px" mt="25">
          <Flex w="442px" h="100px"
          maxW="md"
          mx="auto"
          bg={useColorModeValue("white", "gray.800")}
          shadow="lg"
          rounded="lg"
          overflow="hidden"
          >
            <Flex w="356px" p={{ base: 4, md: 4 }} alignItems="center">
            <chakra.p
              alignItems="center"
              fontSize="sm"
              color={useColorModeValue("gray.600", "gray.400")}
            >
              Ayın Projesi
            </chakra.p>

            <Flex mt={3} alignItems="center" justifyContent="space-between">
            </Flex>
          </Flex>
          <Flex alignItems="center" justifyContent="center"
            w="85px"
            background="darkBlueGrey"
          >
            <StarIcon alignItems="center" color="white" />
          </Flex>
          </Flex>
        </Box>
        <Spacer />
        <Box w="442px" h="100px" mt="25">
          <Flex w="442px" h="100px"
          maxW="md"
          mx="auto"
          bg={useColorModeValue("white", "gray.800")}
          shadow="lg"
          rounded="lg"
          overflow="hidden"
          >
            <Flex w="356px" p={{ base: 4, md: 4 }} alignItems="center">
            <chakra.p
              alignItems="center"
              fontSize="sm"
              color={useColorModeValue("gray.600", "gray.400")}
            >
              Öneri ve İyileştirme
            </chakra.p>

            <Flex mt={3} alignItems="center" justifyContent="space-between">
            </Flex>
          </Flex>
          <Flex alignItems="center" justifyContent="center"
            w="85px"
            background="darkBlueGrey"
          >
            <StarIcon alignItems="center" color="white" />
          </Flex>
          </Flex>
        </Box>
        <Spacer />
        <Box w="442px" h="100px" mt="25">
          <Flex w="442px" h="100px"
          maxW="md"
          mx="auto"
          bg={useColorModeValue("white", "gray.800")}
          shadow="lg"
          rounded="lg"
          overflow="hidden"
          >
            <Flex w="356px" p={{ base: 4, md: 4 }} alignItems="center">
            <chakra.p
              alignItems="center"
              fontSize="sm"
              color={useColorModeValue("gray.600", "gray.400")}
            >
              Operasyonel Mükemmellik Uygulamaları
            </chakra.p>

            <Flex mt={3} alignItems="center" justifyContent="space-between">
            </Flex>
          </Flex>
          <Flex alignItems="center" justifyContent="center"
            w="85px"
            background="darkBlueGrey"
          >
            <StarIcon alignItems="center" color="white" />
          </Flex>
          </Flex>
        </Box>
      </Flex>


      <Flex 
        mt="25px"
        mb="25px"
        ml="25px"
        mr="25px"
        alignItems="center"
      >
      <Box w="full"
        h="full"
        px="6"
        alignItems="center"
        mx="auto"
        px={0}
        py={4}
        rounded="lg"
        shadow="lg"
        border="1px"
        bordercolor="red"
        bg={useColorModeValue("white", "gray.800")}
      >

      <Flex
        w="full"
        h="full"
        px="6"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box w="410px" h="100px">
          <Flex w="410px" h="100px"
          maxW="md"
          mx="auto"
          bg={useColorModeValue("white", "gray.800")}
          shadow="lg"
          rounded="lg"
          overflow="hidden"
          >
            <Flex w="356px" p={{ base: 4, md: 4 }} alignItems="center">
            <chakra.p
              alignItems="center"
              fontSize="sm"
              color={useColorModeValue("gray.600", "gray.400")}
            >
              Ayın Projesi
            </chakra.p>

            <Flex mt={3} alignItems="center" justifyContent="space-between">
            </Flex>
          </Flex>
          <Flex alignItems="center" justifyContent="center"
            w="85px"
            background="darkBlueGrey"
          >
            <StarIcon alignItems="center" color="white" />
          </Flex>
          </Flex>
        </Box>
        <Spacer />
        <Box w="410px" h="100px">
          <Flex w="410px" h="100px"
          maxW="md"
          mx="auto"
          bg={useColorModeValue("white", "gray.800")}
          shadow="lg"
          rounded="lg"
          overflow="hidden"
          >
            <Flex w="356px" p={{ base: 4, md: 4 }} alignItems="center">
            <chakra.p
              alignItems="center"
              fontSize="sm"
              color={useColorModeValue("gray.600", "gray.400")}
            >
              Öneri ve İyileştirme
            </chakra.p>

            <Flex mt={3} alignItems="center" justifyContent="space-between">
            </Flex>
          </Flex>
          <Flex alignItems="center" justifyContent="center"
            w="85px"
            background="darkBlueGrey"
          >
            <StarIcon alignItems="center" color="white" />
          </Flex>
          </Flex>
        </Box>
        <Spacer />
        <Box w="410px" h="100px">
          <Flex w="410px" h="100px"
          maxW="md"
          mx="auto"
          bg={useColorModeValue("white", "gray.800")}
          shadow="lg"
          rounded="lg"
          overflow="hidden"
          >
            <Flex w="356px" p={{ base: 4, md: 4 }} alignItems="center">
            <chakra.p
              alignItems="center"
              fontSize="sm"
              color={useColorModeValue("gray.600", "gray.400")}
            >
              Operasyonel Mükemmellik Uygulamaları
            </chakra.p>

            <Flex mt={3} alignItems="center" justifyContent="space-between">
            </Flex>
          </Flex>
          <Flex alignItems="center" justifyContent="center"
            w="85px"
            background="darkBlueGrey"
          >
            <StarIcon alignItems="center" color="white" />
          </Flex>
          </Flex>
        </Box>
      </Flex>

      <Flex
        w="full"
        h="full"
        px="6"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box w="410px" h="100px">
          <Flex w="410px" h="100px"
          maxW="md"
          mx="auto"
          bg={useColorModeValue("white", "gray.800")}
          shadow="lg"
          rounded="lg"
          overflow="hidden"
          >
            <Flex w="356px" p={{ base: 4, md: 4 }} alignItems="center">
            <chakra.p
              alignItems="center"
              fontSize="sm"
              color={useColorModeValue("gray.600", "gray.400")}
            >
              Ayın Projesi
            </chakra.p>

            <Flex mt={3} alignItems="center" justifyContent="space-between">
            </Flex>
          </Flex>
          <Flex alignItems="center" justifyContent="center"
            w="85px"
            background="darkBlueGrey"
          >
            <StarIcon alignItems="center" color="white" />
          </Flex>
          </Flex>
        </Box>
        <Spacer />
        <Box w="410px" h="100px">
          <Flex w="410px" h="100px"
          maxW="md"
          mx="auto"
          bg={useColorModeValue("white", "gray.800")}
          shadow="lg"
          rounded="lg"
          overflow="hidden"
          >
            <Flex w="356px" p={{ base: 4, md: 4 }} alignItems="center">
            <chakra.p
              alignItems="center"
              fontSize="sm"
              color={useColorModeValue("gray.600", "gray.400")}
            >
              Öneri ve İyileştirme
            </chakra.p>

            <Flex mt={3} alignItems="center" justifyContent="space-between">
            </Flex>
          </Flex>
          <Flex alignItems="center" justifyContent="center"
            w="85px"
            background="darkBlueGrey"
          >
            <StarIcon alignItems="center" color="white" />
          </Flex>
          </Flex>
        </Box>
        <Spacer />
        <Box w="410px" h="100px" mt="25px">
          <Flex w="410px" h="100px"
          maxW="md"
          mx="auto"
          bg={useColorModeValue("white", "gray.800")}
          shadow="lg"
          rounded="lg"
          overflow="hidden"
          >
            <Flex w="356px" p={{ base: 4, md: 4 }} alignItems="center">
            <chakra.p
              alignItems="center"
              fontSize="sm"
              color={useColorModeValue("gray.600", "gray.400")}
            >
              Operasyonel Mükemmellik Uygulamaları
            </chakra.p>

            <Flex mt={3} alignItems="center" justifyContent="space-between">
            </Flex>
          </Flex>
          <Flex alignItems="center" justifyContent="center"
            w="85px"
            background="darkBlueGrey"
          >
            <StarIcon alignItems="center" color="white" />
          </Flex>
          </Flex>
        </Box>
      </Flex>




      </Box>
      </Flex>
      
  </Box>
       
</>
  )
}

export default IndexPage
