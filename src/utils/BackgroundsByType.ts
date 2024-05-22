export type PokeTypes =
  | "All"
  | "normal"
  | "fighting"
  | "flying"
  | "ground"
  | "poison"
  | "rock"
  | "bug"
  | "ghost"
  | "steel"
  | "fire"
  | "water"
  | "grass"
  | "electric"
  | "psychic"
  | "ice"
  | "dragon"
  | "dark"
  | "fairy"
  | "shadow";
export const background: { [key in PokeTypes]: string } = {
  All: "#F0E78E",

  normal: "#F0E78E",

  fighting: "#BD3C5A",

  flying: "#A891EC",

  ground: "#DCC200",

  poison: "#A43E9E",

  rock: "#888780",

  bug: "#8CCEBC",

  ghost: "#767CBA",

  steel: "#7FD6E8",

  fire: "#EF8200",

  water: "#59BDEC",

  grass: "#BAE550",

  electric: "#FFE100",

  psychic: "#ED8599",

  ice: "#9AD6DF",

  dragon: "#008C9A",

  dark: "#60615F",

  fairy: "#F6C8DD",

  shadow: "#4F5078",
};
// background["normal"];
