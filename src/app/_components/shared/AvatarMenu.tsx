import { api } from "@/trpc/react"
import { Avatar, AvatarBadge, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { type User } from "next-auth"
import { signIn } from "next-auth/react"
import React from "react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

export const AvatarMenu: React.FC<{ user: User }> = ({ user }) => {

    const { data: AccountsList } = api.account.getUserAccounts.useQuery()

    const signedInWithOauth = (provider: string): boolean => {
        return AccountsList?.find((account) => account.provider === provider) ? true : false
    }

    const signInFunc = async (provider: string) => {
        await signIn(provider, { redirectTo: "/dashboard" })
    }

    return (
        <Menu>
            <MenuButton>
                <Avatar src={user.image!} name={user.name!}>
                    <AvatarBadge boxSize='1.25em' bg='green.500' />
                </Avatar>
            </MenuButton>
            <MenuList>
                <MenuItem
                    onClick={async () => {
                        if (!signedInWithOauth("github")) {
                            await signInFunc("github")
                        }
                    }}
                    isDisabled={signedInWithOauth("github")}
                    icon={<FaGithub />}
                >
                    {signedInWithOauth("github") ? "Signed in" : "Sign in with Github"}
                </MenuItem>
                <MenuItem
                    onClick={async () => {
                        if (!signedInWithOauth("linkedin")) {
                            await signInFunc("linkedin")
                        }
                    }}
                    isDisabled={signedInWithOauth("linkedin")}
                    icon={<FaLinkedin />}
                >
                    {signedInWithOauth("linkedin") ? "Signed in" : "Sign in with Linkedin"}
                </MenuItem>
            </MenuList>
        </Menu>
    )
}
