import { PokemonClient } from "pokenode-ts";

export const api = new PokemonClient();

export const pokemonSpriteUrl =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

export const getPokemons = () => {
  return api.listPokemonSpecies(0, 151);
};

export const getPokemon = (name: string) => api.getPokemonByName(name);
