/* eslint-disable jsx-a11y/alt-text */
"use client";

import { Box, type BoxProps, chakra, Image, keyframes, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { MdMail } from "react-icons/md";

const morph = keyframes`
    0%  { border-radius: 48% 52% 68% 32% / 42% 28% 72% 58%; background-position: 0% 0%; transform:rotateZ(8deg) }
    5%  { border-radius: 48% 52% 41% 59% / 66% 37% 63% 34%; }
    10% { border-radius: 69% 31% 71% 29% / 67% 31% 69% 33%; }
    15% { border-radius: 60% 40% 71% 29% / 63% 65% 35% 37%; }
    20% { border-radius: 61% 39% 51% 49% / 57% 58% 42% 43%; }
    25% { border-radius: 66% 34% 25% 75% / 47% 30% 70% 53%; }
    30% { border-radius: 32% 68% 38% 62% / 65% 60% 40% 35%; }
    35% { border-radius: 63% 37% 41% 59% / 35% 38% 62% 65%; }
    40% { border-radius: 57% 43% 49% 51% / 55% 71% 29% 45%; }
    45% { border-radius: 47% 53% 34% 66% / 65% 36% 64% 35%; }
    50% { border-radius: 44% 56% 32% 68% / 69% 26% 74% 31%; background-position: 100% 0%; transform:rotateZ(-8deg) }
    55% { border-radius: 28% 72% 37% 63% / 71% 44% 56% 29%; }    
    60% { border-radius: 38% 62% 35% 65% / 74% 53% 47% 26%; }
    65% { border-radius: 73% 27% 46% 54% / 54% 47% 53% 46%; }
    70% { border-radius: 75% 25% 47% 53% / 49% 53% 47% 51%; }
    75% { border-radius: 62% 38% 43% 57% / 55% 60% 40% 45%; }
    80% { border-radius: 41% 59% 65% 35% / 73% 50% 50% 27%; }
    85% { border-radius: 55% 45% 57% 43% / 73% 61% 39% 27%; }
    90% { border-radius: 74% 26% 33% 67% / 40% 65% 35% 60%; }
    95% { border-radius: 58% 42% 57% 43% / 53% 45% 55% 47%; }
    100%{ border-radius: 48% 52% 68% 32% / 42% 28% 72% 58%; background-position: 0% 0%; transform:rotateZ(8deg) }
`;

const animation = `${morph} 34s linear infinite`;

const boxVariants1 = {
  animate: {
    scale: [1, 1.5, 2, 1.4, 1],
    x: [0, 400, -100, 150, 0],
    y: [0, 100, -50, 70, 0],
    rotate: [0, 50, 270, -100, 0],
    borderRadius: ["100%", "70%", "50%", "70%", "100%"],
    transition: {
      duration: 20,
      ease: "easeInOut",
      times: [0, 0.25, 0.5, 0.75, 1],
      repeat: Infinity,
    },
  },
};

const boxVariants2 = {
  animate: {
    scale: [1, 1.5, 2, 1.4, 1],
    rotate: [0, 50, 270, -100, 0],
    x: [0, 100, 200, 150, 0],
    y: [0, 250, 300, 100, 0],
    borderRadius: ["100%", "70%", "50%", "70%", "100%"],
    transition: {
      duration: 20,
      ease: "easeInOut",
      times: [0, 0.25, 0.5, 0.75, 1],
      repeat: Infinity,
      delay: 0.5, // Offset the second animation slightly
    },
  },
};

const MovingBox1 = () => {
  return (
    <Box
      as={motion.div}
      bgImage={"radial-gradient(#0B295B80, #0B285900)"}
      filter={"blur(38px)"}
      left={-24}
      h={600}
      pos={"fixed"}
      rounded={"full"}
      w={600}
      variants={boxVariants1}
      animate="animate"
      zIndex={"0"}
    />
  );
};

const MovingBox2 = () => {
  return (
    <Box
      as={motion.div}
      bgImage={"radial-gradient(#016ACEB2, #0169CD00)"}
      filter={"blur(78px)"}
      right={-24}
      h={1000}
      pos={"fixed"}
      rounded={"full"}
      w={1000}
      variants={boxVariants2}
      animate="animate"
      zIndex={"0"}
    />
  );
};

const RollingImage = () => {
  return (
    <Box
      as={motion.div}
      border="1px solid white"
      w={{ md: 528 }}
      h={{ md: 528 }}
      rounded={"40% 60% 70% 30% / 40% 50% 60% 50%"}
      animation={`${animation}`}
      transitionDelay={"3s"}
      mt={{ base: 5, md: 0 }}
    >
      <Box
        as={motion.div}
        bg={"primary.200"}
        pos={"relative"}
        w={{ md: 528 }}
        h={{ md: 528 }}
        rounded={"40% 60% 70% 30% / 40% 50% 60% 50%"}
        overflow={"hidden"}
        animation={animation}
      >
        {/* asdfasd */}
        <Image h={{ md: "100%" }} src="https://github.com/4x3l3r8.png" />
      </Box>
    </Box>
  );
};

const Marquee: React.FC<{ children: React.ReactNode; speed?: number; pauseOnHover?: boolean }> = ({ children, speed = 20, pauseOnHover = true }) => {
  const [contentWidth, setContentWidth] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setContentWidth(contentRef.current.offsetWidth);
    }
  }, [children]);

  const marquee = keyframes`
      0% { transform: translateX(0); }
      100% { transform: translateX(-${contentWidth}px); }
    `;

  return (
    <Box overflow="hidden" whiteSpace="nowrap" position="relative" transform={"rotate(-3deg)"} bg={"white"}>
      <Box
        display="inline-flex"
        animation={`${marquee} ${speed * (contentWidth / 500)}s linear infinite`}
        _hover={pauseOnHover ? { animationPlayState: "paused" } : {}}
      >
        <Box ref={contentRef} display="inline-flex">
          {children}
        </Box>
        <Box display="inline-flex" ml={8}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

const GlassmorphicCard: React.FC<{ children: React.ReactNode } & BoxProps> = ({ children, ...props }) => {
  const bgColor = useColorModeValue("rgba(255, 255, 255, 0.1)", "rgba(0, 0, 0, 0.1)");
  const borderColor = useColorModeValue("rgba(255, 255, 255, 0.2)", "rgba(255, 255, 255, 0.1)");
  const hoverBgColor = useColorModeValue("rgba(255, 255, 255, 0.2)", "rgba(0, 0, 0, 0.2)");

  return (
    <Box
      bg={bgColor}
      borderRadius="xl"
      border="1px solid"
      borderColor={borderColor}
      backdropFilter="blur(10px)"
      boxShadow="xl"
      padding="6"
      transition="all 0.3s"
      _hover={{
        bg: hoverBgColor,
        transform: "scale(1.02)",
        boxShadow: "2xl",
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

const arrowKeyframes = keyframes`
    0% {top: 0%; left:45%; }
    50% {top:3%; left:43%; }
    100% {top: 0%; left:45%;}
`;

const arrowAnimation = `${arrowKeyframes} 5s linear infinite`;

const FlyingArrow = () => {
  return <Image src="/Arrow.svg" display={{ base: "none", md: "block" }} pos={"absolute"} top={10} left={"45%"} animation={arrowAnimation} />;
};

const Mail = chakra(MdMail);

const Assets = () => {
  const pipeKeyframes = keyframes`
    0% {left:10%; }
    50% {left:20%; }
    100% {left:10%;}
`;
  const pipeAnimation = `${pipeKeyframes} 9s linear infinite`;

  const starKeyframes = keyframes`
    0% {transform:scale(1.0)}
    50% {transform:scale(1.3)}
    100% {transform:scale(1.0)}
`;
  const starAnimation = `${starKeyframes} 3s linear infinite`;

  return (
    <>
      <Image src="/Group 6.svg" display={{ base: "none", md: "block" }} pos={"absolute"} bottom={45} left={10} animation={pipeAnimation} />
      <Image src="/Group 10.svg" display={{ base: "none", md: "block" }} pos={"absolute"} top={5} right={15} animation={starAnimation} />
    </>
  );
};

export { MovingBox1, MovingBox2, RollingImage, Marquee, GlassmorphicCard, arrowAnimation, FlyingArrow, Mail, Assets };
