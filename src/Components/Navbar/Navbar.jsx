import {
  Flex,
  Text,
  Stack,
  Button,
  Link,
} from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  return (
    <Flex
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      mx="10%"
      mt="30px"
      p="10px 15px"
      width="80%"
      bg="#141414"
      borderRadius={20}
      zIndex={7}
    >
      <Stack direction="row" spacing={14} fontWeight={600} letterSpacing={2}>
        <Link href="#home" cursor="pointer">
          HOME
        </Link>
        <Link href="#about" cursor="pointer">
          ABOUT
        </Link>
        <Link href="#skills" cursor="pointer">
          SKILLS
        </Link>
        <Link href="#education" cursor="pointer">
          EDUCATION
        </Link>
        <Link href="#" cursor="pointer">
          PROJECTS
        </Link>
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
        _hover={{
          bg: "white",
          color: "#141414",
          transition: "0.5s",
          borderColor: "#94E214",
        }}
      >
        <Text color="#656565" mr={2}>
          /hire
        </Text>
        CONTACT
        <Text color="#656565" ml={2}>
          /hire
        </Text>
      </Button>
    </Flex>
  );
};

export default Navbar;
