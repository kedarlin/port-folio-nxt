import { Button, Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { FaFile } from "react-icons/fa";

const About = () => {
  const openResume = () => {
    window.open("/assets/KEDAR_RESUME.pdf", "_blank", "noopener,noreferrer");
  };

  return (
    <Flex bg="white" px="10%" id="about">
      <Flex
        flex={1}
        fontSize="100px"
        direction="column"
        fontFamily="Roadradio-Bold"
        fontWeight={700}
        pr={16}
        borderRight="8px"
        borderRightColor="gray.200"
        py={44}
      >
        <Text textAlign="right" color="black">
          About
        </Text>
        <Text textAlign="right" color="#94E214" mt={-10} zIndex={2}>
          ME
        </Text>
        <Text
          textAlign="left"
          color="gray.100"
          mt={-32}
          ml="-20%"
          fontSize="140px"
        >
          ABOUT
        </Text>
        <Button
          color="black"
          p="30px 60px"
          border="2px"
          borderColor="black"
          width="fit-content"
          bg="white"
          borderRadius={10}
          alignSelf="center"
          _hover={{ bg: "black", color: "white", transition: "0.5s" }}
          onClick={openResume}
        >
          Download CV
          <Icon as={FaFile} ml={4} />
        </Button>
      </Flex>
      <Flex flex={1} py={44} justifyContent="flex-start">
        <Text
          maxHeight="60vh"
          color="gray.700"
          px={12}
          fontFamily="sans-serif"
          fontSize={20}
          overflowY="scroll"
          textAlign="justify"
          fontWeight={550}
          css={{
            wordSpacing: "5px",
            "&::-webkit-scrollbar": {
              width: "12px",
            },
            "&::-webkit-scrollbar-track": {
              background: "transparent",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "black",
              borderRadius: "6px",
            },
          }}
        >
          Hi, I&apos;m Kedar, a Software Development Engineer – I based in
          Chennai, India. I specialize in building scalable, high-performance
          mobile applications and have professional experience as a Flutter
          Developer, where I&apos;ve developed Android and iOS apps from the
          ground. My work involves implementing secure token-based
          authentication, designing clean architectures with MVC patterns
          (separating model, view, bloc, and service layers), and seamlessly
          integrating APIs to deliver robust solutions. Beyond mobile, I have
          strong hands-on experience with the MERN stack (MongoDB, Express.js,
          React, Node.js), enabling me to work across both frontend and backend
          ecosystems. I thrive on solving complex problems, learning new
          technologies, and building impactful software that bridges the gap
          between innovation and real-world applications.
        </Text>
      </Flex>
    </Flex>
  );
};

export default About;
