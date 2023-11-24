import { Box, Button, ChakraProvider, Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";

import { CustomButton } from "./CustomButton";

export const Navbar = () => {
  return (
    <Box>
      <Heading w="full" flex="absolute" zIndex="10">
        <Flex
          as="nav"
          justify="space-between"
          alignItems="center"
          mx="auto"
          maxW="1440px"
          px={{ sm: "16", base: "6px" }}
          py="4"
        >
          <Image
            src="/logo.svg"
            alt="Car hub logo"
            width={118}
            height={18}
            className="object-contain"
            color="white"
          />
          <CustomButton
            title="Sign In"
            btnType="button"
            rounded="full"
            p="4"
            color="#1e88e5"
            bg="white"
            _hover={{ bg: "#42a5f5", color: "black" }}
          />
        </Flex>
      </Heading>
    </Box>
  );
};


