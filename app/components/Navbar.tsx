import { Box, Button, ChakraProvider, Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";

import { CustomButton } from "./CustomButton";

export const Navbar = () => {
  return (
    <Box>
      <Heading w="full" flex="absolute" zIndex="10">
        {/* NOTE "w-full absolute z-10 " */}
        <Flex
          as="nav"
          justify="space-between"
          alignItems="center"
          mx="auto"
          maxW="1440px"
          px={{ sm: "16", base: "6px" }}
          py="4"
        >
          {/* NOTE "max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4" */}
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
            color="blue.400"
            bg="white"
            p="5"
          />
        </Flex>
      </Heading>
    </Box>
  );
};

// NOTE "max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4"

// principal car image doesnt moove to the right (hero menu) and the 'sign in' button isnt in the right place too
