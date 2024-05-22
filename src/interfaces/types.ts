import { PokeTypes } from "../utils/BackgroundsByType";
export type PokeType = {
  name: PokeTypes; //| "All";
  url: string;
};

export type AllPokemonsResult = {
  name: string;
  url: string;
};
export type PokemonsByTypeResult = {
  pokemons: {
    name: string;
    url: string;
  };
  pokemon: PokeType;
};
export type Response = {
  data: {
    pokemon?: AllPokemonsResult[];
  };
};
