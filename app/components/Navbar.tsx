import { Box, ChakraProvider } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";

import { CustomButton } from "./CustomButton";

export const Navbar = () => {
  return (
    <Box>
      <header className="w-full absolute z-10">
        <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
          <Link href="/" className="flex justify-center items-center">
            <Image
              src="/logo.svg"
              alt="Car hub logo"
              width={118}
              height={18}
              className="object-contain"
            />
          </Link>
            <CustomButton
              title="Sign In"
              btnType="button"
              rounded="full"
              color="blue.400"
              bg="white"
              minW="130px"
            />
        </nav>
      </header>
    </Box>
  );
};

// NOTE custom btn flex flex-row relative justify-center items-center py-3 px-6 outline-none;
