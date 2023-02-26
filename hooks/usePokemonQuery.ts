import { getPokemon } from "@/lib/pokemon";
import { useQuery } from "react-query";

export const usePokemonQuery = (pokemonName: string) => {
  return useQuery(["pokemon", pokemonName], () => getPokemon(pokemonName));
};
