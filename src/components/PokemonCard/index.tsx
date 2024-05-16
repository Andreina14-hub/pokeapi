import { usePokemon } from "../../hooks/usePokemon";
import { background } from "../../utils/BackgroundsByType";
import { Link } from "react-router-dom";
import { Loader } from "../Loader";
import { PokemonContext } from "../../context/PokemonContext";
import styles from "./styles.module.scss";
import { useContext } from "react";

interface Props {
  url: string;
}

export const PokemonCard = ({ url }: Props) => {
  const { pokemon } = usePokemon(url);

  /* @ts-ignore */

  const pokemonContext = useContext(PokemonContext);

  const selected =
    pokemonContext?.filterSelected.name != "All"
      ? pokemonContext?.filterSelected.name
      : pokemon?.types[0]?.type?.name;
  const backgroundSelected = background[selected];

  return (
    <Link to={`/${pokemon?.id}`} className={styles.pokeCard}>
      <div className={styles.top}>
        <span>#{pokemon?.id}</span>
        {pokemon?.sprites?.other?.dream_world?.front_default ||
        pokemon?.sprites?.front_default ? (
          <img
            src={
              pokemon?.sprites?.other?.dream_world?.front_default ||
              pokemon?.sprites?.front_default
            }
            alt={pokemon?.name}
          />
        ) : (
          <div className={styles.loadingContainer}>
            <Loader color={backgroundSelected} />
          </div>
        )}
      </div>
      <div style={{ background: backgroundSelected }} className={styles.bottom}>
        {pokemon?.name}
      </div>
    </Link>
  );
};
