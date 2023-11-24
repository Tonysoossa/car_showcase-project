"use client";
import { Box, Button, Flex, Input } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import React, {
  Dispatch,
  FormEventHandler,
  SetStateAction,
  useState,
} from "react";
import { SearchManufacturer } from ".";
import Image from "next/image";

export const SearchBar = ({
  setManufacturer,
  setModel,
}: {
  setManufacturer: Dispatch<SetStateAction<any>>;
  setModel: Dispatch<SetStateAction<any>>;
}) => {
  const [searchManufacturer, setSearchManufacturer] = useState("");
  const [searchModel, setSearchModel] = useState("");

  const handleSearch: FormEventHandler = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (searchManufacturer === "" && searchModel === "") {
      return alert("Please fill in the search bar");
    }

    setModel(searchModel);
    setManufacturer(searchManufacturer);
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
          selected={searchManufacturer}
          setSelected={setSearchManufacturer}
        />
        <Flex
          flexGrow="1"
          maxW={{ base: "100%", sm: "full" }}
          justifyContent="space-between"
          alignItems="center"
          position="relative"
        >
          <Box position="absolute" top="3.5" h="12" p="4" opacity="65%">
            <Image
              src="/handwheel.png"
              alt="Car logo toyota"
              width={18}
              height={18}
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
            outline="none"
            cursor="pointer"
            placeholder="Supra"
            onChange={(e) => setSearchModel(e.target.value)}
            value={searchModel}
          />
          {/* Search button NOTE  */}
          <Button
            type="submit"
            display="flex"
            position="relative"
            ml="2"
            mt="2"
            rounded="3xl"
            w="4rem"
            h="3rem"
          >
            <Search2Icon w="2rem" />
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};
