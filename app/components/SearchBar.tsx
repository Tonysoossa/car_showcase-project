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
      title="searchbar"
      alignItems="center"
      justifyContent="flex-start"
      flexGrow="1"
      w="full"
      position="relative"
      flexDirection={{ sm: "column", base: "row" }}
      gap={{ sm: "4", base: "1" }}
      maxW={{ "3xl": "48rem" }}
      onSubmit={handleSearch}
      listStyleType={"none"}
      mb="-4"
    >
      <Flex
        title="searchbar_item"
        flex="1"
        w={{ sm: "full", base: "100%" }}
        justifyContent="flex-start"
        alignItems="center"
        position="relative"
      >
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />

        <SearchButton mt="10px" display={{ sm: "hidden" }} />
        <Flex
          flexGrow="1"
          pt="1"
          maxW={{ base: "100%", sm: "full" }}
          justifyContent="flex-start"
          alignItems="center"
          position="relative"
        >
          <Box position="absolute" w="20px" h="20px">
            <Image
              src="/model-icon.png"
              alt="car model"
              width={25}
              height={25}
            />
          </Box>
          <Input
            type="text"
            rounded="full"
            name="model"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            placeholder="Tiguan"
            flex="1"
            w={{ sm: "full", base: "100%" }}
            justifyContent="flex-start"
            alignItems="center"
            position="relative"
          ></Input>
        </Flex>
      </Flex>
    </Flex>
  );
};

// NOTE  flex-1 max-sm:w-full flex justify-start items-center relative;
