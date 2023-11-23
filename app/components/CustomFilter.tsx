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
  position,
} from "@chakra-ui/react";
import React, { useState, Fragment } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChevronDownIcon } from "@chakra-ui/icons";

export const CustomFilter = ({ title, options }: CustomFilterProps) => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <Flex w="fit-content" maxW='48'>
      <Menu>
        {({ isOpen }) => (
          <>
            <MenuButton
              isActive={isOpen}
              as={Button}
              rightIcon={<ChevronDownIcon />}
            >
              {isOpen ? "Close" : selected.title}
            </MenuButton>
            <MenuList>
              {options.map((el) => (
                <MenuItem
                  key={el.value}
                  value={el.value}
                  onClick={() => setSelected(el)}
                  w='6rem'
                  rounded='xl'
                  _hover={{
                    justifyContent: "center",
                    background: "#1e88e5",
                    color: "#f8f9fa",
                    textDecoration: "underline",
                  }}
                >
                  {el.title}
                </MenuItem>
              ))}
            </MenuList>
          </>
        )}
      </Menu>
    </Flex>
  );
};
