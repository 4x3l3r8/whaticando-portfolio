"use client"

import { Box, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

export const Bg = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    const bg = useColorModeValue("#11071F", "#11071F")
    return (
        <Box w={"100vw"} overflowX={"hidden"} bg={bg}>{children}</Box>
    )
}