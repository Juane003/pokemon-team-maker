import { pokeball } from "@/assets/pokeball";
import { usePokemonTeam } from "@/hooks/usePokemonTeam";
import { Box, Button, Heading, HStack, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import Image from "next/image";

export const PokemonTeam = () => {
  const { pokemonTeam, handleRemovePokemon } = usePokemonTeam();
  return (
    <>
      <HStack gap={4}>
        <Heading size="sm">Pokemon Team: </Heading>
        {pokemonTeam.map((pokemon, index) => {
          return (
            <Box key={pokemon?.name || index}>
              {pokemon === null ? (
                <Box alignItems="center" py="0.1px">
                  <Image src={pokeball} height={50} width={50} alt="pokeball" />
                  <Button
                    size="xs"
                    w="full"
                    colorScheme="red"
                    isDisabled={true}
                  >
                    X
                  </Button>
                </Box>
              ) : (
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
              )}
            </Box>
          );
        })}
        <Link
          as={NextLink}
          href="/"
          bg="gray.100"
          fontWeight="semibold"
          p={2}
          rounded="md"
          _hover={{ bg: "gray.200" }}
          transitionDuration="300ms"
          _active={{ bg: "gray.300" }}
        >
          Go Back
        </Link>
        <Link
          as={NextLink}
          href="/team"
          bg="gray.100"
          fontWeight="semibold"
          p={2}
          rounded="md"
          _hover={{ bg: "gray.200" }}
          transitionDuration="300ms"
          _active={{ bg: "gray.300" }}
        >
          View Team
        </Link>
      </HStack>
    </>
  );
};
