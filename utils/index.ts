import { manufacturers } from "@/constants";
import { CarProps, FilterProps } from "@/types";
import { url } from "inspector";

export async function fetchCars(filters: FilterProps) {
  const { manufacturer, year, model, limit, fuel } = filters;
  const headers = {
    //NOTE first KEY -> 1st mail : 3000/use/month
    // "X-RapidAPI-Key": "17596555f3mshe027017ae855f5dp146e46jsnf0b9a200c997",
    // "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
    //NOTE second KEY -> scd mail : to..rmc@gmail.com
    "X-RapidAPI-Key": "a45cb749b4msha6d93b221fed738p117d8ajsn8890816f6416",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
    {
      headers: headers,
    }
  );
  const result = await response.json();
  return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // NOTE base rental/day

  const mileageFactor = 0.1; // NOTE additional rate/mile driven

  const ageFactor = 0.05; // NOTE additional rate/year of vehicle age

  // NOTE Calculate add rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // NOTE Calculate total rent rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");

  const { make, year, model } = car;
  // NOTE REACTIVER API IMAGES ! //FIX
  //FIX
  // url.searchParams.append(
  //   "customer",
  //   process.env.NEXT_PUBLIC_IMAGIN_API_KEY || "hrjavascript-mastery"
  // );
  //FIX
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomtype", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  url.searchParams.append("angle", `${angle}`);
  return `${url}`;
};

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);

  searchParams.set(type, value);

  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
};

//NOTE Always updated key in Github :process.env.NEXT_PUBLIC_IMAGIN_API_KEY || ''
