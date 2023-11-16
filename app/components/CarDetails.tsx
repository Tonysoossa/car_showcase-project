"use client";

import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CarProps } from "@/types";
import Image from "next/image";

interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}

export const CarDetails = ({ isOpen, closeModal, car }: CarDetailsProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Box as={Dialog} position="relative" zIndex="10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Box position="fixed" inset="0" bg="black" opacity="25%" />
          </Transition.Child>

          <Box position="fixed" inset="0" overflowY="auto">
            <Box
              display="flex"
              flexGrow="1"
              minH="full"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
            >
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel>
                  <Box bg="#ced4da" p="5" shadow="2xl" boxShadow='dark-lg' rounded="2xl">
                    <Box
                      display="flex"
                      flexGrow="1"
                      flexDirection="column"
                      gap="5"
                      position="relative"
                      pl="100px"
                      w="full"
                      h="40"
                      maxW="lg"
                      maxH="90vh"
                      overflowY="auto"
                      rounded="2xl"
                      bg="#ced4da"
                      textAlign="left"
                      transition="all"
                      bgGradient="linear(to-r, #42a5f5,#1e88e5,#42a5f5,#1e88e5,#42a5f5,#1e88e5,#42a5f5,#1e88e5,#42a5f5,#1e88e5)"
                      roundedTop="2xl"
                      roundedBottom="2xl"
                    >
                      <Image
                        src="/hero.png"
                        alt="car model"
                        fill
                        priority
                        objectFit="contain"
                      />
                      <Button
                        display="flex"
                        ml="360px"
                        mr='10px'
                        mt="6px"
                        size="sm"
                        type="button"
                        onClick={closeModal}
                        rounded="full"
                        padding="-10"
                        bg="transparent"
                        _hover={{ bg: "#ced4da", opacity: "90%" }}
                      >
                        <Image
                          src="/close.svg"
                          alt="close"
                          width={18}
                          height={18}
                        />
                      </Button>
                      <Box
                        display="flex"
                        flexGrow="1"
                        flexDirection="column"
                        gap="3"
                      ></Box>
                    </Box>

                    <Box display="flex" bg="#ced4da" pt="10" pb="5" mt="-5">
                      <Box flexGrow="1" position="relative" w="full" h="24">
                        <Image
                          src="/hero.png"
                          alt="car model"
                          objectFit="contain"
                          fill
                          priority
                        />
                      </Box>

                      <Box flexGrow="1" position="relative" w="full" h="24">
                        <Image
                          src="/hero.png"
                          alt="car model"
                          objectFit="contain"
                          fill
                          priority
                        />
                      </Box>

                      <Box flexGrow="1" position="relative" w="full" h="24">
                        <Image
                          src="/hero.png"
                          alt="car model"
                          objectFit="contain"
                          fill
                          priority
                        />
                      </Box>
                    </Box>
                    <Box display="flex" flexGrow="1" gap="4" pr="5" pl="5">
                      <Heading
                        as="h2"
                        position="absolute"
                        display="flex"
                        fontWeight="semibold"
                        size="lg"
                        textTransform="capitalize"
                      >
                        {car.make} {car.model}
                      </Heading>
                      <Box
                        display="flex"
                        w="full"
                        flexDirection="column"
                        flexWrap="wrap"
                        mt="14"
                        gap="4"
                      >
                        {Object.entries(car).map(([key, value]) => (
                          <Box
                            key={key}
                            display="flex"
                            flexGrow="1"
                            justifyContent="space-between"
                            gap="6"
                            w="full"
                            textAlign="right"
                          >
                            <Heading
                              as="h4"
                              fontSize="14px"
                              color="grey"
                              opacity="80%"
                              textTransform="capitalize"
                            >
                              {key.replace("_", " ")}
                            </Heading>
                            <Text color="blackAlpha.900" fontWeight="semibold">
                              {value}
                            </Text>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  </Box>
                </Dialog.Panel>
              </Transition.Child>
            </Box>
          </Box>
        </Box>
      </Transition>
    </>
  );
};
