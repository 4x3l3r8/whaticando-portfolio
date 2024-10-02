"use client";

import {
    Box,
    Flex,
    Image,
    HStack,
    IconButton,
    useDisclosure,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerHeader,
    DrawerCloseButton,
    DrawerBody,
    Text,
    Button,
    Container,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

const navItems = [
    { name: "Home", path: "/" },
    { name: "Certificate", path: "/certificate" },
    { name: "Experience", path: "/experience" },
    { name: "Project", path: "/project" },
    { name: "Resume", path: "/resume" },
    { name: "Contact", path: "/contact" },
];

const Navbar: React.FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const router = useRouter();
    const pathname = usePathname();
    const [activeItem, setActiveItem] = useState(pathname);

    useEffect(() => {
        setActiveItem(pathname);
    }, [pathname]);

    const handleItemClick = (path: string) => {
        router.push(path);
        setActiveItem(path);
        if (isOpen) onClose();
    };

    return (
        <Box w={"full"} pos={"sticky"} top={{ md: 3 }} zIndex={"modal"}>
            <IconButton
                size={"lg"}
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                aria-label={"Open Menu"}
                variant={"ghost"}
                color={"white"}
                display={{ md: "none" }}
                onClick={isOpen ? onClose : onOpen}
            />
            <Container maxW={"8xl"} px={{ base: 4, xl: 0 }}>
                <Box
                    display={{ base: "none", md: "flex" }}
                    alignItems="center"
                    py={2}
                    px={{ md: 2 }}
                    border={{ base: "none", md: "1px solid white" }}
                    borderRadius={"500px"}
                    bg={"black"}
                    color="white"
                    justifyContent="space-between"
                >
                    {/* First three nav items */}
                    <HStack justifyContent={{ base: "space-between" }} spacing={8}>
                        {navItems.slice(0, 3).map((item, index) => (
                            <Button
                                as={Link}
                                key={index}
                                variant={pathname === item.path ? "solid" : "link"}
                                colorScheme={pathname === item.path ? "primary" : "whiteAlpha"}
                                size={{ lg: "xl" }}
                                isActive={pathname === item.path}
                                color={"white"}
                                py={{ md: 2, lg: 3, xl: 4 }}
                                px={{ md: 2, lg: 4, xl: 8 }}
                                borderRadius="40px"
                                href={item.path}
                                onClick={() => handleItemClick(item.path)}
                            >
                                {item.name}
                            </Button>
                        ))}
                    </HStack>

                    {/* Avatar Image */}
                    <Image
                        alt="avatar"
                        src="/Avatar_v3.png"
                        width={10}
                        height={10}
                        rounded="3xl"
                    />

                    {/* Last three nav items */}
                    <HStack spacing={8}>
                        {navItems.slice(3).map((item, index) => (
                            <Button
                                as={Link}
                                isActive={pathname === item.path}
                                variant={pathname === item.path ? "solid" : "link"}
                                colorScheme={pathname === item.path ? "primary" : "whiteAlpha"}
                                size={{ lg: "xl" }}
                                href={item.path}
                                key={index}
                                py={{ md: 2, lg: 3, xl: 4 }}
                                color={"white"}
                                px={{ md: 2, lg: 4, xl: 8 }}
                                borderRadius="40px"
                                onClick={() => handleItemClick(item.path)}
                            >
                                {item.name}
                            </Button>
                        ))}
                    </HStack>
                </Box>
            </Container>

            <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay>
                    <DrawerContent>
                        <DrawerCloseButton color="black" />
                        <DrawerHeader borderBottomWidth="1px" color={"black"}>
                            Menu
                        </DrawerHeader>
                        <DrawerBody>
                            <Flex direction="column" as={"nav"}>
                                {navItems.map((item, index) => (
                                    <Text
                                        key={index}
                                        cursor="pointer"
                                        fontWeight={activeItem === item.path ? "bold" : "normal"}
                                        bg={activeItem === item.path ? "#006CCF" : "transparent"}
                                        py={4}
                                        px={8}
                                        borderRadius="40px"
                                        onClick={() => handleItemClick(item.path)}
                                    >
                                        {item.name}
                                    </Text>
                                ))}
                            </Flex>
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </Box>
    );
};

export { Navbar };
