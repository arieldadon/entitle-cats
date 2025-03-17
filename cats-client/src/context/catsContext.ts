import { useCallback, useState } from "react";
import { CatProperties } from "../types/cat";
import { getCats } from "../api/catsAPI";
import constate from "constate";

const useCats = () => {
  const [cats, setCats] = useState<CatProperties[]>([]);

  const refreshCats = useCallback(async (): Promise<void> => {
    const fetchedCats = await getCats();
    setCats(fetchedCats);
  }, [])
  return { cats, refreshCats };
};

export const [CatsProvider, useCatsContext] = constate(useCats);
