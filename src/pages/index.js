import Image from "next/image";
import { Inter } from "next/font/google";
import { Flex } from "@chakra-ui/react";
import FirstCard from "../Components/Cards/FirstCard";
import About from "../Components/Cards/About";
import Skills from "../Components/Cards/Skills";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Flex direction="column">
      <FirstCard />
      <About />
      <Skills />
    </Flex>
  );
}
