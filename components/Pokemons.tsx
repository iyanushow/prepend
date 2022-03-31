import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { IPokemonList } from "../interfaces";
import { baseUrl, fetchPokemonList } from "../utils";
import ErrorScreen from "./ErrorScreen";
import Pagination from "./Pagination";
import PokeCard from "./PokeCard";
import Preloader from "./Preloader";
import Search from "./Search";

type PokemonPage = {
  pagination: IPokemonList["pagination"];
  initialUrl: string;
};

const Pokemons = ({ pagination, initialUrl }: PokemonPage) => {
  const [url, setUrl] = useState(initialUrl);
  const [variables, setVariables] = useState(pagination);

  //methods
  const changePage = (url: string): void => setUrl(url);

  const fetcher = (url: string) => fetchPokemonList(url);

  const { data, error } = useSWR(url, fetcher);

  useEffect(() => {
    data?.pagination && setVariables(data.pagination);
  }, [data]);

  if (error) return <ErrorScreen />;

  if (!data || !data.pokemons) return <Preloader />;

  return (
    <div className="w-full h-full max-w-7xl  mx-auto">
      <Search
        className="pt-20 max-w-[60%] mx-auto"
        setQuery={value => setUrl(`${baseUrl}/value`)}
      />
      <div className="my-10 grid grid-cols-card gap-3 pt-5">
        {data.pokemons?.map(pokemon => (
          <PokeCard key={pokemon.id} {...pokemon} />
        ))}
      </div>
      <div className="w-full mx-auto">
        <Pagination variables={variables} changePage={changePage} />
      </div>
    </div>
  );
};

export default Pokemons;
