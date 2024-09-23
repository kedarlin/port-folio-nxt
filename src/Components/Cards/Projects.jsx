import { Flex, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Projects = () => {
  return (
    <Flex direction="column" px="10%" alignItems="center" py={32} id="projects">
      <Text fontSize={72} fontFamily="RoadRadio-Bold" color="brend.400">
        PROJECTS
      </Text>
      <div className="home-content">
        <div className="home-slider">
          <div className="home-card">
            <div className="home-sub">
              <Image
                src="/Assets/reddit-project.png"
                alt="home-img"
                className="card-img"
              />
              <div className="home-card-cont">
                <div className="home-card-title">Red-dit Clone</div>
                <div className="home-card-desc">
                  A platform to similar to Reddit where users can create and
                  manage communities, posts, comments and votes; Built using
                  Next JS, Chakra UI, Recoil State and Firebase.
                </div>
              </div>
            </div>
          </div>
          <div className="home-card">
            <div className="home-sub">
              <Image
                src="/Assets/stack-overflow-project.png"
                alt="home-img"
                className="card-img"
              />
              <div className="home-card-cont">
                <div className="home-card-title">Stack-Overflow Clone</div>
                <div className="home-card-desc">
                  It is a clone website of Stack-Overflow built using MERN stack
                  and Firebase authentications
                </div>
              </div>
            </div>
          </div>
          <div className="home-card">
            <div className="home-sub">
              <Image
                src="/Assets/osintika-project.png"
                alt="home-img"
                className="card-img"
              />
              <div className="home-card-cont">
                <div className="home-card-title">OSINTika</div>
                <div className="home-card-desc">
                  An Intel collecting platform that allows users to collect open
                  source data from the internet using OSINT tools and summarizes
                  the scan results; built using MERN, Flask, Firebase Auth and
                  OSINT Tools.
                </div>
              </div>
            </div>
          </div>
          <div className="home-card">
            <div className="home-sub">
              <Image
                src="/Assets/iac-ui.png"
                alt="home-img"
                className="card-img"
              />
              <div className="home-card-cont">
                <div className="home-card-title">Tour Booking Platform</div>
                <div className="home-card-desc">
                  It is Freelancing project and built the front-end of the web
                  pages using React JS with responsive UI.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Flex>
  );
};

export default Projects;
