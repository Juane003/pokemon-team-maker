import { Box, Heading, HStack } from "@chakra-ui/react";
import { Pokemon } from "pokenode-ts";

export const PokemonDescription = ({
  pokemon,
}: {
  pokemon: Pokemon | null;
}) => {
  if (!pokemon) return <div>Loading...</div>;
  return (
    <>
      <HStack>
        <Heading size="sm">Types:</Heading>
        {pokemon.types.map((type) => (
          <Box as="span" textTransform="capitalize" key={type.type.name}>
            {type.type.name}
          </Box>
        ))}
      </HStack>
    </>
  );
};
