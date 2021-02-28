import React from 'react';
import { Image } from "@chakra-ui/react"

const Logo = (props) => {
  return (
    <>
        <Image
            mx={4}
            w={10}
            h={10}
            rounded="full"
            fit="cover"
            display={{ base: "none", sm: "block" }}
            src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=40&q=80"
            alt="avatar"
        />
    </>
  );
};

export default Logo;