import { Button, Flex, Icon, Image, Link, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <Flex justifyContent="flex-end" px="10%" id="home" pt={12}>
      <Flex flex={1} direction="column">
        <Text fontFamily="Roadradio-Bold" fontSize={72}>
          <TypeAnimation
            sequence={[
              "Hello",
              2000,
              "Vanakkam",
              2000,
              "Konechiwa",
              2000,
              "Gumasta",
              1000,
              "Namaste",
              2000,
              "Hola Amigos",
              2000,
            ]}
            wrapper="span"
            speed={20}
            repeat={Infinity}
          />
          <br />
          I&apos;M
          <span style={{ color: "#94E214" }}> KEDAR</span>,
          <Text fontSize={36}>Web developer</Text>
        </Text>
        <Text fontSize={18} mt={6} fontWeight={600}>
          Let&apos;s Get In Touch
        </Text>
        <Stack direction="row" fontSize={44} spacing={12} mt={4}>
          <Link href="https://github.com/kedarlin/" isExternal>
            <Icon
              as={FaGithub}
              _hover={{ transform: "scale(1.2)" }}
              transition="transform 0.3s"
              cursor="pointer"
            />
          </Link>
          <Link href="https://www.linkedin.com/in/d-kedar-06b88522b/" isExternal>
            <Icon
              as={FaLinkedin}
              _hover={{ transform: "scale(1.2)" }}
              transition="transform 0.3s"
              cursor="pointer"
            />
          </Link>
          <Link href="https://t.me/kedarling404" isExternal>
            <Icon
              as={FaTelegram}
              _hover={{ transform: "scale(1.2)" }}
              transition="transform 0.3s"
              cursor="pointer"
            />
          </Link>
          <Link href="https://wa.me/919677069732" isExternal>
            <Icon
              as={FaWhatsapp}
              _hover={{ transform: "scale(1.2)" }}
              transition="transform 0.3s"
              cursor="pointer"
            />
          </Link>
        </Stack>
        {/* <Button
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
        </Button> */}
      </Flex>
      <Flex flex={1}>
        <Image
          src="/Assets/Kedar-Profile.png"
          alt="profile-img"
          width="100%"
          height="auto"
          p="20px 20px 0 20px"
          blendMode="difference"
        />
      </Flex>
    </Flex>
  );
};

export default Home;
