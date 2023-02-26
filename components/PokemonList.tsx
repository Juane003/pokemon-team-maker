import { PokemonFromList } from "@/types/types";
import { Accordion, Box, Grid, GridItem } from "@chakra-ui/react";
import { ChangeEvent, useMemo, useState } from "react";
import { PokemonAccordion } from "./PokemonAccordion";
import { Search } from "./Search";

interface PokemonListProps {
  pokemons: PokemonFromList[];
}

export const PokemonList = ({ pokemons }: PokemonListProps) => {
  const [input, setInput] = useState("");
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
      <Box p="4">
        <Search
          placeholder="Search Pokemon"
          onChange={handleOnChange}
          value={input}
        />
      </Box>
      <Accordion allowToggle>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          {filteredPokemons.map((pokemon) => (
            <GridItem key={pokemon.url}>
              <PokemonAccordion
                pokemonName={pokemon.name}
                index={pokemons.indexOf(pokemon) + 1}
              />
            </GridItem>
          ))}
        </Grid>
      </Accordion>
    </>
  );
};
