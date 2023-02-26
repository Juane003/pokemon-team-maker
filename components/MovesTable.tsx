import { Divider, HStack, Stack, Text } from "@chakra-ui/react";

import { PokemonMove } from "pokenode-ts";

import { MovesTableData } from "./MovesTableData";

interface MovesTableProps {
  moves: PokemonMove[];
  pokemonName: string;
}

export const MovesTable = ({ moves, pokemonName }: MovesTableProps) => {
  return (
    <Stack>
      <HStack w="full" justifyContent={"space-around"}>
        <Text>Name</Text>
        <Text>Type</Text>
        <Text>Class</Text>
        <Text>Description</Text>
        <Text>Accuarcy</Text>
        <Text>Power</Text>
        <Text>Pick</Text>
      </HStack>
      <Divider />
      {moves.map((move) => {
        return (
          <MovesTableData
            pokemonName={pokemonName}
            url={move.move.url}
            moveName={move.move.name}
            key={move.move.name}
          />
        );
      })}
    </Stack>
  );
};
