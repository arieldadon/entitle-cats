import { CatProperties } from "../types/cat";
import config from "./config";

const catsUrl = config.server + config.paths.cats

export const getCats = async (): Promise<CatProperties[]> => {
  const response = await fetch(catsUrl);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json()
}

export const addCat = async (cat: CatProperties): Promise<void> => {
    const response = await fetch(catsUrl, {method: 'POST', headers: config.jsonContentTypeHeader, body: JSON.stringify(cat)});
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    await response.json()
  }