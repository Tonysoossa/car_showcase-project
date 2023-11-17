"use client";

import {
  Box,
  Button,
  ButtonProps,
  Center,
  Flex,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
import { SearchManufacturer } from ".";
import Image from "next/image";
import { Combobox } from "@headlessui/react";

const SearchButton = (props: ButtonProps) => {
  return (
    <Button type="submit" ml="-3" zIndex="10" {...props}>
      <Image
        src="/magnifying-glass.svg"
        alt="magnifying glass"
        width={40}
        height={40}
      />
    </Button>
  );
};

export const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");

  const handleSearch = () => {};

  return (
    <Flex
      as="form"
      position="relative"
      title="searchbar"
      alignItems="center"
      justifyContent="flex-start"
      flexGrow="1"
      w="full"
      gap={{ sm: "4", base: "1" }}
      maxW={{ "3xl": "48rem" }}
      onSubmit={handleSearch}
      listStyleType={"none"}
      mb="-4"
      autoComplete="off"
    >
      <Flex
        title="searchbar_item"
        flexDirection={{ md: "row", base: "column" }}
        // flexDirection="column"
        flex="1"
        w={{ sm: "full", base: "100%" }}
        position="relative"
      >
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <Flex
          flexGrow="1"
          maxW={{ base: "100%", sm: "full" }}
          justifyContent="space-between"
          alignItems="center"
          position="relative"
        >
          <Box position="absolute" w="20px" h="20px" ml="4" mt="2">
            <Image
              src="/model-icon.png"
              alt="car model"
              width={35}
              height={35}
            />
          </Box>
          <Input
            type="text"
            position="relative"
            top="3"
            h="12"
            pl="4rem"
            mb="4"
            rounded="full"
            name="model"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            placeholder="Tiguan"
            flex="1"
            w={{ sm: "full", base: "100%" }}
            justifyContent="space-between"
            alignItems="center"
            cursor="pointer"
          ></Input>
        </Flex>
      </Flex>
    </Flex>
  );
};

// NOTE  flex-1 max-sm:w-full flex justify-start items-center relative;
