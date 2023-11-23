"use client";

import Image from "next/image";
import { useState, Fragment } from "react";
import { manufacturers } from "@/constants";
import { SearchManufacturerPorps } from "@/types";
import {
  Box,
  Button,
  Flex,
  Input,
  Text,
  Collapse,
  transition,
  background,
  color,
  BoxProps,
  InputGroup,
  InputRightElement,
  Hide,
} from "@chakra-ui/react";
import { ArrowDownIcon, Search2Icon } from "@chakra-ui/icons";
import { Combobox } from "@headlessui/react";
import { relative } from "path";
import { off } from "process";

export const SearchManufacturer = ({
  manufacturer,
  setManufacturer,
}: SearchManufacturerPorps) => {
  const [query, setQuery] = useState("");
  const [isScroll, setIsScroll] = useState(false);

  const filteredManufacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .startsWith(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <Flex
      as="form"
      position="relative"
      title="search-manufacturer"
      flexGrow="1"
      maxW={{ sm: "full" }}
      flexDirection={{ sm: "column", base: "row" }}
      justifyContent="flex-start"
      alignItems="center"
      listStyleType={"none"}
      autoComplete="off"
    >
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <Box as={Combobox.Button} position="relative" w="full">
          <Box position="absolute" w="20px" h="20px" ml="4" mt="2" top="5">
            <Image
              src="/model-icon.png"
              alt="car model"
              width={35}
              height={35}
            />
          </Box>
          <Input
            as={Combobox.Input}
            type="text"
            position="relative"
            top="3.5"
            h="12"
            pl="4.5rem"
            mb="5"
            rounded="full"
            outline="none"
            cursor="pointer"
            placeholder="Toyota"
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(e) => setQuery(e.target.value)}
            autoComplete="off"
          />
          <Box
            as={Combobox.Options}
            ml="8"
            position="absolute"
            bg="white"
            maxH="15rem"
            boxShadow="dark-lg"
            pl="10"
            rounded="lg"
            overflowY="scroll"
            onScroll={() => {
              setIsScroll(true);
            }}
            width="22rem"
            zIndex="900"
            sx={{ "&::-webkit-scrollbar": { display: "none" } }}
          >
            <ArrowDownIcon
              display={isScroll ? "none" : "flex"}
              position="absolute"
              ml="18rem"
              mt="13.5rem"
            />
            {filteredManufacturers.map((item) => (
              <Flex
                as={Combobox.Option}
                title="search-manufacturer__option"
                key={item}
                value={item}
                mt="1"
                maxH="60"
                w="full"
                overflow="auto"
                rounded="md"
                bg="white"
                py="1"
                shadow="lg"
                ring="1"
                ringColor="black"
                ringOffset="opacity-5"
                outline={{ focus: "none" }}
                textStyle={{ sm: "24rem" }}
                _hover={{
                  w: "8rem",
                  justifyContent: "center",
                  background: "#1e88e5",
                  color: "#f8f9fa",
                  textDecoration: "underline",
                }}
              >
                {item}
              </Flex>
            ))}
          </Box>
        </Box>
      </Combobox>
    </Flex>
  );
};

//NOTE FIX scroll back to top after button submited