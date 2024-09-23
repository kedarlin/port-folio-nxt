import { Flex, Stack, Button, Link } from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

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
        <Link cursor="pointer" onClick={() => scrollToSection("home")}>
          HOME
        </Link>
        <Link cursor="pointer" onClick={() => scrollToSection("about")}>
          ABOUT
        </Link>
        <Link cursor="pointer" onClick={() => scrollToSection("skills")}>
          SKILLS
        </Link>
        <Link cursor="pointer" onClick={() => scrollToSection("education")}>
          EDUCATION
        </Link>
        <Link cursor="pointer" onClick={() => scrollToSection("projects")}>
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
        CONTACT
      </Button>
    </Flex>
  );
};

export default Navbar;