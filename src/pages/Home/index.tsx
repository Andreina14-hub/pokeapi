import { useContext } from "react";
import { PokeballIconSmall } from "../../assets/pokeball";
import { Filters } from "../../components/Filters";
import { Pagination } from "../../components/Pagination";
import { PokemonList } from "../../components/PokemonList";
import { PokemonContext } from "../../context/PokemonContext";
import { usePagination } from "../../hooks/usePagination";
import styles from "./styles.module.scss";
import { ContextProps } from "../../interfaces/interfaces";

export const Home = () => {
  const { pokemonsFiltered } = useContext(PokemonContext) as ContextProps;

  const { page, nextPage, previousPage, backToHome } = usePagination();
  const perPage = 12;
  return (
    <div className={styles.home}>
      <header>
        <div onClick={backToHome}>
          <PokeballIconSmall />
          <span>Pokédex</span>
        </div>
      </header>
      <Filters />
      <PokemonList
        page={page}
        perPage={perPage}
        pokemonsUrls={pokemonsFiltered}
      />
      <Pagination
        page={page}
        perPage={perPage}
        nextPage={nextPage}
        previousPage={previousPage}
        maxItems={pokemonsFiltered?.length || 0}
      />
    </div>
  );
};
