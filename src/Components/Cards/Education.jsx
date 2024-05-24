import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const milestones = [
    {
        year: "2019",
        course: "SSLC",
        score: "90%",
        details: "Ramakrishna Mission Matrc Hr. Sec. School, T-Nagar, Chennai",
    },
    {
        year: "2021",
        course: "HSC",
        score: "93%",
        details: "Ramakrishna Mission Matrc Hr. Sec. School, T-Nagar, Chennai",
    },
    {
      year: "2025",
      course: "B.Tech - Information Technology",
      score: "8.28 CGPA",
      details: "St Joseph's College Of Engineering, OMR, Chennai",
    },
];

const Education = () => {
  return (
    <Flex py={44} px="10%" id="education">
      <Flex
        flex={1}
        fontSize="100px"
        direction="column"
        fontFamily="Roadradio-Bold"
        fontWeight={700}
        pr={16}
      >
        <Text textAlign="right" color="brend.400" mt={-10} zIndex={2}>
          EDUCATION
        </Text>
      </Flex>
      <Flex
        flex={2}
        direction="column"
        justifyContent="flex-start"
        borderLeft="8px solid"
        borderLeftColor="gray.300"
        position="relative"
      >
        {milestones.map((milestone, index) => (
          <Flex key={index} mb={12}>
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
              <Text fontFamily="Tech-Mono" fontSize={20} fontWeight={700} color="white">
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

export default Education;
