import { CarProps } from "@/types";
import { url } from "inspector";

export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "17596555f3mshe027017ae855f5dp146e46jsnf0b9a200c997",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=supra",
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
  url.searchParams.append(
    "customer",
    process.env.NEXT_PUBLIC_IMAGIN_API_KEY || "hrjavascript-mastery"
  );
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomtype", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  url.searchParams.append("angle", `${angle}`);
  return `${url}`;
};

//NOTE Always updated key in Github :process.env.NEXT_PUBLIC_IMAGIN_API_KEY || ''
