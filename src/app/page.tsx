"use client";

import { getCharacters } from "@/lib/api/character";
import { CharacterResult } from "@/types";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import FilterStatus from "./components/Filter/FilterStatus";
import FilterGender from "./components/Filter/FilterGender";
import FilterName from "./components/Filter/FilterName";
import Character from "./components/Character/Character";
import Pagination from "./components/Pagination/Pagination";

import "./styles.css";

const CharacterPage = () => {
  const [resultCharacters, setResultCharacters] =
    useState<CharacterResult | null>(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [page, setPage] = useState(1);

  const [nameFilter, setNameFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  useEffect(() => {
    getCharacters(page, {
      name: nameFilter,
      status: statusFilter,
      gender: genderFilter,
    })
      .then((res) => {
        setResultCharacters(res);
        setError(null);
      })
      .catch((err: AxiosError) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [page, nameFilter, statusFilter, genderFilter]);

  if (loading)
    return (
      <div className="loaderContainer">
        <div className="loader"></div>
        <div className="textLoader">Loading...</div>
      </div>
    );

  return (
    <div className="characterMainContainer">
      <div className="filterMainContainer">
        <h1>Character Filter</h1>
        <div className="filtersRow">
          <FilterStatus setStatusFilter={setStatusFilter} />

          <FilterName setNameFilter={setNameFilter} />

          <FilterGender setGenderFilter={setGenderFilter} />
        </div>
      </div>

      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      {resultCharacters?.results.map((e) => (
        <Character key={e.id} character={e} />
      ))}

      <Pagination
        next={!!resultCharacters?.info.next}
        prev={!!resultCharacters?.info.prev}
        page={page}
        setPage={setPage}
        totalPages={resultCharacters?.info.pages}
      />
    </div>
  );
};

export default CharacterPage;
