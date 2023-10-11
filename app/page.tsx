"use strict";
"use client";
import { Box, ChakraProvider, VisuallyHidden } from "@chakra-ui/react";
import { Hero } from "./components";

export default function Home() {
  return (
    <Box as="main" overflow="hidden">
      <Hero />
    </Box>
  );
}
