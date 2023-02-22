import type { AppProps } from "next/app";
import { useState } from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { PokemonTeam } from "@/components/PokemonTeam";

const MAX_TEAM_SIZE = 6;

interface PokemonTeam {
  name: string;
  image: string;
}

export default function App({ Component, pageProps }: AppProps) {
  // const [pokemonTeam, setPokemonTeam] = useState<PokemonTeam[]>([]);

  // const handleAddPokemon = (pokemon: PokemonTeam) => {
  //   if (pokemonTeam.length === MAX_TEAM_SIZE) return null;
  //   if (pokemonTeam.includes(pokemon)) return null;
  //   setPokemonTeam((previous) => [...previous, pokemon]);
  // };

  // const handleRemovePokemon = (pokemon: PokemonTeam) => {
  //   if (!pokemonTeam.length) return null;
  //   const newPokemonTeam = pokemonTeam.filter((prevPokemon) => {
  //     return pokemon.name !== prevPokemon.name;
  //   });
  //   setPokemonTeam(newPokemonTeam);
  // };

  return (
    <ChakraProvider>
      <Box p="4" gap="4">
        <PokemonTeam />
        <Box mt={4}></Box>
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}
