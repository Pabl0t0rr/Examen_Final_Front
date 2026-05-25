import { LocationT } from "./location";

export type CharacterT = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: LocationT;
  location: LocationT;
  image: string;
  episode: string[];
  url: string;
  created: Date;
};
