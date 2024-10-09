import { getServerAuthSession } from "@/server/auth";
import { AuthLayout } from "./AuthLayout";
import { Navigate } from "../_components/shared";

export default async function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    const session = await getServerAuthSession()

    if (session)
        return (
            <AuthLayout session={session}>
                {children}
            </AuthLayout>
        )
    else
        return <Navigate to={"auth/signin"} />
}