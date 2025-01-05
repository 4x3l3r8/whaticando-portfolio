import { Box, Button, Center, Heading, Input, InputGroup, InputLeftElement, InputRightElement, Textarea } from "@chakra-ui/react";
import { Mail } from "../shared";

export const ContactSection = () => {
  return (
    <Box
      as="section"
      id="contact"
      display="flex"
      alignItems={"center"}
      pos={"relative"}
      justifyContent={"center"}
      mt="40"
      fontFamily={"Josefin Sans Variable"}
    >
      <Box color="gray" fontWeight="bold" mb="20" textAlign="center">
        <Heading>Have an Awesome Project Idea?</Heading>

        <Heading as="span" color="white">
          Lets Discuss
        </Heading>
        <InputGroup size={"lg"}>
          <InputLeftElement pointerEvents="none">
            <Center bg={"white"} h={"70%"} w={"70%"} rounded={"full"}>
              <Mail fontSize={22} color="primary.300" />
            </Center>
          </InputLeftElement>
          <Input type="email" rounded={"full"} placeholder="Enter Email Address" p={4} pl={"3.5rem"} />
          <InputRightElement>
            <Center bg={"white"} h={"70%"} rounded={"full"} justifyContent={"end"} mr={"1.7rem"}>
              <Button rounded="full">Send</Button>
            </Center>
          </InputRightElement>
        </InputGroup>
        <Textarea placeholder="Leave a message" size="lg" mt={3} resize={"none"} rounded={"xl"} />
      </Box>
    </Box>
  );
};
