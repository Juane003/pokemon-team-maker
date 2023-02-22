import { useAtom } from "jotai";
import { atom } from "jotai/vanilla";

const pokemonTeamAtom = atom<PokemonTeam[]>([]);
const MAX_TEAM_SIZE = 6;

export const usePokemonTeam = () => {
  const [pokemonTeam, setPokemonTeam] = useAtom(pokemonTeamAtom);

  const handleAddPokemon = (pokemon: PokemonTeam) => {
    if (pokemonTeam.length === MAX_TEAM_SIZE) return null;
    if (pokemonTeam.includes(pokemon)) return null;
    setPokemonTeam((previous) => [...previous, pokemon]);
  };

  const handleRemovePokemon = (pokemon: PokemonTeam) => {
    if (!pokemonTeam.length) return null;
    const newPokemonTeam = pokemonTeam.filter((prevPokemon) => {
      return pokemon.name !== prevPokemon.name;
    });
    setPokemonTeam(newPokemonTeam);
  };

  return { pokemonTeam, handleAddPokemon, handleRemovePokemon };
};
