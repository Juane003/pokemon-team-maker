import {
  bug,
  dark,
  dragon,
  electric,
  fairy,
  fighting,
  fire,
  flying,
  ghost,
  grass,
  ground,
  ice,
  normal,
  poison,
  psychic,
  rock,
  steel,
  water,
} from "@/assets/types";
import { PokemonType } from "@/types/types";

export const types = {
  normal: normal,
  fighting: fighting,
  flying: flying,
  poison: poison,
  ground: ground,
  rock: rock,
  bug: bug,
  ghost: ghost,
  steel: steel,
  fire: fire,
  water: water,
  grass: grass,
  electric: electric,
  psychic: psychic,
  ice: ice,
  dragon: dragon,
  dark: dark,
  fairy: fairy,
};

const colors = {
  normal: "#9FA39D",
  fighting: "#FF202E",
  flying: "#89BDFF",
  poison: "#F149FF",
  ground: "#FF6B0D",
  rock: "#D8BC5A",
  bug: "#7BCF00",
  ghost: "#4E6AFF",
  steel: "#23A1BD",
  fire: "#FF9900",
  water: "#14A8FF",
  grass: "#1CD80E",
  electric: "#FFDE00",
  psychic: "#FF6C64",
  ice: "#2EE4C6",
  dragon: "#0076FF",
  dark: "#5A566A",
  fairy: "#FF76FF",
};

export const getGradientBgFromTypes = (type) => {
  if (type.length === 1)
    return `linear(to-r, ${colors[type[0].type.name as PokemonType]}, ${
      colors[type[0].type.name as PokemonType]
    })`;
  const firstColor = colors[type[0].type.name as PokemonType];
  const secondColor = colors[type[1].type.name as PokemonType];
  return `linear(to-r, ${firstColor}, ${secondColor})`;
};

export const getType = (type: PokemonType) => {
  return types[type];
};

export const getTypeBgColor = (type: PokemonType) => {
  return colors[type];
};

export const colorSchemeSelector = (stat: string) => {
  switch (stat) {
    case "hp":
      return "red";
    case "attack":
      return "orange";
    case "defense":
      return "yellow";
    case "special-attack":
      return "blue";
    case "special-defense":
      return "green";
    case "speed":
      return "pink";
    default:
      return "";
  }
};
