import { useCallback, useState } from "react";
import { getCats } from "../api/catsAPI";
import constate from "constate";
import { Cat } from "../models/cat";

const useCats = () => {
  const [cats, setCats] = useState<Cat[]>([]);

  const refreshCats = useCallback(async (): Promise<void> => {
    const fetchedCats = await getCats();
    setCats(fetchedCats);
  }, []);
  return { cats, refreshCats };
};

export const [CatsProvider, useCatsContext] = constate(useCats);
