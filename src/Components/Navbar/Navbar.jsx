import { Flex, Stack, Button, Link } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContactClick = () => {
    window.location.href = "mailto:kedarkamaf@gmail.com";
  };

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY) {
        // scrolling down → hide
        setShow(false);
      } else {
        // scrolling up → show
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <Flex
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      p="15px 30px"
      bg="#141414"
      zIndex={7}
      position="fixed"
      top={show ? "0" : "-80px"}
      pl={100}
      width="100%"
      transition="top 0.4s ease-in-out"
    >
      <Stack
        direction="row"
        spacing={14}
        fontWeight={600}
        letterSpacing={2}
        px={34}
      >
        <Link cursor="pointer" onClick={() => scrollToSection("home")}>
          HOME
        </Link>
        <Link cursor="pointer" onClick={() => scrollToSection("about")}>
          ABOUT
        </Link>
        <Link cursor="pointer" onClick={() => scrollToSection("skills")}>
          SKILLS
        </Link>
        <Link cursor="pointer" onClick={() => scrollToSection("experience")}>
          EXPERIENCE
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
        onClick={handleContactClick}
      >
        CONTACT
      </Button>
    </Flex>
  );
};

export default Navbar;
