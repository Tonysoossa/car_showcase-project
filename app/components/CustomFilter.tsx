import { CustomFilterProps } from "@/types";
import { Box, Flex } from "@chakra-ui/react";
import React from "react";

export const CustomFilter = ({ title }: CustomFilterProps) => {
  return <Flex>{title}</Flex>;
};
