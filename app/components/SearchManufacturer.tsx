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
} from "@chakra-ui/react";
import { ArrowDownIcon, Search2Icon } from "@chakra-ui/icons";
import { Combobox, Transition } from "@headlessui/react";
import { relative } from "path";
import { off } from "process";

export const SearchManufacturer = ({
  manufacturer,
  setManufacturer,
}: SearchManufacturerPorps) => {
  const [query, setQuery] = useState("");

  const filteredManufacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .startsWith(query.toLowerCase().replace(/\s+/g, ""))
        );

  const [isScroll, setIsScroll] = useState(false);

  return (
    <Flex
      position="relative"
      title="search-manufacturer"
      flexGrow="1"
      maxW={{ sm: "full" }}
      flexDirection={{ sm: "column", base: "row" }}
      justifyContent="flex-start"
      alignItems="center"
    >
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <Box as={Combobox.Button} position="relative" w="full">
          <Box position="absolute" top="2" h="12" p="4">
            <Image
              src="car-logo_toyota.svg"
              alt="Car logo toyota"
              width={28}
              height={28}
            />
          </Box>
          <InputGroup>
            <Input
              as={Combobox.Input}
              top="3.5"
              w="full"
              h="12"
              p="4"
              pl="4.5rem"
              mb="5"
              rounded="full"
              outline="none"
              cursor="pointer"
              placeholder="Toyota"
              displayValue={(manufacturer: string) => manufacturer}
              onChange={(e) => setQuery(e.target.value)}
            ></Input>
            <InputRightElement
              top="1.14rem"
              pr="1px"
              alignItems="center"
              justifyContent="center"
            >
              <Button roundedRight="full" h="2.9rem">
                <Search2Icon />
              </Button>
            </InputRightElement>
          </InputGroup>
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
