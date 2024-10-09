"use client"

import { Button } from "@chakra-ui/react"
import { type BuiltInProviderType } from "next-auth/providers/index"
import { signIn, type ClientSafeProvider, type LiteralUnion } from "next-auth/react"
import { Fragment } from "react"


export const SignInForm = ({ providers, callbackUrl }: { providers: Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider> | null, callbackUrl?: string }) => {
    return (
        <>
            {providers && Object.values(providers).map((provider) => (
                <Fragment key={provider.name}>
                    <Button
                        key={provider.name}
                        // className="rounded-"
                        onClick={async () => {
                            await signIn(provider.id, {
                                redirectTo: callbackUrl ?? "",
                            })
                        }}
                        w={"full"}
                    >
                        Continue with {provider.name}
                    </Button>
                </Fragment>
            ))}
        </>
    )
}
