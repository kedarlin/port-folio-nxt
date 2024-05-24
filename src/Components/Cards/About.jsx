import { Button, Flex, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { FaFile } from "react-icons/fa";

const About = () => {
  return (
    <Flex py={44} bg="white" px="10%" id="about">
      <Flex
        flex={1}
        fontSize="100px"
        direction="column"
        fontFamily="Roadradio-Bold"
        fontWeight={700}
        pr={16}
        borderRight="8px"
        borderRightColor="gray.200"
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
        >
          Download CV
          <Icon as={FaFile} ml={4} />
        </Button>
      </Flex>
      <Flex flex={1} justifyContent="flex-start">
        <Text
          maxHeight="60vh"
          color="black"
          px={12}
          fontFamily="sans-serif"
          fontSize={20}
          overflowY="scroll"
          textAlign="justify"
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eaque
          obcaecati harum velit, sed suscipit quibusdam. Optio, sequi natus.
          Iusto, nostrum! Officia exercitationem totam inventore molestias
          repudiandae earum nostrum delectus! Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Explicabo magnam molestiae nulla quas
          illo minus, pariatur neque dolorem eius labore voluptate doloribus
          culpa, ducimus ab voluptatum, eaque est necessitatibus odio? Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Autem sed et optio
          molestias ducimus incidunt illum debitis! Commodi sapiente nam
          accusamus, beatae, repudiandae, assumenda totam soluta impedit
          voluptates architecto unde!
        </Text>
      </Flex>
    </Flex>
  );
};

export default About;
