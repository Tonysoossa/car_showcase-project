import { ButtonProps } from "@chakra-ui/react";
import { Dispatch, MouseEventHandler, SetStateAction } from "react";

export interface CustomButtonProps extends ButtonProps {
  title?: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
  ArrowForwardIcon?: string;
  isDisabled?: boolean;
}

export interface SearchManufacturerPorps {
  selected: string
  setSelected: React.Dispatch<React.SetStateAction<string>>
  manufacturer?: string;
  setManufacturer?: (manufacturer: string) => void;
}

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: string;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface FilterProps {
  manufacturer: string;
  year: number;
  fuel: string;
  limit: number;
  model: string;
}

export interface OptionsProps {
  title: string;
  value: string;
}

export interface CustomFilterProps {
  title: string;
  options: OptionsProps[];
  setFilter: Dispatch<SetStateAction<any>>;
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
  setLimit: Dispatch<SetStateAction<number>>
}
