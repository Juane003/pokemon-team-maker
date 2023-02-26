import { PokemonCard } from "@/components/PokemonCard";
import { PokemonPickList } from "@/components/PokemonPickList";
import { usePokemonTeam } from "@/hooks/usePokemonTeam";
import { getPokemons } from "@/lib/pokemon";
import { PokemonFromList } from "@/types/types";
import { Box, Grid } from "@chakra-ui/react";
import Head from "next/head";

interface TeamProps {
  pokemons: PokemonFromList[];
}

export default function Team({ pokemons }: TeamProps) {
  const { pokemonTeam } = usePokemonTeam();
  return (
    <>
      <Head>
        <title>Pokemon Team Maker</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box w="full" position="relative">
        <PokemonPickList pokemons={pokemons} />
        <Grid
          templateColumns="repeat(4, 1fr)"
          gap={8}
          justifyContent="center"
          w="85%"
        >
          {pokemonTeam.map((pokemon) => {
            if (pokemon !== null)
              return <PokemonCard pokemon={pokemon} key={pokemon?.name} />;
            else return <Box w={60}></Box>;
          })}
        </Grid>
      </Box>
    </>
  );
}

export const getServerSideProps = async () => {
  const pokemons = await getPokemons();

  return {
    props: {
      pokemons: pokemons.results,
    },
  };
};
