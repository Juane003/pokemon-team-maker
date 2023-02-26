import { PokemonClient } from "pokenode-ts";

export const api = new PokemonClient();

export const pokemonSpriteUrl =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

export const pokemonGifUrl =
  "https://www.pkparaiso.com/imagenes/xy/sprites/animados/";

export const getPokemons = () => {
  return api.listPokemonSpecies(0, 151);
};

export const getPokemon = (name: string) => api.getPokemonByName(name);

export const getTypes = () => api.listTypes();

export const parsePokemon = (pokemon: string, index: number) => {
  return {
    name: pokemon,
    image: `${pokemonSpriteUrl}${index}.png`,
    moves: [null, null, null, null],
  };
};

export const fetcher = async (url: string) => {
  const data = await fetch(url);
  return data.json();
};

export const replaceHyphen = (string: string) => string.replace("-", " ");
