import { Box, Text } from "@chakra-ui/react"
import { Marquee } from "../shared"

const skillset = ["ReactJS", "TypeScript", "NodeJS", "Chakra UI", "PostgresQL", "ASP.Net"]

export const ToolsMarquee = () => {
    return (
        <Box w={"100vw"} bg={"#006CCF"} pos={"relative"} h={"113px"} rounded={"2xl"} mt={28} display={"flex"} flexDir={"column"} justifyContent={"center"} overflow={"hidden"}>
            <Marquee>
                <Text fontSize="3xl" fontWeight="500" mr={4}>
                    {skillset.join(" ⭐ ")} ⭐
                </Text>
                <Text fontSize="3xl" fontWeight="500" mr={4}>
                    {skillset.join(" ⭐ ")}
                </Text>
            </Marquee>
        </Box>
    )
}
