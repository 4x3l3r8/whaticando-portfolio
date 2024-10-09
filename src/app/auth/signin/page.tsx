import { SignInForm } from "@/app/_components/auth"
import { Navigate } from "@/app/_components/shared"
import { getServerAuthSession } from "@/server/auth"
import { Card, CardBody, CardHeader, Center, Heading } from "@chakra-ui/react"
import { getProviders } from "next-auth/react"

export default async function SignInPage(props: {
    searchParams: { callbackUrl: string | undefined }
}) {
    const providers = await getProviders()
    const session = await getServerAuthSession()

    if (session) {
        return <Navigate to="/" />
    }

    return (
        <Center flexDir={"column"} gap={2} h={"100vh"}>
            <Card fontFamily={"work"} w={"xl"}>
                <CardHeader>
                    <Heading textAlign={"center"}>Login</Heading>
                </CardHeader>
                <CardBody display={"flex"} flexDir={"column"} gap={2}>
                    <SignInForm providers={providers} callbackUrl={"/dashboard"} />
                </CardBody>
            </Card>
        </Center>
    )
}