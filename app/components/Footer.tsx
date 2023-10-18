import { Box, Flex, extendTheme, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";


export const Footer = () => {
  return (
    <Flex
      flexDirection="column"
      textColor="blackAlpha.100"
      mt="5"
      borderTop="#EDF2F7"
    >
      <Box
        flexDirection={{ md: "column" }}
        flexWrap="wrap"
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
        >
          <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
          <Text textStyle='base' textColor='gray.700'>CarHub 2023 <br />
          All right reserved &copy; </Text>
        </Box>
      </Box>
    </Flex>
  );
};
