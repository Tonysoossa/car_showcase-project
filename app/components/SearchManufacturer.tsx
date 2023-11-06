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
import { relative } from "path";

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

  const hoverBg = {
    background: "#1e88e5",
    color: "#ffffff",
  };

  return (
    <Flex
      position="relative"
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

          <Box as={Combobox.Options} ml="4.5rem">
            {filteredManufacturers.map((item) => (
              <Flex
                as={Combobox.Option}
                key={item}
                value={item}
                title="search-manufacturer__option"
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
                _hover={hoverBg}
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
