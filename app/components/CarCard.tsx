// "use client"
"use strict";
import { useState } from "react";
import Image from "next/image";
import { CarProps } from "@/types";
import { CustomButton } from ".";
import { calculateCarRent } from "@/utils";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { start } from "repl";

interface CarCardProps {
  car: CarProps;
}

export const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;

  const carRent = calculateCarRent(city_mpg, year);

  return (
    <Flex
      as="div"
      title="car-card group"
      flexGrow="1"
      flexDirection="column"
      p="16"
      pt='28px'
      justifyContent="center"
      alignItems="flex-start"
      _hover={{ bg: "#1e88e5" }}
      rounded="3xl"
      // bg="#f8f9fa"
      shadow={{ base: "md" }}
      boxShadow={"xl"}
      bg="white"
    >
      {/*  hover:bg-white hover:shadow-md rounded-3xl*/}
      <Box
        as="div"
        title="car-card_content"
        flexGrow="1"
        w="full"
        justifyContent="space-between"
        alignItems="flex-start"
        gap="2"
      >
        <Heading
          as="h2"
          title="car-card__content-title"
          ml="-10"
          mb='-14px'
          fontSize="[22px]"
          lineHeight="[26px]"
          fontWeight="bold"
          textTransform="capitalize"
        >
          {make} {model}
        </Heading>
      </Box>
      <Text
        display="flex"
        ml="-8"
        flexGrow="1"
        mt="6"
        fontSize="24px"
        fontWeight="extrabold"
      >
        <Box
          as="span"
          display="flex"
          alignItems="flex-start"
          fontSize="14px"
          fontWeight="semibold"
        >
          $
        </Box>
        {carRent}
        <Box
          display="flex"
          as="span"
          alignItems="flex-end"
          fontSize="14px"
          fontWeight="medium"
        >
          /day
        </Box>
      </Text>
      <Box
        as="div"
        position="relative"
        w="full"
        h="40"
        my="3"
        // p='8'
        m='12'
        objectPosition="contain"
      >
        <Image
          src="/hero.png"
          alt="car model"
          width={350}
          height={50}
          objectFit="contain"
        />
      </Box>
    </Flex>
  );
};
