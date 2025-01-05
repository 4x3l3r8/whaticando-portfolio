import { Box } from "@chakra-ui/react";

export default async function Resume() {
  return (
    <Box w={"100%"}>
      <Box pos={"relative"} zIndex={"1"} mx={"auto"} w={{ lg: "40%" }} my={4}>
        <Box
          as={"iframe"}
          w={"full"}
          //   pos={"absolute"}
          src="https://drive.google.com/file/d/1DW_M8WeHG2Ksc6TtByr3CVofKA6aUX6r/preview"
          minH={600}
          h={"fit-content"}
        ></Box>
      </Box>
    </Box>
  );
}
