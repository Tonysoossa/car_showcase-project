"use strict";

import { Box, Flex, extendTheme, Text, Heading } from "@chakra-ui/react";
import { Link as ChakraLink } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "@/constants";
import { use } from "react";

export const Footer = () => {
  return (
    <Flex
      as="footer"
      flexDirection="column"
      textColor="blackAlpha.900"
      mt="5"
      borderTop="#EDF2F7"
    >
      <Flex
        flexDirection={{ md: "row", base: "column" }}
        justifyContent="space-between"
        gap="5"
        px={{ sm: "16", base: "6" }}
        py="10"
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="start"
          justifyContent="flex-start"
          gap="6"
          mt="1"
        >
          <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
          <Text textStyle="base" textColor="gray.700">
            CarHub 2023 <br />
            All rights reserved &copy;{" "}
          </Text>
        </Box>
        <Box
          display="flex"
          flexGrow="1"
          w="full"
          justifyContent={{ md: "end" }}
          flexWrap="wrap"
          mt={{ md: "0", base: "10" }}
          gap="20"
        >
          {footerLinks.map((link) => (
            <Flex
              key={link.title}
              flexGrow="1"
              flexDirection="column"
              gap="6"
              py="-10px"
              fontSize="16px"
              lineHeight="24px"
              marginLeft={{ md: "20", xl: "32" }}
            >
              <Box as="h3" fontWeight="700">
                {link.title}
              </Box>
              {link.links.map((item) => (
                <ChakraLink
                  as={Link}
                  key={item.title}
                  href={item.url}
                  color="gray.500"
                >
                  {item.title}
                </ChakraLink>
              ))}
            </Flex>
          ))}
        </Box>
      </Flex>
      <Box
        title="c"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
        mt="10"
        borderTop="1px"
        borderColor="gray.100"
        px={{ sm: "16", base: "6" }}
        py="10"
      >
        <Text marginBottom='2rem'>@2023 CarHub. All Rights Reserved</Text>
        <Flex
          flexGrow="1"
          justifyContent={{ sm: "end", base: "center" }}
          mt={{ sm: "4" }}
        >
          {/* NOTE TODO links text note inline */}
          <ChakraLink as={Link} href="/" color="gray.500">
            Privacy Policy
          </ChakraLink>
          <Box p="8"></Box>
          <ChakraLink as={Link} href="/" color="gray.500">
            Term of Use
          </ChakraLink>
        </Flex>
      </Box>
    </Flex>
  );
};

// video 43:43
