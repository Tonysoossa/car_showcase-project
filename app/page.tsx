"use strict";
// "use client";

import Image from "next/image";
import { fetchCars } from "@/utils";

import {
  Box,
  ChakraProvider,
  Container,
  Flex,
  Grid,
  Heading,
  Text,
  VisuallyHidden,
} from "@chakra-ui/react";
import {
  Hero,
  CustomFilter,
  SearchBar,
  CarCard,
  SearchManufacturer,
} from "./components";
import { fuels, yearsOfProduction } from "@/constants";

export default async function Home({ searchParams }) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <Box as="main" overflow="hidden">
      <Hero />

      <Box mt="12" px="16" py="8" id="discover">
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
          <Text ml="2">Explore the cars you might like</Text>
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
              ml="1rem"
            >
              <CustomFilter title="Fuel" options={fuels} />
              <CustomFilter title="Year" options={yearsOfProduction} />
            </Flex>
          </Box>
        </Flex>

        {!isDataEmpty ? (
          <Box as="section" pl="4" w="36rem">
            <Flex
              position="relative"
              flexGrow="1"
              flexDirection={{ sm: "column", xl: "row" }}
              as="div"
              title="home__cars-wrapper"
              minW="full"
              gap="8"
              pt="14"
            >
              {allCars?.map((car) => (
                <CarCard key={car.model} car={car} />
              ))}
            </Flex>
          </Box>
        ) : (
          <Box
            as="div"
            title="home__error-container"
            display="flex"
            flexDirection="column"
            flexGrow="1"
            justifyContent="center"
            alignItems="center"
            gap="2"
            mt="16"
          >
            <Heading
              as="h2"
              color="black"
              fontSize="1.25rem"
              lineHeight="1.75rem"
              fontWeight="bold"
            >
              Oops, no results
            </Heading>
            <Text>{allCars.message}</Text>
          </Box>
        )}
      </Box>
    </Box>
  );
}
