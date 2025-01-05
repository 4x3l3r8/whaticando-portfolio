import { Box, Flex, Image, Text } from "@chakra-ui/react";

export const StackSection = () => {
  return (
    <Box p={4} pos={"relative"} mt={{ base: 12, md: 48 }}>
      <Box display="flex" flexDirection={["column"]} alignItems="center" justifyContent="center" height="100%">
        {/* <Box maxWidth="600px" mb={4} mt={{ base: 20, md: 32 }}> */}
        <Text fontSize={{ base: "sm", md: "xl" }} fontFamily="Preahvihear" textAlign={"center"} color="white" fontWeight="medium">
          I am a dedicated and passionate Full Stack Developer with a strong foundation in both frontend and backend technologies. With a
          comprehensive understanding of the full software development lifecycle, I thrive on creating efficient, scalable, and user-friendly
          applications.
        </Text>
        {/* </Box> */}
        <Flex gap="4" mt="4">
          <Box
            bg="#251C31"
            mb="4"
            rounded="3xl"
            width={{ base: "8", md: "10", lg: "14" }}
            height={{ base: "8", md: "10", lg: "14" }}
            display="flex"
            alignItems="center"
            justifyContent={"center"}
          >
            <Image alt="avatar" src="/Rectangle 2.png" width={{ base: "6", md: "8", lg: "12" }} objectFit="cover" />
          </Box>
          <Box
            bg="#251C31"
            mb="4"
            rounded="3xl"
            width={{ base: "8", md: "10", lg: "14" }}
            height={{ base: "8", md: "10", lg: "14" }}
            display="flex"
            alignItems="center"
            justifyContent={"center"}
          >
            <Image alt="avatar" src="/Rectangle 6.png" width={{ base: "6", md: "8", lg: "10" }} objectFit="cover" />
          </Box>
          <Box
            bg="#251C31"
            mb="4"
            rounded="3xl"
            width={{ base: "8", md: "10", lg: "14" }}
            height={{ base: "8", md: "10", lg: "14" }}
            display="flex"
            alignItems="center"
            justifyContent={"center"}
          >
            <Image alt="avatar" src="/Rectangle 7.png" width={{ base: "6", md: "8", lg: "10" }} objectFit="cover" />
          </Box>
          <Box
            bg="#251C31"
            mb="4"
            rounded="3xl"
            width={{ base: "8", md: "10", lg: "14" }}
            height={{ base: "8", md: "10", lg: "14" }}
            display="flex"
            alignItems="center"
            justifyContent={"center"}
          >
            <Image alt="avatar" src="/Rectangle 9.png" width={{ base: "6", md: "8", lg: "10" }} objectFit="cover" />
          </Box>
          <Box
            bg="#251C31"
            mb="4"
            rounded="3xl"
            width={{ base: "8", md: "10", lg: "14" }}
            height={{ base: "8", md: "10", lg: "14" }}
            display="flex"
            alignItems="center"
            justifyContent={"center"}
          >
            <Image alt="avatar" src="/c-sharp.png" width={{ base: "6", md: "8", lg: "10" }} objectFit="cover" />
          </Box>
          <Box
            bg="#251C31"
            mb="4"
            rounded="3xl"
            width={{ base: "8", md: "10", lg: "14" }}
            height={{ base: "8", md: "10", lg: "14" }}
            display="flex"
            alignItems="center"
            justifyContent={"center"}
          >
            <Image alt="avatar" src="/tailwind-css.png" width={{ base: "6", md: "8", lg: "10" }} objectFit="cover" />
          </Box>
        </Flex>
        <Flex gap="4">
          <Box
            bg="#251C31"
            rounded="3xl"
            width={{ base: "8", md: "10", lg: "14" }}
            height={{ base: "8", md: "10", lg: "14" }}
            display="flex"
            alignItems="center"
            justifyContent={"center"}
          >
            <Image alt="avatar" src="/typescript.png" width={{ base: "6", md: "8", lg: "10" }} objectFit="cover" />
          </Box>
          <Box
            bg="#251C31"
            rounded="3xl"
            width={{ base: "8", md: "10", lg: "14" }}
            height={{ base: "8", md: "10", lg: "14" }}
            display="flex"
            alignItems="center"
            justifyContent={"center"}
          >
            <Image alt="avatar" src="/Rectangle 8.png" width={{ base: "6", md: "8", lg: "10" }} objectFit="cover" />
          </Box>
          <Box
            bg="#251C31"
            rounded="3xl"
            width={{ base: "8", md: "10", lg: "14" }}
            height={{ base: "8", md: "10", lg: "14" }}
            display="flex"
            alignItems="center"
            justifyContent={"center"}
          >
            <Image alt="avatar" src="/chakra-ui.png" width={{ base: "6", md: "8", lg: "10" }} objectFit="cover" />
          </Box>
          <Box
            bg="#251C31"
            rounded="3xl"
            width={{ base: "8", md: "10", lg: "14" }}
            height={{ base: "8", md: "10", lg: "14" }}
            display="flex"
            alignItems="center"
            justifyContent={"center"}
          >
            <Image alt="avatar" src="/graphql.png" width={{ base: "6", md: "8", lg: "10" }} objectFit="cover" />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
