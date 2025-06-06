"use client";
import { Box, Circle, Flex, Step, StepDescription, StepIndicator, StepStatus, StepTitle, Stepper, useSteps } from "@chakra-ui/react";

const steps = [
  { title: "", description: "" },
  { title: "", description: "" },
  { title: "", description: "" },
];

export default function Steper() {
  const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  });

  return (
    <Flex height={{ md: "400px" }}>
      <Stepper
        index={activeStep}
        orientation="vertical"
        height={{ base: "100px", md: "370px", lg: "360px", xl: "500px" }}
        gap="0"
        position="relative"
      >
        {steps.map((step, index) => (
          <Step key={index}>
            <StepIndicator>
              <StepStatus
                complete={<Circle size={{ base: "12px", xl: "24px" }} bg="blue.500" border="2px solid white" />}
                incomplete={<Circle size={{ base: "12px", xl: "24px" }} bg="blue.500" border="2px solid white" />}
                active={<Circle size={{ base: "12px", md: "24px" }} bg="gray.700" border="2px solid white" />}
              />
            </StepIndicator>

            <Box flexShrink="0">
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </Box>

            {index < steps.length - 1 && (
              <Box
                borderLeft="2px dashed white"
                height={{ base: "none", md: "130px", lg: "125px", xl: "205px" }}
                position="absolute"
                left="40%"
                transform="translateX(-50%)"
                top="35px"
              />
            )}
          </Step>
        ))}
      </Stepper>
    </Flex>
  );
}
