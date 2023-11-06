"use strict";
"use client";

import Image from "next/image";

import {
  Box,
  ChakraProvider,
  Flex,
  Text,
  VisuallyHidden,
} from "@chakra-ui/react";
import { Hero, CustomFilter, SearchBar } from "./components";

export default function Home() {
  return (
    <Box as="main" overflow="hidden">
      <Hero />

      <Box mt="12" px="16" py="16" id="discover">
        <Flex
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="flex-start"
          rowGap="2.5"
          color="black.100"
        >
          <Text
            as="h1"
            fontSize="2.25rem"
            lineHeight="2.5rem"
            fontWeight="extrabold"
            mb="1"
          >
            Car Catalogue
          </Text>
          <Text ml='2'>Explore the cars you might like</Text>
          <Box
            title="home_filters"
            display="flex"
            w="full"
            flex="between"
            alignItems="center"
            flexWrap="wrap"
            gap="12"
            mt="3"
          >
            <SearchBar />

            <Flex
              title="home__filter-container"
              flexGrow="1"
              justifyContent="flex-start"
              alignItems="center"
              flexWrap="wrap"
              gap="4"
              ml='1rem'
            >
              <CustomFilter title="fuel" />
              <CustomFilter title="year" />
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
//video 50:00
