import { ButtonProps } from "@chakra-ui/react";
import { MouseEventHandler } from "react";

export interface CustomButtonProps extends ButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
}

export interface SearchManufacturerPorps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

export interface CustomFilterProps {
  title: string;
}