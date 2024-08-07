import fetch from "node-fetch";
import { ResponseI } from "./types.js";

export const getCharsData = async (pageId: number) => {
  const url = `https://rickandmortyapi.com/api/character/?page=${pageId}`;
  const response = await fetch(url);
  const data = (await response.json()) as ResponseI;
  return data.results;
};
