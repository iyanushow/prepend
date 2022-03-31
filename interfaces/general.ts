import { IPokemon, IPokemonDetails } from "./pokemon";

export interface IResults {
  count: number;
  next: string | null;
  previous: string | null;
  results: IPokemon[];
}

export interface IDetailsResult extends IResults {
  results: IPokemonDetails[];
}

export interface IPokemonList {
  pokemons: IPokemonDetails[];
  pagination: {
    count: number;
    next: string;
    previous: string;
  };
  url: string;
}

export interface Variables {
  offset: number;
  limit: number;
}
