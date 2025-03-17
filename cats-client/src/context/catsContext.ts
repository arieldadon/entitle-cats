import { useState } from "react";
import { CatProperties } from "../typing/cat";
import { getCats } from "../API/catsAPI";
import constate from "constate";

const useCats = () => {
  const [cats, setCats] = useState<CatProperties[]>([]);

  const refreshCats = async (): Promise<void> => {
    const fetchedCats = await getCats();
    setCats(fetchedCats);
  };
  return { cats, refreshCats };
};

export const [CatsProvider, useCatsContext] = constate(useCats);
