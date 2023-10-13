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
          // title="hero_image-container" NOTE
          flex={{ xl: "1.5" }}
          justify="flex-end"
          alignItems="end"
          w="full"
          h={{ xl: "100vh" }}
        >
          <Box
            // title="hero_image" NOTE
            position="relative"
            w={{ xl: "full" }}
            width="90%"
            h={{ xl: "full" }}
            height="590px"
            zIndex="0"
          >
            {" "}
            <Image
              src="/hero.png"
              alt="hero"
              layout="fill"
              objectFit="contain"
            />
            <Box
              // title="hero_image-overlay" NOTE
              position="absolute"
              top={{ xl: "-24" }}
              right={{ xl: "-50%", base: "-25%" }}
              bgImage="url('/hero-bg.png')"
              bgRepeat="round"
              zIndex="-10"
              w="full"
              h={{ xl: "100vh", base: "590px" }}
              overflow="hidden" 
            ></Box>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Hero;

// NOTE absolute xl:-top-24 xl:-right-1/2 -right-1/4 bg-hero-bg bg-repeat-round -z-10 w-full xl:h-screen h-[590px] overflow-hidden;
//
