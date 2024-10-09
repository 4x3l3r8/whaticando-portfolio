import { Box, Container } from "@chakra-ui/react";
import { Navbar } from "../_components/landingPage/Navbar";
import { Footer, MovingBox1, MovingBox2 } from "../_components/shared";
import { MakeChanges } from "../_components/landingPage/MakeChanges";
import { getServerAuthSession } from "@/server/auth";

export default async function Layout({ children, }: Readonly<{ children: React.ReactNode }>) {
    const session = await getServerAuthSession()
    return (
        <Box w={"full"} minH={"100vh"} overflow={"hidden"} pos={"relative"}>
            <Navbar />
            <MakeChanges session={session} />
            <MovingBox1 />
            <MovingBox2 />
            <Container maxW={"8xl"} mt={4} display={"flex"} flexDir={"column"} alignItems={"center"}>
                {children}
            </Container>
            <Footer />
        </Box>
    )
}