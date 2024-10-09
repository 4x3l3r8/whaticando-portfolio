/* eslint-disable jsx-a11y/alt-text */
import { Box, Button, Center, Container, HStack, Stack, Text } from "@chakra-ui/react";

import { Assets, FlyingArrow, RollingImage } from "../shared";





export const Hero = () => {
    return (
        <Container maxW={"7xl"} mt={150} pos={"relative"} display={"flex"} flexDir={{ base: "column", md: "row" }} alignItems={"center"}>
            <Stack
                color="white"
                // width="50%"
                gap={4}
                flex={6}
                // order={{ base: 2, md: 1 }}
                fontFamily={"Josefin Sans Variable"}
            >
                <Box fontWeight={"bold"} fontSize={{ base: "xl", md: "4xl", lg: "5xl", xl: "6xl" }}>
                    <Text>Hello, I am a</Text>
                    <Text>
                        Daniel {" "}
                        <Text as="span" color="blue.200">
                            Adesanya
                        </Text>
                    </Text>
                </Box>
                <Text fontSize={{ base: "sm", md: "lg", lg: "xl", xl: "2xl" }} mr={{ base: "6", md: "none" }}>
                    a passionate and dedicated software developer with over 3 years of
                    experience in building high-quality web and mobile applications. 👨‍💻
                </Text>
                <HStack>
                    <Button size={"lg"}>Say Hi 👋</Button>
                    <Button size={"lg"} variant={"outline"} colorScheme="white">Discover my works</Button>
                </HStack>
            </Stack>
            <Center flex={5} pos={"relative"}>
                <RollingImage />
                <Assets />
            </Center>
            <FlyingArrow />
        </Container>
    );
}