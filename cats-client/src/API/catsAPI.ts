import { CatProperties } from "../typing/cat";


export const getCats = async (): Promise<CatProperties[]> => {
  const response = await fetch("http://localhost:3000/cats");
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json()
}

export const addCat = async (cat: CatProperties): Promise<void> => {
    console.log(cat);
    const response = await fetch("http://localhost:3000/cats", {method: 'POST', headers: { "Content-Type": "application/json" }, body: JSON.stringify(cat)});
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    await response.json()
  }