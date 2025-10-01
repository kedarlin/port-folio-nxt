import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const milestones = [
  {
    year: "2024 (September - May)",
    course: "Rootquotient Technologies",
    score: "",
    details: "Intern",
  },
  {
    year: "2025 (May - Present)",
    course: "Rootquotient Technologies",
    score: "",
    details: "Flutter developer",
  },
];

const WorkExperience = () => {
  return (
    <Flex px="10%" id="experience" height="100vh">
      <Flex
        width="60%"
        fontSize="100px"
        direction="column"
        fontFamily="Roadradio-Bold"
        fontWeight={700}
        pr={16}
        py={44}
      >
        <Text textAlign="right" color="brend.400" mt={-10} zIndex={2}>
          WORK EXPERIENCE
        </Text>
      </Flex>
      <Flex
        width="40%"
        direction="column"
        justifyContent="flex-start"
        borderLeft="8px solid"
        borderLeftColor="gray.300"
        position="relative"
        paddingTop={44}
        paddingBottom={16}
      >
        {milestones.map((milestone, index) => (
          <Flex key={index} mb={16}>
            <Flex
              borderTop="6px solid"
              borderTopColor="gray.400"
              pl={12}
              mt={4}
              height="50px"
            ></Flex>
            <Flex direction="column" pl={4}>
              <Text fontSize="20px" fontWeight={700} color="white">
                {milestone.year}
              </Text>
              <Text
                fontFamily="Tech-Mono"
                fontSize={20}
                fontWeight={700}
                color="white"
              >
                {milestone.course} {milestone.score}
              </Text>
              <Text fontSize="18px" fontWeight={400} color="white">
                {milestone.details}
              </Text>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default WorkExperience;
