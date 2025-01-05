"use client";
import React from "react";
import { Box, Flex, Stack, Text, useMediaQuery } from "@chakra-ui/react";
import Steper from "./Stepper";
import Link from "next/link";

export const WorkExperience = () => {
  const [biggerScreen] = useMediaQuery("(min-width: 768px)");
  return (
    <Box
      pos={"relative"}
      // height={{ base: "none", md: "500px" }}
      fontFamily={"Josefin Sans Variable"}
      mt={{ base: "16", md: "32" }}
      as="section"
      id="experience"
    >
      <Box display="flex" justifyContent={"center"} alignItems={"center"} gap="2" fontWeight={"bold"} fontSize={{ base: "xl", md: "4xl", xl: "6xl" }}>
        <Text color="white">My</Text>
        <Text as="span" color="blue.200">
          Work Experience
        </Text>
      </Box>
      {biggerScreen ? (
        <Flex color="white" mx={{ md: 8, lg: 16, xl: 40 }} mt="20" gap={{ base: "2", md: "20" }}>
          <Box>
            <Box mb={{ base: "12", lg: "20", xl: "28" }}>
              <Text fontWeight={"bold"} fontSize={{ md: "xl", xl: "3xl" }}>
                Sidmach Technologies, Ikeja
              </Text>
              <Text color="#98A2B3" fontSize={{ md: "lg", xl: "xl" }}>
                Nov 2020 - Date
              </Text>
            </Box>
            <Box mb={{ base: "12", lg: "20", xl: "28" }}>
              <Text fontWeight={"bold"} fontSize={{ md: "xl", xl: "3xl" }}>
                Harde Business School, Ikeja
              </Text>
              <Text color="#98A2B3" fontSize={{ md: "lg", xl: "xl" }}>
                Oct 2022 - January 2024
              </Text>
            </Box>
            <Box mb="12">
              <Text fontWeight={"bold"} fontSize={{ md: "xl", xl: "3xl" }}>
                ChamsAccess Technologies, Victoria Island
              </Text>
              <Text color="#98A2B3" fontSize={{ md: "lg", xl: "xl" }}>
                Nov 2023 -{" "}
              </Text>
            </Box>
          </Box>
          <Steper />
          <Box>
            <Box mb="6">
              <Text fontWeight={"bold"} fontSize={{ md: "xl", xl: "3xl" }}>
                Software Engineer (Frontend)
              </Text>
              <Text color="#98A2B3" fontSize={{ md: "lg" }} w={{ md: "350px", lg: "500px" }}>
                Led the redesign of a proprietary LMS, significantly boosting its performance and usability. Delivered UI designs and features for
                high-impact projects like School Portals and Result Management Systems and the{" "}
                <Text color={"#4E9BECFF"} decoration={"underline"} as={Link} href={"https://waec.estudy.ng"}>
                  WAEC E-Study
                </Text>
                . Enhanced team productivity by 50% through peer programming, mentorship and knowledge-sharing sessions.
              </Text>
            </Box>
            <Box mb="6">
              <Text fontWeight={"bold"} fontSize={{ md: "xl", xl: "3xl" }}>
                Frontend Engineer
              </Text>
              <Text color="#98A2B3" fontSize={{ md: "lg", xl: "xl" }} w={{ md: "350px", lg: "500px" }}>
                Engineered scalable, user-centric interfaces for HARDEVERSE LMS, amassing over 10,000 users. Ensured application reliability through
                testing and API integration, achieving a 7000+ returning user base.
              </Text>
            </Box>
            <Box mt={16}>
              <Text fontWeight={"bold"} fontSize={{ md: "xl", xl: "3xl" }}>
                Software Developer intern
              </Text>
              <Text color="#98A2B3" fontSize={{ md: "lg", xl: "xl" }} w={{ md: "350px", lg: "500px" }}>
                Triaged multiple tasks and competing priorities in servicing requests from senior managers.
                <br />
                Reviewed and made refinements in existing programs to improve techniques.
              </Text>
            </Box>
          </Box>
        </Flex>
      ) : (
        <Flex color="white" mx="4" gap="2" mt="8">
          <Stack flex={1} justifyContent={"space-between"}>
            <Box mb="4">
              <Text fontSize="xs">Sidmach Technologies, Ikeja</Text>
              <Text color="#98A2B3" fontSize="8px">
                Nov 2020 - Date
              </Text>
            </Box>
            <Box mb="4">
              <Text fontSize="xs">Harde Business School, Ikeja</Text>
              <Text color="#98A2B3" fontSize="8px">
                Oct 2022 - January 2024
              </Text>
            </Box>
            <Box>
              <Text fontSize="xs">ChamsAccess Technologies, Victoria Island</Text>
              <Text color="#98A2B3" fontSize="8px">
                Nov 2023 -{" "}
              </Text>
            </Box>
          </Stack>
          <Box flex={1}>
            <Box mb="2">
              <Text fontSize="xs">Software Engineer (Frontend)</Text>
              <Text color="#98A2B3" fontSize="8px">
                Led the redesign of a proprietary LMS, significantly boosting its performance and usability. Delivered UI designs and features for
                high-impact projects like School Portals and Result Management Systems and the{" "}
                <Text color={"#4E9BECFF"} decoration={"underline"} as={Link} href={"https://waec.estudy.ng"}>
                  WAEC E-Study
                </Text>
                . Enhanced team productivity by 50% through peer programming, mentorship and knowledge-sharing sessions.
              </Text>
            </Box>
            <Box mb="3">
              <Text fontSize="xs">Frontend Engineer</Text>
              <Text color="#98A2B3" fontSize="8px">
                Engineered scalable, user-centric interfaces for HARDEVERSE LMS, amassing over 10,000 users. Ensured application reliability through
                testing and API integration, achieving a 7000+ returning user base.
              </Text>
            </Box>
            <Box>
              <Text fontSize="xs">Software Developer intern</Text>
              <Text color="#98A2B3" fontSize="8px">
                Triaged multiple tasks and competing priorities in servicing requests from senior managers.
                <br />
                Reviewed and made refinements in existing programs to improve techniques.
              </Text>
            </Box>
          </Box>
        </Flex>
      )}
    </Box>
  );
};
