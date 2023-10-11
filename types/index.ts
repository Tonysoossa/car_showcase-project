import { ButtonProps } from "@chakra-ui/react";
import { MouseEventHandler } from "react";

export interface CustomButtonProps extends ButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}
