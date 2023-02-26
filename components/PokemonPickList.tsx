import { usePokemonTeam } from "@/hooks/usePokemonTeam";
import { pokemonSpriteUrl } from "@/lib/pokemon";
import { PokemonFromList } from "@/types/types";
import { Box, Button, HStack, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { ChangeEvent, useMemo, useState } from "react";
import { Search } from "./Search";

interface PokemonPickListProps {
  pokemons: PokemonFromList[];
}

export const PokemonPickList = ({ pokemons }: PokemonPickListProps) => {
  const [input, setInput] = useState("");
  const { handleAddPokemon } = usePokemonTeam();
  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };
  const filteredPokemons = useMemo(() => {
    return pokemons.filter((pokemon) => {
      return pokemon.name.toLowerCase().includes(input.toLowerCase());
    });
  }, [pokemons, input]);
  return (
    <>
      <Stack h="80vh" overflowY="scroll" w="48" position="absolute" right={0}>
        <Box position="sticky" top={0} zIndex={10}>
          <Search
            w={"40"}
            placeholder="Search Pokemon"
            onChange={handleOnChange}
            value={input}
          />
        </Box>
        {filteredPokemons.map((pokemon) => (
          <HStack key={pokemon.url} w={40} bgColor="gray.300">
            <Image
              src={`${pokemonSpriteUrl}${pokemons.indexOf(pokemon) + 1}.png`}
              alt={pokemon.name}
              width={25}
              height={25}
            />
            <Text textTransform="capitalize" size="xs" w="28">
              {pokemon.name}
            </Text>
            <Button
              size="xs"
              onClick={() =>
                handleAddPokemon(pokemon.name, pokemons.indexOf(pokemon) + 1)
              }
            >
              Pick
            </Button>
          </HStack>
        ))}
      </Stack>
    </>
  );
};
