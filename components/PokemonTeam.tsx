import { usePokemonTeam } from "@/hooks/usePokemonTeam";
import { Box, Button, Heading, HStack } from "@chakra-ui/react";
import Image from "next/image";

// interface PokemonTeamProps {
//   currentTeam: PokemonTeam[];
//   onRemovePokemon: (pokemon: PokemonTeam) => void;
// }

export const PokemonTeam = () => {
  const { pokemonTeam, handleRemovePokemon } = usePokemonTeam();
  return (
    <>
      <HStack gap={4}>
        <Heading size="sm">Pokemon Team: </Heading>
        {pokemonTeam.map((pokemon) => {
          return (
            <Box alignItems="center" key={pokemon.name}>
              <Box bgColor="gray.300" rounded="md">
                <Image
                  src={pokemon.image}
                  alt={pokemon.name}
                  height={50}
                  width={50}
                />
              </Box>
              <Button
                size="xs"
                w="full"
                colorScheme="red"
                onClick={() => handleRemovePokemon(pokemon)}
              >
                X
              </Button>
            </Box>
          );
        })}
      </HStack>
    </>
  );
};
