import { Heading, Text, Box, Button, Stack } from '@chakra-ui/react'
import React from 'react'
const TestPage = () => (
  <>
    <Heading>404: Not Found</Heading>
    <Text fontSize="xl" my={5}>
      You just hit a route that doesn&#39;t exist... the sadness.
    </Text>
    <Box bg="brandPurple">Welcome</Box>
    <Button bg="brandPurple">Click me</Button>

    <Stack direction="row" spacing={4} align="center">
        <Button colorScheme="teal" variant="solid">
            Button
        </Button>
        <Button colorScheme="teal" variant="outline">
            Button
        </Button>
        <Button colorScheme="teal" variant="ghost">
            Button
        </Button>
        <Button colorScheme="teal" variant="link">
            Button
        </Button>
    </Stack>
  </>
)
export default TestPage