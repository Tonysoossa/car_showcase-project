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
import { updateSearchParams } from "@/utils";

export const CustomFilter = ({ title, options }: CustomFilterProps) => {
  const router = useRouter();
  const [selected, setSelected] = useState(options[0]);

  const handleUpdateParams = (e: { title: string; value: string }) => {
    const newPathName = updateSearchParams(title, e.value.toLocaleLowerCase());

    router.push(newPathName);
  };

  return (
    <Flex w="fit-content" maxW="48" pl={{md:'3rem', sm:'2rem'}}>
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
                  onClick={() => {
                    setSelected(el);
                    handleUpdateParams(el);
                  }}
                  w="6rem"
                  rounded="xl"
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
