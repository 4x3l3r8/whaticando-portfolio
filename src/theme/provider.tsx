"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./config";

export function Theme({ children }: { children: React.ReactNode }) {
    return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
