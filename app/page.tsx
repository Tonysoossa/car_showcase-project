"use strict";
"use client";

import { fetchCars } from "@/utils";

import {
  Box,
  Flex,
  Grid,
  Heading,
  Text,
} from "@chakra-ui/react";
import {
  Hero,
  CustomFilter,
  SearchBar,
  CarCard,
  ShowMore,
} from "./components";
import { fuels, yearsOfProduction } from "@/constants";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const [allCars, setAllCars] = useState([]);
  const [loading, setLoading] = useState(false);

  // NOTE Search states
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");

  // NOTE Filter states
  const [fuel, setFuel] = useState("");
  const [year, setYear] = useState(2023);

  // NOTE Pagination status
  const [limit, setLimit] = useState(10);

  const getCars = useCallback(async () => {
    setLoading(true);

    try {
      const result = await fetchCars({
        manufacturer: manufacturer || "",
        year: year || 2023,
        fuel: fuel || "",
        limit: limit || 10,
        model: model || "",
      });

      setAllCars(result);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [fuel, year, limit, manufacturer, model]);

  useEffect(() => {
    console.log(fuel, year, limit, manufacturer, model);
    getCars();
  }, [getCars, fuel, year, limit, manufacturer, model]);

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
            <SearchBar setManufacturer={setManufacturer} setModel={setModel} />

            <Flex
              title="home__filter-container"
              flexGrow="1"
              justifyContent="flex-start"
              alignItems="center"
              flexWrap="wrap"
              gap="4"
              ml="1rem"
            >
              <CustomFilter title="Fuel" options={fuels} setFilter={setFuel} />
              <CustomFilter
                title="Year"
                options={yearsOfProduction}
                setFilter={setYear}
              />
            </Flex>
          </Box>
        </Flex>

        {allCars.length > 0 ? (
          <Box as="section">
            <Grid
              position="relative"
              title="home__cars-wrapper"
              as="div"
              templateColumns={{
                md: "repeat(1,1fr)",
                lg: "repeat(2, 1fr)",
                xl: "repeat(3,1fr)",
                "2xl": "repeat(4, 1fr)",
              }}
              w={{ md: "full", sm: "24rem" }}
              gap="8"
              pt="14"
            >
              {allCars?.map((car) => (
                <CarCard key={car} car={car} />
              ))}
            </Grid>

            {loading && (
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                mt="16"
                w="full"
              >
                <Image src="/loader.svg" alt="loader" width={50} height={50} />
              </Box>
            )}

            <ShowMore
              pageNumber={limit / 10}
              isNext={(limit || 10) > allCars.length}
              setLimit={setLimit}
            />
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
          </Box>
        )}
      </Box>
    </Box>
  );
}
