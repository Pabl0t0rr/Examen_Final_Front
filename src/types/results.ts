import { CharacterT } from "@/types";

export type CharacterResult = {
  info: InfoT;
  results: CharacterT[];
};

export type InfoT = {
  count: number;
  pages: number;
  next: string | null;
  prev: null | string;
};
