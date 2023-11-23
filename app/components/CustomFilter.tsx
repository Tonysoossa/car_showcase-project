"use client";

import { CustomFilterProps } from "@/types";
import {
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import React, { useState, Fragment } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

export const CustomFilter = ({ title, options }: CustomFilterProps) => {
  return (
    <Flex w="fit-content">
      <Menu>
        <Box position="relative" w="fit-content" zIndex="10">
          <MenuButton as={Button} pt="3" >
            {title} <ChevronDownIcon />
            <MenuItem></MenuItem>
          </MenuButton>
        </Box>
      </Menu>
    </Flex>
  );
};
