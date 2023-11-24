import { CustomButtonProps } from "@/types";
import { Button, Text } from "@chakra-ui/react";

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
