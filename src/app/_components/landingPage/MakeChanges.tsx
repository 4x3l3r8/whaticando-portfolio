"use client"
import { env } from "@/env"
import { Avatar, Icon, IconButton } from "@chakra-ui/react"
import Cookie from "js-cookie"
import { type Session } from "next-auth"
import Link from "next/link"
import { IoIosLogIn } from "react-icons/io"

export const MakeChanges: React.FC<{ session: Session | null }> = ({ session }) => {

    //check auth cookie
    const authCookie = Cookie.get(env.NEXT_PUBLIC_KEY)

    if (session) {
        return <Avatar as={Link} href={"/dashboard"} size={"xs"} src={session.user.image!} name={session.user.name!} pos={"fixed"} top={1} right={1} />
    }

    if (authCookie && authCookie === env.NEXT_PUBLIC_VALUE)
        return (
            <IconButton as={Link} href={"auth/signin"} icon={<Icon as={IoIosLogIn} />} variant={"ghost"} size={"sm"} rounded={"full"} aria-label="get in" pos={"fixed"} top={1} right={1} />
        )
}
