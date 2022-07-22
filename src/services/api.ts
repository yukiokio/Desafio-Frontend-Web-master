import axios from "axios";
import {StarProps} from "../types/stars";
import { SetStateAction } from "react";

interface itemProps {
  rating: number[];
}

interface getRatingsProps {
  setStarsOnDB: React.Dispatch<SetStateAction<StarProps>>;
}

const baseURL = import.meta.env.VITE_APP_BASE_URL;

const api = axios.create({
  baseURL: baseURL,
});

export const getRatings = ({ setStarsOnDB }: getRatingsProps) => {
  api.get("/feedback").then(response => {
    const allRatesOnDB = response.data.map((item: itemProps) => item.rating);
    const filterByValue = (numberRate: number) =>
      allRatesOnDB.filter((item: any) => item === numberRate).length;

    const stars = {
      one: filterByValue(1),
      two: filterByValue(2),
      three: filterByValue(3),
      four: filterByValue(4),
      five: filterByValue(5),
    };

    setStarsOnDB(stars);
  });
};

export default api;
