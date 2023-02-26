import { parsePokemon } from "@/lib/pokemon";
import { PokemonTeam } from "@/types/types";
import { useAtom } from "jotai";
import { atom } from "jotai/vanilla";
import { PokemonMove } from "pokenode-ts";

const initialState = [null, null, null, null, null, null];

const pokemonTeamAtom = atom<(PokemonTeam | null)[]>(initialState);
const MAX_TEAM_SIZE = 6;
const MAX_MOVESET_SIZE = 4;

export const usePokemonTeam = () => {
  const [pokemonTeam, setPokemonTeam] = useAtom(pokemonTeamAtom);

  const handleAddPokemon = (pokemonName: string, index: number) => {
    const pokemon = parsePokemon(pokemonName, index);
    const filterNull = pokemonTeam.filter((pokemon) => pokemon !== null);
    if (filterNull.length === MAX_TEAM_SIZE) return null;

    if (
      pokemonTeam.filter(
        (pokemonFromTeam) => pokemonFromTeam?.name === pokemon.name
      ).length
    )
      return null;
    const auxilarArray = [...pokemonTeam];
    auxilarArray.splice(auxilarArray.indexOf(null), 1, pokemon);
    setPokemonTeam(auxilarArray);
  };

  const handleRemovePokemon = (pokemon: PokemonTeam) => {
    if (!pokemonTeam.length) return null;
    const newPokemonTeam = pokemonTeam.filter((prevPokemon) => {
      if (prevPokemon !== null) return pokemon.name !== prevPokemon.name;
      else return pokemon.name;
    });

    setPokemonTeam(() => [...newPokemonTeam, null]);
  };

  const handleAddMove = (pokemon: string, move: PokemonMove) => {
    const pokemonWithMoves = pokemonTeam.map((pokemonFromTeam) => {
      if (
        pokemonFromTeam?.moves.filter((move) => move !== null).length ===
        MAX_MOVESET_SIZE
      )
        return pokemonFromTeam;
      if (pokemonFromTeam === null) return pokemonFromTeam;
      if (pokemonFromTeam.moves.includes(move)) return pokemonFromTeam;
      if (pokemonFromTeam.name === pokemon) {
        const newMoveset = [...pokemonFromTeam.moves];
        newMoveset.splice(newMoveset.indexOf(null), 1, move);
        console.log(newMoveset);
        return {
          ...pokemonFromTeam,
          moves: newMoveset,
        };
      }
      return pokemonFromTeam;
    });
    setPokemonTeam(pokemonWithMoves);
  };

  const handleRemoveMove = (pokemon: string, move: PokemonMove) => {
    const pokemonWithRemovedMove = pokemonTeam.map((pokemonFromTeam) => {
      if (pokemonFromTeam === null) return pokemonFromTeam;
      if (pokemonFromTeam.name === pokemon) {
        const newMoveset = pokemonFromTeam.moves.map((moveFromPokemon) => {
          if (moveFromPokemon === move) return null;
          return moveFromPokemon;
        });
        return {
          ...pokemonFromTeam,
          moves: newMoveset,
        };
      }
      return pokemonFromTeam;
    });
    setPokemonTeam(pokemonWithRemovedMove);
  };

  return {
    pokemonTeam,
    handleAddPokemon,
    handleRemovePokemon,
    handleAddMove,
    handleRemoveMove,
  };
};
