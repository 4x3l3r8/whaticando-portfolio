/* eslint-disable jsx-a11y/alt-text */
import { Box, Button, Center, Container, HStack, Stack, Text } from "@chakra-ui/react";

import { Assets, FlyingArrow, RollingImage } from "../shared";
import { useMemo } from "react";

export const Hero = () => {
  const YOE = useMemo(() => {
    const careerStartDate = new Date("2020-11-01"); // Adjust to your actual start date
    const today = new Date();
    const experienceYears = ((Number(today) - Number(careerStartDate)) / (1000 * 60 * 60 * 24 * 365)).toFixed(1);
    return experienceYears;
  }, []);

  return (
    <Container maxW={"7xl"} mt={{ md: 150 }} pos={"relative"} display={"flex"} flexDir={{ base: "column", md: "row" }} alignItems={"center"}>
      <Stack
        color="white"
        // width="50%"
        gap={4}
        flex={6}
        // order={{ base: 2, md: 1 }}
        fontFamily={"Josefin Sans Variable"}
        alignItems={{ base: "center", md: "start" }}
      >
        <Box
          display={"flex"}
          flexDir={"column"}
          alignItems={{ base: "center", md: "start" }}
          fontWeight={"bold"}
          fontSize={{ base: "xl", md: "4xl", lg: "5xl", xl: "6xl" }}
        >
          <Text>Hello, I am</Text>
          <Text>
            Daniel{" "}
            <Text as="span" color="blue.200">
              Adesanya
            </Text>
          </Text>
        </Box>
        <Text fontSize={{ base: "sm", md: "lg", lg: "xl", xl: "2xl" }} mr={{ base: "6", md: "none" }} textAlign={{ base: "center", md: "start" }}>
          a passionate and dedicated software developer with over {YOE} years of experience in building high-quality web and mobile applications. 👨‍💻
        </Text>
        <HStack>
          <Button size={"lg"}>Say Hi 👋</Button>
          <Button size={"lg"} variant={"outline"} colorScheme="white">
            Discover my works
          </Button>
        </HStack>
      </Stack>
      <Center flex={5} pos={"relative"}>
        <RollingImage />
        <Assets />
      </Center>
      <FlyingArrow />
    </Container>
  );
};
