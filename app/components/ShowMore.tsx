"use client";

import { ShowMoreProps } from "@/types";
import { useRouter } from "next/navigation";
import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { CustomButton } from ".";
import { group } from "console";
import { updateSearchParams } from "@/utils";

export const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
  const router = useRouter();

  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    const newPahName = updateSearchParams("limit", `${newLimit}`);

    router.push(newPahName);
  };

  return (
    <Flex w="full" alignItems="center" justifyContent="center" gap="5" mt="10">
      {!isNext && (
        <CustomButton
          title="Show more"
          btnType="button"
          bg="#1e88e5"
          rounded="full"
          p="5"
          color="white"
          _hover={{ bg: "#42a5f5", color: "black" }}
          handleClick={handleNavigation}
        ></CustomButton>
      )}
    </Flex>
  );
};
