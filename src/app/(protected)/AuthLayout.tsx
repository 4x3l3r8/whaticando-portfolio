"use client"

import { Box, Flex, HStack, Heading, IconButton, List, ListIcon, ListItem, type ListItemProps, Stack, Text, useColorModeValue, useDisclosure } from '@chakra-ui/react'
import { type Session } from "next-auth"
import { AiOutlineDashboard, AiOutlineFolderOpen, AiOutlineSetting, AiOutlineUserSwitch } from 'react-icons/ai'
import { BiLogOut, BiMenu } from 'react-icons/bi'
import { RiTodoLine } from 'react-icons/ri'
import { AvatarMenu } from '../_components/shared'
import { signOut } from 'next-auth/react'

type ListItem = {
    text?: string
    icon: React.ElementType
} & ListItemProps

const listItems: ListItem[] = [
    {
        text: 'Dashboard',
        icon: AiOutlineDashboard,
    },
    {
        text: 'Settings',
        icon: AiOutlineSetting,
    },
    {
        text: 'Users',
        icon: AiOutlineUserSwitch,
    },
    {
        text: 'Tasks',
        icon: RiTodoLine,
    },
    {
        text: 'Folder',
        icon: AiOutlineFolderOpen,
    },
]

/**
 * The default layout for authenticated routes.
 *
 * This component renders a navigation bar and a sidebar with the given children as the main content.
 *
 * @param children - The main content of the page.
 */
export function AuthLayout({ children, session }: Readonly<{ children: React.ReactNode, session: Session }>) {
    const { getButtonProps, isOpen } = useDisclosure()
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const buttonProps = getButtonProps()

    return (
        <>
            <Flex as="nav" alignItems="center" justifyContent="space-between" h='16' py='2.5' pr="2.5">
                <HStack spacing={2}>
                    <IconButton {...buttonProps} _active='none' colorScheme="whiteAlpha" _focus='none' _hover='none' fontSize="18px" variant='ghost' icon={<BiMenu />} aria-label='open menu' />
                    <Heading as='h1' size="md" color={"white"}>{"WhatICanDo"}</Heading>
                </HStack>
                <HStack spacing="3">
                    {/* <IconButton variant="ghost" isRound={true} size="lg" aria-label='earth icon' icon={<IoEarthOutline />} /> */}
                    <Text color={"primary.50"} fontWeight={"bold"}>Hi, {session.user.name}!</Text>
                    <AvatarMenu user={session.user} />
                </HStack>
            </Flex>
            <HStack align="start" spacing={0}>
                <Box as="aside" minH="calc(100vh - var(--chakra-sizes-16))" w={isOpen ? 72 : 12} borderRight="2px" borderColor={useColorModeValue('gray.200', 'gray.900')} transition="width 0.25s ease">
                    <Stack as={List} h={"calc(100vh - var(--chakra-sizes-16))"} spacing={3} p="0.5">
                        {
                            listItems.map(item => (<ListElement key={item.text} icon={item.icon} text={isOpen ? item.text : ''} />))
                        }
                        <ListElement onClick={async () => { await signOut() }} icon={BiLogOut} text={isOpen ? 'Logout' : ""} mt={"auto"} />
                    </Stack>
                </Box>
                <Flex as="main" w='full' minH="calc(100vh - var(--chakra-sizes-16))" bg={useColorModeValue('gray.50', 'gray.900')}>
                    {children}
                </Flex>
            </HStack>
        </>
    )
}

const ListElement = ({ icon, text, ...rest }: ListItem) => {
    return (
        <ListItem as={HStack} spacing={0} h="10" pl="2.5" color={"primary.100"} cursor="pointer" _hover={{ bg: useColorModeValue('gray.50', 'gray.700'), color: "primary.600" }} rounded="md" {...rest}>
            <ListIcon boxSize={5} as={icon} />
            {
                text && <Text>{text}</Text>
            }
        </ListItem>
    )
}