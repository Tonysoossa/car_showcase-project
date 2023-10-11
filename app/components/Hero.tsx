import Image from "next/image";
import { Box, Flex, Spacer, Heading, Text } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Box>
      <Flex
        direction={{ xl: "row", base: "column" }}
        gap="5"
        position="relative"
        zIndex="0"
        maxW="1440px"
        mx="auto"
      >
        <Box flexGrow="1" pt="36" px={{ sm: "16", base: "6" }}>
          <Heading
            as="h1"
            fontSize={{ "2xl": "72px", sm: "64px", base: "50" }}
            fontWeight="extrabold"
          >
            Find, book, or rent a car — quickly and easily!
          </Heading>
          <Text
            fontSize={{ base: "27px" }}
            color="gray.900"
            fontWeight="light"
            mt="5"
          >
            Streamline your car rental experience with our effortless booking
            process.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Hero;

// NOTE text-[27px] text-black-100 font-light mt-5;
//
