import Image from "next/image";
import { Inter } from "next/font/google";
import { Flex } from "@chakra-ui/react";
import FirstCard from "../Components/Cards/FirstCard";
import About from "../Components/Cards/About";
import Skills from "../Components/Cards/Skills";
import Education from "../Components/Cards/Education";
import WorkExperience from "../Components/Cards/WorkExperience";
import Projects from "../Components/Cards/Projects";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Flex direction="column">
      <FirstCard />
      <About />
      <Skills />
      <Education />
      <WorkExperience />
      <Projects />
    </Flex>
  );
}
