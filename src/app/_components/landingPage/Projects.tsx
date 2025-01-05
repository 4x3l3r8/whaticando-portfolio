"use client";

import { Box, Card, Image, Link, Text, useBoolean } from "@chakra-ui/react";
import { GlassmorphicCard } from "../shared";

export const Projects = () => {
  const chapchapURL = "https://chapchap-social.netlify.app/";
  const systemsTechUrl = "https://summitech-starwars.netlify.app/";
  const lumV2Url = "https://luminate.sidmach.com";

  const [isOnCard, { on, off }] = useBoolean();
  const [isOnCard2, { on: on2, off: off2 }] = useBoolean();

  return (
    <Box as="section" width="100%" pos={"relative"} id="projects">
      <Box mx={{ base: "auto" }} mt={{ base: "8", md: "60" }} mb="4" w={{ base: "100%", md: "80%" }}>
        <Text
          color="blue.200"
          textAlign={{ base: "center", md: "left" }}
          fontWeight={"bold"}
          fontSize={{ base: "xl", md: "5xl", lg: "6xl" }}
          fontFamily={"Josefin Sans Variable"}
        >
          Projects.
        </Text>
        <Box display="flex" flexDirection={{ base: "column", md: "row" }} gap={{ base: "6", md: "6", lg: "12" }} fontFamily={"Josefin Sans Variable"}>
          <GlassmorphicCard
            p="4"
            cursor={"pointer"}
            bgGradient="linear(to-r, rgba(0, 0, 139, 0.3), rgba(0, 0, 0, 0.3))"
            width={{ base: "full", md: "90%" }}
            height={{ base: "430px", md: "550px", lg: "570px", xl: "550px" }}
          >
            <Image src={"/starwars.png"} alt="star" height={{ base: 40, md: 72, lg: "300px", xl: 80 }} width="100%" borderRadius="lg" />
            <Box mt="4">
              <Text color="white" fontSize={{ base: "md", lg: "xl" }}>
                Star Wars Movie Details
              </Text>
              <Text color="rgba(255, 255, 255, 0.8)" fontSize={{ base: "sm" }}>
                A fun project that brings the world of Star Wars to fans through a simple, user-friendly interface displaying movie details fetched
                from an external API. Technologies: React, JavaScript
              </Text>
              <Text color="blue.200" mt="8" fontSize={{ base: "md", lg: "xl" }} as={Link} href={systemsTechUrl}>
                View Website
              </Text>
            </Box>
          </GlassmorphicCard>
          <GlassmorphicCard
            cursor={"pointer"}
            p="4"
            bgGradient="linear(to-r, rgba(0, 0, 139, 0.3), rgba(0, 0, 0, 0.3))"
            width={{ base: "100%", md: "90%" }}
            //   height={{ base: "430px", md: "550px", lg: "570px", xl: "550px" }}
            onMouseEnter={on2}
            onMouseLeave={off2}
          >
            <Image
              src={"/chapchap.png"}
              alt="star"
              height={{ base: "auto", md: 72, lg: "300px", xl: 80 }}
              width="100%"
              borderRadius="lg"
              objectFit={"cover"}
            />
            <Box mt="4">
              <Text color="white" fontSize={{ base: "md", lg: "xl" }}>
                ChapChap Social
              </Text>
              <Text color="rgba(255, 255, 255, 0.8)" fontSize={{ base: "sm" }} noOfLines={isOnCard2 ? 0 : 5}>
                A robust social media platform designed for seamless real-time communication. This MERN stack project empowers users to connect via
                real-time chat, create and manage groups, and explore social interactions. Features: JWT-secured authentication Real-time messaging
                with Socket.io Intuitive group management tools Responsive design
              </Text>
              <Text color="blue.200" fontSize={{ base: "md", lg: "xl" }} as={Link} href={chapchapURL}>
                View Website
              </Text>
            </Box>
          </GlassmorphicCard>
        </Box>
        <GlassmorphicCard
          as={Card}
          mt={{ base: "10", md: "14" }}
          p={{ base: "2", md: "4" }}
          width={{ base: "100%", md: "100%" }}
          fontFamily={"work"}
          cursor={"pointer"}
          onMouseEnter={on}
          onMouseLeave={off}
        >
          <Box display={"flex"} flexDirection={{ base: "column-reverse", md: "row" }}>
            <Box width={{ base: "100%", md: "50%" }}>
              <Box p={{ base: "2", md: "8" }} fontFamily={{ base: "Josefin Sans Variable", md: "revert" }}>
                <Text fontWeight="bold" color="white" fontSize={{ base: "lg", md: "6xl", lg: "3xl", xl: "6xl" }}>
                  Luminate
                </Text>
                <Text
                  color="white"
                  fontSize={{ base: "md", lg: "lg", xl: "xl" }}
                  noOfLines={isOnCard ? 0 : 10}
                  fontFamily={{ base: "Josefin Sans Variable", md: "revert" }}
                >
                  Luminate is a learning Management System (LMS) using modern web technologies to help facilitate both asynchronous and synchronous
                  learning between students and instructors. The system was designed to provide an intuitive and user-friendly interface for users
                  that encourages self-learning. It includes features for managing course contents including lessons, quizzes, and assignments,
                  allowing instructors to easily manage their courses. This solution also helps schools manage and put their learning resources online
                  reaching beyond the four corners of their school to online students.
                </Text>
                <Text color="blue.200" fontSize={{ base: "md", lg: "xl" }} as={Link} href={lumV2Url}>
                  View Website
                </Text>
              </Box>
            </Box>
            <Box height="100%" width={{ base: "100%", md: "50%" }}>
              <Image src="luminate.svg" alt="avatar" width={{ base: "100%", md: "100%" }} height={{ base: "20%", md: "100%" }} objectFit="cover" />
            </Box>
          </Box>
        </GlassmorphicCard>
      </Box>
    </Box>
  );
};
