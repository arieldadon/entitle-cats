import { Cat, CatInterface } from "../models/cat";
import { httpRequest } from "./api";
import config from "./config";

const CATS_URL = config.server + config.paths.cats;

export const getCats = async (): Promise<Cat[]> => {
  const cats = await httpRequest<CatInterface[]>(CATS_URL);
  return cats.map((cat) => new Cat(cat));
};

export const addCat = async (cat: CatInterface): Promise<void> => {
  return await httpRequest<void, CatInterface>(CATS_URL, {
    method: "POST",
    body: cat,
  });
};
