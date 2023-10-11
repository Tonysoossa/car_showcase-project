"use client";
import Image from "next/image";
import { Box, Flex, Spacer, Heading, Text } from "@chakra-ui/react";
import { CustomButton } from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {};
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
          <CustomButton
            title="Explore Cars"
            bg="blue.400"
            fontStyle="white"
            rounded="full"
            mt="10"
            handleClick={handleScroll}
          />
        </Box>
        <Flex
          title="hero_image-container"
          flex={{ xl: "1.5" }}
          justify="flex-end"
          alignItems="end"
          w="full"
          h={{ xl: "100vh" }}
        >
          <Box
            title="hero_image"
            position="relative"
            w={{ xl: "full" }}
            width="90%"
            h={{ xl: "full" }}
            height="590px"
            zIndex="0"
          >
            {" "}
            <Image src={} />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Hero;

// NOTE relative xl:w-full w-[90%] xl:h-full h-[590px] z-0;
//
