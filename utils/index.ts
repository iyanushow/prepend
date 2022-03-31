import { IPokemonList, IPokemonDetails, IResults, Variables } from "../interfaces";

export const baseUrl = "https://pokeapi.co/api/v2/pokemon";

export const formatPoke = (poke: any, url: string): IPokemonDetails => {
  if (!poke) {
    return;
  }

  const { id, name, sprites, weight, height, stats, types, moves, species } = poke;
  return {
    id,
    url,
    name,
    height,
    weight,
    stats,
    types,
    moves,
    species,
    imageUrl: sprites?.front_default,
  };
};

export const fetchPokemonData = async (url: string): Promise<IPokemonDetails> => {
  const response: Response = await fetch(url);

  const data: IPokemonDetails = await response.json().then(data => formatPoke(data, url));

  return data;
};

export const fetchPokemonList = async (url: string): Promise<IPokemonList> => {
  //fetch initail list of pokemons
  const data: Response = await fetch(url);

  const response = (await data.json()) as IResults;

  const { results, ...rest } = response;

  //fetch details for each pokemon
  const pokemons: IPokemonDetails[] = await Promise.all(
    results.map(poke => fetchPokemonData(poke.url))
  );

  return {
    pokemons,
    pagination: { ...rest },
    url,
  };
};
