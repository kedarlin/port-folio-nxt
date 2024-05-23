import { Button, Flex, Icon, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { FaGithub, FaLinkedin, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <Flex justifyContent="flex-end" height="80vh" px="10%">
      <Flex flex={1} direction="column">
        <Text fontFamily="Roadradio-Bold" fontSize={72}>
          MOSHI MOSHI,<br />I&apos;M
          <span style={{ color: "#94E214"}}> KEDAR</span>
          <Text fontSize={36}>
            <TypeAnimation
              sequence={["Web Developer", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </Text>
        </Text>
        <Text fontSize={18} mt={6} fontWeight={600}>
          Let&apos;s Get In Touch
        </Text>
        <Stack direction="row" fontSize={44} spacing={12} mt={4}>
          <Icon as={FaGithub} />
          <Icon as={FaLinkedin} />
          <Icon as={FaTelegram} />
          <Icon as={FaWhatsapp} />
        </Stack>
        <Button
          p="25px"
          border="2px"
          borderColor="white"
          bg="none"
          color="white"
          fontFamily="Tech-Mono"
          fontSize={18}
          fontWeight={600}
          width="200px"
          mt={8}
          ml={16}
          _hover={{ bg: "White", color: "#141414", transition: "0.5s" }}
        >
          Hire me
        </Button>
      </Flex>
      <Flex flex={1}>
        <Image
          src="/Assets/Kedar-Profile.png"
          alt="profile-img"
          width="fit-content"
          height="auto"
          p="20px -20px 0 10px"
          blendMode="difference"
          objectFit="cover"
        />
      </Flex>
    </Flex>
  );
};

export default Home;
