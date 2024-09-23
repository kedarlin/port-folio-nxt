import { Flex, Icon, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { FaHtml5, FaJava, FaNode, FaPhp, FaPython, FaReact } from "react-icons/fa";
import { FaC } from "react-icons/fa6";
import { SiCsharp, SiExpress, SiFirebase, SiGit, SiJavascript, SiJquery, SiMongodb, SiMysql } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const Skills = () => {
  return (
    <Flex px="10%" py={20} direction="column" id="skills">
      <Flex mt={24} mb={10}>
        <Flex flex={1} direction="column">
          <Text
            color="brend.400"
            fontSize={96}
            fontFamily="RoadRadio-Bold"
            textAlign="center"
          >
            Tech
          </Text>
          <Text
            fontSize={96}
            fontFamily="RoadRadio-Bold"
            textAlign="center"
            flex={1}
          >
            STACK
          </Text>
        </Flex>
        <Stack
          flex={1}
          spacing={8}
          direction="column"
          maxHeight="340px"
          overflowY="scroll"
          scrollBehavior="smooth"
          css={{
            "&::-webkit-scrollbar": {
              width: "12px",
            },
            "&::-webkit-scrollbar-track": {
              background: "black",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "white",
              borderRadius: "6px",
            },
          }}
        >
          <Flex alignItems="center" borderBottom="2px" borderColor="#303030" padding={4}>
            <Icon as={FaReact} fontSize={72} />
            <Text fontWeight={500} fontSize={40} ml={12}>
              React
            </Text>
          </Flex>
          <Flex alignItems="center" borderBottom="2px" borderColor="#303030" padding={4}>
            <Icon as={TbBrandNextjs} fontSize={72} />
            <Text fontWeight={500} fontSize={40} ml={12}>
              NEXT
            </Text>
          </Flex>
          <Flex alignItems="center" borderBottom="2px" borderColor="#303030" padding={4}>
            <Icon as={FaNode} fontSize={72} />
            <Text fontWeight={500} fontSize={40} ml={12}>
              NODE JS
            </Text>
          </Flex>
          <Flex alignItems="center" borderBottom="2px" borderColor="#303030" padding={4}>
            <Icon as={SiExpress} fontSize={72} />
            <Text fontWeight={500} fontSize={40} ml={12}>
              Express
            </Text>
          </Flex>
          <Flex alignItems="center" borderBottom="2px" borderColor="#303030" padding={4}>
            <Icon as={SiMysql} fontSize={72} />
            <Text fontWeight={500} fontSize={40} ml={12}>
              MySQL
            </Text>
          </Flex>
          <Flex alignItems="center" borderBottom="2px" borderColor="#303030" padding={4}>
            <Icon as={SiMongodb} fontSize={72} />
            <Text fontWeight={500} fontSize={40} ml={12}>
              MONGO DB
            </Text>
          </Flex>
          <Flex alignItems="center">
            <Icon as={SiFirebase} fontSize={72} />
            <Text fontWeight={500} fontSize={40} ml={12}>
              Firebase
            </Text>
          </Flex>
        </Stack>
      </Flex>

      <Flex mt={44}>
        <Flex flex={1} direction="column">
          <Text
            color="brend.400"
            fontSize={64}
            fontFamily="RoadRadio-Bold"
            textAlign="center"
          >
            PROGRAMMING
          </Text>
          <Text
            fontSize={96}
            fontFamily="RoadRadio-Bold"
            textAlign="center"
            flex={1}
          >
            TOOLS
          </Text>
        </Flex>
        <Stack
          flex={1}
          spacing={8}
          direction="column"
          maxHeight="340px"
          overflowY="scroll"
          scrollBehavior="smooth"
          css={{
            "&::-webkit-scrollbar": {
              width: "12px",
            },
            "&::-webkit-scrollbar-track": {
              background: "black",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "white",
              borderRadius: "6px",
            },
          }}
        >
          <Flex alignItems="center" borderBottom="2px" borderColor="#303030" padding={4}>
            <Icon as={FaC} fontSize={72} />
            <Text fontWeight={500} fontSize={40} ml={12}>
              C
            </Text>
          </Flex>
          <Flex alignItems="center" borderBottom="2px" borderColor="#303030" padding={4}>
            <Icon as={FaPython} fontSize={72} />
            <Text fontWeight={500} fontSize={40} ml={12}>
              Python
            </Text>
          </Flex>
          <Flex alignItems="center" borderBottom="2px" borderColor="#303030" padding={4}>
            <Icon as={FaJava} fontSize={72} />
            <Text fontWeight={500} fontSize={40} ml={12}>
              JAVA
            </Text>
          </Flex>
          <Flex alignItems="center" borderBottom="2px" borderColor="#303030" padding={4}>
            <Icon as={SiJavascript} fontSize={72} />
            <Text fontWeight={500} fontSize={40} ml={12}>
              Javascript
            </Text>
          </Flex>
          {/* <Flex alignItems="center" borderBottom="2px" borderColor="#303030" padding={4}>
            <Icon as={SiCsharp} fontSize={72} />
            <Text fontWeight={500} fontSize={40} ml={12}>
              C Sharp
            </Text>
          </Flex>
          <Flex alignItems="center" borderBottom="2px" borderColor="#303030" padding={4}>
            <Icon as={SiJquery} fontSize={72} />
            <Text fontWeight={500} fontSize={40} ml={12}>
              J Query
            </Text>
          </Flex>
          <Flex alignItems="center" borderBottom="2px" borderColor="#303030" padding={4}>
            <Icon as={FaPhp} fontSize={72} />
            <Text fontWeight={500} fontSize={40} ml={12}>
              PHP
            </Text>
          </Flex>
          <Flex alignItems="center" borderBottom="2px" borderColor="#303030" padding={4}>
            <Icon as={SiGit} fontSize={72} />
            <Text fontWeight={500} fontSize={40} ml={12}>
              GIT
            </Text>
          </Flex> */}
        </Stack>
      </Flex>
    </Flex>
  );
};

export default Skills;
