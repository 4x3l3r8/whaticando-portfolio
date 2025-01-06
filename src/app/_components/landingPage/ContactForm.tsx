"use client";

import { api } from "@/trpc/react";
import { Button, Center, Flex, Icon, Input, InputGroup, InputLeftElement, Textarea } from "@chakra-ui/react";
import { type FormEvent, useState } from "react";
import { FaUser } from "react-icons/fa";
import { Mail, toast } from "../shared";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitForm = api.contact.createContectFormSubmission.useMutation({
    onSuccess: async () => {
      toast({ title: "Form submitted successfully", status: "success" });
      setName("");
      setEmail("");
      setMessage("");
    },
    onError: async () => {
      toast({ title: "Form submission failed", status: "error" });
    },
  });

  const handleSubmit = (e: FormEvent<HTMLDivElement>) => {
    e.preventDefault();
    submitForm.mutate({ name, email, message });
  };

  return (
    <Flex flexDir={"column"} as={"form"} onSubmit={handleSubmit}>
      <InputGroup size={"lg"} mb={3}>
        <InputLeftElement pointerEvents="none">
          <Center bg={"white"} h={"70%"} w={"70%"} rounded={"full"}>
            <Icon as={FaUser} fontSize={20} color="primary.300" />
          </Center>
        </InputLeftElement>
        <Input
          type="text"
          rounded={"full"}
          placeholder="Enter your name"
          p={4}
          pl={"3.5rem"}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {/* <InputRightElement>
      <Center bg={"white"} h={"70%"} rounded={"full"} justifyContent={"end"} mr={"1.7rem"}>
        <Button rounded="full">Send</Button>
      </Center>
    </InputRightElement> */}
      </InputGroup>
      <InputGroup size={"lg"}>
        <InputLeftElement pointerEvents="none">
          <Center bg={"white"} h={"70%"} w={"70%"} rounded={"full"}>
            <Mail fontSize={22} color="primary.300" />
          </Center>
        </InputLeftElement>
        <Input
          type="email"
          rounded={"full"}
          placeholder="Enter Email Address"
          p={4}
          pl={"3.5rem"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* <InputRightElement>
      <Center bg={"white"} h={"70%"} rounded={"full"} justifyContent={"end"} mr={"1.7rem"}>
        <Button rounded="full">Send</Button>
      </Center>
    </InputRightElement> */}
      </InputGroup>
      <Textarea
        placeholder="Leave a message"
        size="lg"
        mt={3}
        resize={"none"}
        rounded={"xl"}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Center mt={3}>
        <Flex
          as={Button}
          bg={"primary.300"}
          color={"white"}
          rounded={"full"}
          isLoading={submitForm.isPending}
          type="submit"
          p={4}
          w={"50%"}
          justifyContent={"center"}
          _hover={{ bg: "primary.400" }}
        >
          Send
        </Flex>
      </Center>
    </Flex>
  );
};
