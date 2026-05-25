import { api } from "./api";
import { CharacterT, CharacterResult } from "@/types";

export const getCharacters = async (
  page: number,
  filters?: {
    name?: string;
    status?: string;
    gender?: string;
  },
) => {
  let url = "/character?page=" + page;

  if (filters?.name) {
    url += "&name=" + filters.name;
  }

  if (filters?.status) {
    url += "&status=" + filters.status;
  }

  if (filters?.gender) {
    url += "&gender=" + filters.gender;
  }

  const response = await api.get<CharacterResult>(url);

  return response.data;
};

export const getCharacterById = async (id: string) => {
  const response = await api.get<CharacterT>("/character/" + id);
  return response.data;
};
