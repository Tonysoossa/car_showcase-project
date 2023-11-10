"use strict";
// "use client";
import { useState } from "react";
import Image from "next/image";
import rightArrow from "public/right-arrow.svg";
import { CarProps } from "@/types";
import { CustomButton } from "./CustomButton";
import { calculateCarRent } from "@/utils";
import { Box, Flex, Heading, Icon, Text } from "@chakra-ui/react";

interface CarCardProps {
  car: CarProps;
}

export const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;

  const carRent = calculateCarRent(city_mpg, year);

  return (
    <Flex
      as="div"
      title="car-card"
      role="group"
      flexGrow="1"
      flexDirection="column"
      p="16"
      pt="28px"
      justifyContent="center"
      alignItems="flex-start"
      _hover={{ bg: "#42a5f5" }}
      transition="all ease 350ms"
      rounded="3xl"
      shadow={{ base: "md" }}
      boxShadow={"xl"}
      bg="white"
      pb="28px"
    >
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
          mb="-14px"
          fontSize="22px"
          lineHeight="26px"
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
        visibility="hidden"
        _groupHover={{ visibility: "visible" }}
      >
        <Box
          as="span"
          display="flex"
          alignItems="flex-start"
          fontSize="14px"
          fontWeight="semibold"
          visibility="hidden"
          _groupHover={{ visibility: "visible" }}
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
          visibility="hidden"
          _groupHover={{ visibility: "visible" }}
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
        m="12"
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
      <Box display="flex" flexGrow="1" position="relative" w="full" mt="2">
        <Box
          display="flex"
          flexGrow="1"
          w="full"
          justifyContent="space-between"
          color="gray"
          pt="5"
          pl="4"
          pr="4"
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="2"
          >
            <Image
              src="/steering-wheel.svg"
              width={20}
              height={20}
              alt="steering wheel"
            />
            <Text fontSize="16px">
              {transmission === "a" ? "Auto" : "Manual"}
            </Text>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="2"
          >
            <Image src="/tire.svg" width={20} height={20} alt="tire" />
            <Text fontSize="16px">{drive.toUpperCase()}</Text>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="2"
          >
            <Image src="/gas.svg" width={20} height={20} alt="gas" />
            <Text fontSize="16px">{city_mpg} MPG </Text>
          </Box>
        </Box>
        <Flex
          position="absolute"
          display="none"
          _groupHover={{ display: "flex" }}
          w="full"
          zIndex="10"
          bottom="0"
          pt="28px"
        >
          <CustomButton
            title="View More"
            w="full"
            py="30px"
            rounded="full"
            bg="#42a5f5"
            _hover={{ bg: "#1e88e5" }}
            boxShadow="dark-lg"
            color="white"
            fontSize="18px"
            fontWeight="bold"
            rightIcon={<Icon as={rightArrow} />} //NOTE Import chakra icon
          />
        </Flex>
      </Box>
    </Flex>
  );
};
