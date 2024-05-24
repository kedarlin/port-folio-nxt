import { Flex, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const Projects = () => {
  return (
    <Flex direction="column" px="10%" alignItems="center" bg="white" py={32}>
        <Text fontSize={72} fontFamily="RoadRadio-Bold" color="black">
            PROJECTS
        </Text>
        <Stack>
            <Flex direction="column" width="400px" height="200px" color="black">
                <Image src="/Assets/Reddit-clone-img.png" alt='project-img1' height="400px" width="auto" objectFit="cover"/>
                <Text mt="-50px">
                    A Red-dit Clone website, developed using Next JS, Recoil States, Chakra UI and Firebase
                </Text>
            </Flex>
        </Stack>
    </Flex>
  )
}

export default Projects