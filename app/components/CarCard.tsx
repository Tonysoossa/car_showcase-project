// "use client"
"use strict";
import { useState } from "react";
import Image from "next/image";
import { CarProps } from "@/types";
import { CustomButton } from ".";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

interface CarCardProps {
  car: CarProps;
}

export const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;
  return (
    <Flex
      as="div"
      title="car-card group"
      flexGrow="1"
      flexDirection="column"
      p="6"
      justifyContent="center"
      alignItems="start"
      _hover={{ bg: "#1e88e5" }}
      rounded="full"
      bg="#f8f9fa"
      shadow={{ base: "md" }}
      boxShadow={"xl"}
      // bg={{ base: "white", shadow: "md" }}
    >
      {/*  hover:bg-white hover:shadow-md rounded-3xl*/}
      <Box
        as="div"
        title="car-card_content"
        flexGrow="1"
        w="full"
        justifyContent="space-between"
        alignItems="start"
        gap="2"
      >
        <h2>
          {make} {model}
        </h2>
      </Box>
      <Text>
        <span>Car rent...</span>
      </Text>
    </Flex>
  );
};
