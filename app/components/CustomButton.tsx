import Image from "next/image";

import { CustomButtonProps } from "@/types";
import { Box, Button, ButtonProps, Text } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export const CustomButton = ({
  title,
  handleClick,
  containerStyles,
  btnType,
  textStyles,
  ...rest
}: CustomButtonProps) => {
  return (
    <Button
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
      onClick={handleClick}
      {...rest}
    >
      <Text as="span" flexGrow="1">
        {title}
      </Text>
    </Button>
  );
};

// NOTE custom btn flex flex-row relative justify-center items-center py-3 px-6 outline-none;
