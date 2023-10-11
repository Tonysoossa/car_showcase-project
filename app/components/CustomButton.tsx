import Image from "next/image";

import { CustomButtonProps } from "@/types";
import { Box, Button, ButtonProps, Text } from "@chakra-ui/react";


export const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  ...rest
}: CustomButtonProps) => {
  return (
    <Button onClick={handleClick} {...rest}>
      <Text as="span">{title}</Text>
    </Button>
  );
};
