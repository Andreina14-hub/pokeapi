import axios from "axios";
import { createContext, useEffect, useState } from "react";

import {
  AllPokemonsResult,
  PokemonsByTypeResult,
  PokeType,
} from "../interfaces/types";
import { ContextProps } from "../interfaces/interfaces";

const PokemonContext = createContext<ContextProps | null>(null);
const PokemonProvider = ({ children }) => {
  const allPokemonsUrl =
    "https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0";

  const defaultState: PokeType = {
    name: "All",
    url: allPokemonsUrl,
  };

  const [allPokemons, setAllPokemons] = useState(null);
  const [pokemonsFiltered, setPokemonsFiltered] = useState(null);

  const [types, setTypes] = useState([defaultState]);
  const [filterSelected, setFilterSelected] = useState(defaultState);

  const changeTypeSelected = async (type: PokeType) => {
    setFilterSelected(type);

    const { data } = await axios.get(type.url);
    const pokemons = data?.pokemon?.map(
      ({ pokemon }: PokemonsByTypeResult) => pokemon?.url
    );

    type.name !== "All"
      ? setPokemonsFiltered(pokemons)
      : setPokemonsFiltered(allPokemons);
  };

  const getPokemonsType = async () => {
    const { data } = await axios.get("https://pokeapi.co/api/v2/type");
    const results = data.results.filter(
      (pokemon) => pokemon.name != "stellar" && pokemon.name != "unknown"
    );
    setTypes([...types, ...results]);
  };

  const getAllPokemons = async () => {
    const { data } = await axios.get(allPokemonsUrl);

    const pokemons = data.results.map(
      (pokemon: AllPokemonsResult) => pokemon?.url
    );

    setAllPokemons(pokemons);
    setPokemonsFiltered(pokemons);
  };

  useEffect(() => {
    getPokemonsType();
    getAllPokemons();
  }, []);
  const initialContext = {
    types,
    filterSelected,
    pokemonsFiltered,
    changeTypeSelected,
  };

  return (
    <PokemonContext.Provider value={{ ...initialContext }}>
      {children}
    </PokemonContext.Provider>
  );
};

export { PokemonProvider, PokemonContext };
