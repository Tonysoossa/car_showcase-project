"use client";
import Image from "next/image";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { CustomButton } from "./CustomButton";

export const Hero = () => {
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
        <Box flexGrow="1" pt="3rem" px={{ sm: "16", base: "6" }}>
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
            mt="7"
          >
            Streamline your car rental experience with our effortless booking
            process.
          </Text>
          <CustomButton
            title="Explore Cars"
            bg="#1e88e5"
            color="white"
            _hover={{ bg: "#42a5f5", color: "black" }}
            rounded="full"
            mt="10"
            padding="5"
            handleClick={handleScroll}
          />
        </Box>
        <Flex
          title="hero_image-container"
          flexGrow={{ xl: "1.5" }}
          justify="flex-end"
          alignItems="flex-end"
          w="full"
          h={{ xl: "100vh" }}
        >
          <Box
            title="hero_image"
            position="relative"
            width={{ base: "60%", xl: "65%", "2xl": "70%" }}
            mb={{ base: "13px", xl: "67px" }}
            h={{ xl: "full" }}
            height="590px"
            zIndex="0"
          >
            <Image
              src="/png_thumbs.png"
              alt="hero"
              layout="fill"
              objectFit="contain"
            />
          </Box>
          <Box
            title="hero_image-overlay"
            position="absolute"
            top={{ xl: "-24" }}
            right={{ xl: "-50%", base: "-25%" }}
            bgImage="url('/hero-bg.png')"
            bgRepeat="round"
            zIndex="-10"
            w="full"
            h={{ xl: "100vh", base: "590px" }}
            overflow="hidden"
            transform={"rotate(1.8deg)"}
          />
        </Flex>
      </Flex>
    </Box>
  );
};
