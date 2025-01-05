"use client";
import { Box, Button, Flex, Icon, Link, Text, VStack } from "@chakra-ui/react";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";
import { IoLogoWhatsapp } from "react-icons/io";

export const Footer = () => {
  const githubUrl = "https://github.com/4x3l3r8";
  const email = "https://calendly.com/danieladesanya25/consult-with-daniel";
  const whatsappUrl = "https://wa.link/6ri9qm";
  const igUrl = "https://www.instagram.com/d.4.n.t.3_/";
  const twitterUrl = "https://x.com/NielAdax";
  const linkedInUrl = "https://www.linkedin.com/in/daniel-adesanya25";

  return (
    <Box bg="#1E1E1E" color="white" pos={"relative"} fontFamily={"Josefin Sans Variable"}>
      <Flex justifyContent="center" alignItems="center" height="100%">
        <Flex justify="space-between" align="center" width="93%" my="6">
          <Text fontWeight="bold" fontSize={{ base: "md", md: "32px" }}>
            Lets Connect there
          </Text>
          <Button bg="#016ACE" borderRadius="3xl" color="white" display="flex" alignItems="center" as={Link} href={email}>
            Hire me{" "}
            <Box ml="2">
              <GoArrowUpRight fontSize="24px" />
            </Box>
          </Button>
        </Flex>
      </Flex>
      <Flex
        mx={{ base: "4", lg: "16" }}
        flexDirection={{ base: "column", lg: "row" }}
        gap="4"
        borderTop={"1px"}
        justifyContent={"space-between"}
        py={6}
      >
        <Box as={Flex} flexDir={"column"} color="white" width={{ base: "", lg: "40%" }} my={"auto"}>
          <Text mb="4" fontSize={"lg"}>
            I am Adesanya Daniel, a dedicated software developer passionate about crafting impactful web experiences. Whether you have a project in
            mind or just want to connect, feel free to reach out!
          </Text>
          <Box display="flex" gap="2" mb="4">
            <Link href={linkedInUrl}>
              <Icon as={FaLinkedin} boxSize={{ base: "6", sm: "8" }} />
            </Link>
            <Link href={whatsappUrl}>
              <Icon as={IoLogoWhatsapp} boxSize={{ base: "6", sm: "8" }} />
            </Link>
            <Link href={igUrl}>
              <Icon as={AiFillInstagram} boxSize={{ base: "6", sm: "8" }} />
            </Link>
            <Link href={twitterUrl}>
              <Icon as={FaTwitter} boxSize={{ base: "6", sm: "8" }} />
            </Link>
          </Box>
        </Box>
        <Flex gap={{ base: "4", lg: "16" }} flexDirection={{ base: "column", lg: "row" }}>
          <Flex justifyContent={{ base: "center", lg: "none" }} flexDir={{ base: "row", lg: "column" }} gap="4">
            {/* Home Link */}
            <Link href="/">
              <Text mb="4" cursor="pointer">
                Home
              </Text>
            </Link>

            {/* Service Link */}
            <Link href="/">
              <Text mb="4" cursor="pointer">
                Service
              </Text>
            </Link>

            {/* Experience Link */}
            <Link href="/#experience">
              <Text mb="4" cursor="pointer">
                Experience
              </Text>
            </Link>

            {/* Project Link */}
            <Link href="/#projects">
              <Text mb="4" cursor="pointer">
                Project
              </Text>
            </Link>
          </Flex>
        </Flex>
        <VStack alignItems={{ base: "center", md: "end" }}>
          <Text color={"#71B9FE"} mb="4">
            Contact
          </Text>
          <Text as={Link} href={"tel:+2348159054097"} mb="4">
            +234 815 905 4097
          </Text>
          <Text mb="4" as={Link} href={githubUrl}>
            https://github.com/4x3l3r8
          </Text>
          <Text mb="4" as={Link} href={email}>
            danieladesanya25@gmail.com
          </Text>
        </VStack>
      </Flex>
      <Box display="flex" alignItems="center" justifyContent="center" borderTop={"1px"} mx={{ base: "8", lg: "16" }}>
        <Text fontSize={{ base: "sm", md: "xl" }} py={4}>
          Copyright © {new Date().getFullYear()} Daniel Adesanya. All Rights Reserved
        </Text>
      </Box>
    </Box>
  );
};
