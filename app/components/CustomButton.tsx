import Image from "next/image";

import { CustomButtonProps } from "@/types";
import { Box, Button, ButtonProps, Text } from "@chakra-ui/react";

export const CustomButton = ({
  title,
  handleClick,
  containerStyles,
  btnType,
  ...rest
}: CustomButtonProps) => {
  return (
    <Button
      onClick={handleClick}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      position="relative"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      py="-3"
      px="-6"
      outline="none"
      transition="all ease 350ms"
      {...rest}
    >
      <Text as="span">{title}</Text>
    </Button>
  );
};

// NOTE custom btn flex flex-row relative justify-center items-center py-3 px-6 outline-none;
