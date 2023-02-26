import { Box, Heading, HStack, Spinner, Stack, Text } from "@chakra-ui/react";
import { Pokemon } from "pokenode-ts";
import Image from "next/image";
import {
  colorSchemeSelector,
  getType,
  getTypeBgColor,
} from "@/lib/pokemonTypes";
import { PokemonType } from "@/types/types";
import { grass } from "@/assets/types";
import { StatBar } from "./StatBar";
import { getPokemon } from "@/lib/pokemon";
import { useQuery } from "react-query";

export const PokemonDescription = ({
  pokemonName,
}: {
  pokemonName: string;
}) => {
  const {
    data: pokemon,
    isLoading,
    isError,
  } = useQuery(["pokemon", pokemonName], () => getPokemon(pokemonName));
  if (isLoading) return <Spinner />;
  if (isError) return <div>Error on Fetch</div>;
  if (!pokemon) return <Spinner />;

  return (
    <>
      <HStack>
        <Heading size="sm">Types:</Heading>
        {pokemon.types.map((type) => (
          <Box
            key={type.type.name}
            bgColor={getTypeBgColor(type.type.name as PokemonType)}
            rounded="full"
            padding="2"
          >
            <Image
              src={getType(type.type.name as PokemonType)}
              alt={type.type.name}
              width={30}
              height={30}
            />
          </Box>
        ))}
      </HStack>
      <Stack>
        <Heading size="sm">Stats:</Heading>
        {pokemon.stats.map((stat) => (
          <HStack key={stat.base_stat}>
            <Text textTransform="capitalize" w={20}>
              {stringNormalize(stat.stat.name)}
            </Text>
            <StatBar
              value={stat.base_stat}
              colorScheme={colorSchemeSelector(stat.stat.name)}
            />
            <Text>{stat.base_stat}</Text>
          </HStack>
        ))}
      </Stack>
    </>
  );
};

const stringNormalize = (string: string) => {
  return string.replace("-", " ");
};
