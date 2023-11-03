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
} from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { Combobox, Transition } from "@headlessui/react";

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
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <Flex
      title="search-manufacturer"
      flexGrow="1"
      maxW={{ sm: "full" }}
      justifyContent="flex-start"
      alignItems="center"
    >
      <Combobox>
        <Box as={Combobox.Button} position="relative" w="full">
          <Button position="absolute" top="3.5" h="12" p="4" roundedLeft="full">
            <Box pt="0.8">
              <Image
                src="car-logo_toyota.svg"
                alt="Car logo toyota"
                width={28}
                height={28}
              />
            </Box>
          </Button>
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
          />
          <Transition
            // as={Collapse}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Box as={Combobox.Option}>
              {filteredManufacturers.length === 0 && query !== "" ? (
                <Flex
                  as={Combobox.Option}
                  title="search-manufacturer__option"
                  value={query}
                  mt="1"
                  ml="14"
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
                >
                  Create "{query}"
                </Flex>
              ) : (
                filteredManufacturers.map((item) => (
                  <Flex
                    as={Combobox.Option}
                    key={item}
                    value={item}
                    title="search-manufacturer__option"
                    mt="1"
                    ml="4.5rem"
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
                  >
                    {item}
                  </Flex>
                ))
              )}
            </Box>
          </Transition>
        </Box>
      </Combobox>
    </Flex>
  );
};
