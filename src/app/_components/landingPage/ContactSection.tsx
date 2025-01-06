import { Box, Heading } from "@chakra-ui/react";
import { ContactForm } from "./ContactForm";

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

        <ContactForm />
      </Box>
    </Box>
  );
};
