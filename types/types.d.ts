import { types } from "@/lib/pokemonTypes";
interface PokemonTeam {
  name: string;
  image: string;
  moves: any[];
}

interface PokemonFromList {
  name: string;
  url: string;
}

export type PokemonType = keyof typeof types;
