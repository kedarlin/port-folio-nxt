import { Flex, Box, Text, Stack, StackItem, Button } from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  return (
    <Flex
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      px="10%"
      mt="40px"
      position="fixed"
      width="100%"
      bg="#121212"
      zIndex={7}
    >
      <Stack direction="row" spacing={14} fontWeight={600} letterSpacing={2}>
      <StackItem cursor="pointer">HOME</StackItem>
        <StackItem cursor="pointer">ABOUT</StackItem>
        <StackItem cursor="pointer">SKILLS</StackItem>
        <StackItem cursor="pointer">EDUCATION</StackItem>
        <StackItem cursor="pointer">PROJECTS</StackItem>
      </Stack>
      <Button
        p="25px"
        border="2px"
        borderColor="white"
        bg="#141414"
        color="white"
        fontFamily="Tech-Mono"
        fontSize={18}
        fontWeight={600}
        _hover={{ bg: "white", color: "#141414", transition: "0.5s", borderColor: "#94E214" }}
      >
        <Text color="#656565" mr={2}>
          /hire
        </Text>
        Hire me
        <Text color="#656565" ml={2}>
          /hire
        </Text>
      </Button>
    </Flex>
  );
};

export default Navbar;