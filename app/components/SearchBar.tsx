"use client";

import { Center, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { SearchManufacturer } from ".";

export const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");

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
      mb='-4'
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
          setManufacturer={manufacturer}
        />
      </Flex>
    </Flex>
  );
};
