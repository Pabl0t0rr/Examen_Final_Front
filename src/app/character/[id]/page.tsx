"use client";

import { getCharacterById } from "@/lib/api/character";
import { CharacterT } from "@/types/character";
import { AxiosError } from "axios";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const CharacterDetail = () => {
  const { id } = useParams();

  const router = useRouter();

  const [character, setCharacter] = useState<CharacterT | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getCharacterById(id as string)
      .then((e) => setCharacter(e))
      .catch((err: AxiosError) => setError(err.message))
      .finally(() => setLoading(false));
  });

  return (
    <div className="characterByIdContainer">
      <img src={character?.image} />
      <div className="characterDetailInfo">
        <h1>{character?.name}</h1>
        <p>Gender: {character?.gender}</p>
        <p>Status: {character?.status}</p>
        <p>Species: {character?.species}</p>
        <p>Id: {character?.id}</p>
        <p>Origin: {character?.origin.name}</p>
        <p>Location: {character?.location.name}</p>
        <button onClick={() => router.back()}>Go Back</button>
      </div>
    </div>
  );
};

export default CharacterDetail;
