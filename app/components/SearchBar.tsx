"use client";
import { useRouter } from "next/navigation";
import {
  Box,
  Button,
  ButtonProps,
  Center,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import React, { useState } from "react";
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
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (manufacturer === "" && model === "") {
      return alert("Please fill in the search bar");
    }

    updateSearchParams(
      model.toLocaleLowerCase(),
      manufacturer.toLocaleLowerCase()
    );
  };

  const updateSearchParams = (model: string, manufacturer: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }

    if (manufacturer) {
      searchParams.set("manufacturer", manufacturer);
    } else {
      searchParams.delete("manufacturer");
    }

    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

    router.push(newPathname);
  };

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
        gap="4"
        rowGap="0"
        flexDirection={{ md: "row", base: "column" }}
        flex="1"
        w={{ sm: "full", base: "100%" }}
        maxW="4xl"
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
          <InputGroup>
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
              placeholder="Supra"
              flex="1"
              w={{ sm: "full", base: "100%" }}
              justifyContent="space-between"
              alignItems="center"
              cursor="pointer"
              autoComplete="off"
            ></Input>
            <InputRightElement
              top="1rem"
              pr="2px"
              alignItems="center"
              justifyContent="center"
            >
              <Button roundedRight="full" h="2.9rem">
                <Search2Icon />
              </Button>
            </InputRightElement>
          </InputGroup>
        </Flex>
      </Flex>
    </Flex>
  );
};

// NOTE  flex-1 max-sm:w-full flex justify-start items-center relative;
