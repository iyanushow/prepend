export interface IPokemon {
  name: string;
  url: string;
}

export interface IPokemonDetails {
  id: number;
  url: string;
  name: string;
  imageUrl: string;
  weight: number;
  height: number;
  stats: PokeStat[];
  types: PokeType[];
  moves: PokeMove[];
  species: PokeSpecies;
}

export interface PokeSpecies {
  name: string;
  url: string;
}

export interface PokeStat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface PokeType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface PokeMove {
  move: {
    name: string;
    url: string;
  };
  version_group_details: {
    level_learned_at: number;
    move_learn_method: {
      name: string;
      url: string;
    };
    version_group: {
      name: string;
      url: string;
    };
  }[];
}
