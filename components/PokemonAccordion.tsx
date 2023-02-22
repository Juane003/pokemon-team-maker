import { usePokemonTeam } from "@/hooks/usePokemonTeam";
import { getPokemon, pokemonSpriteUrl } from "@/lib/pokemon";
import {
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  HStack,
} from "@chakra-ui/react";
import Image from "next/image";
import { Pokemon } from "pokenode-ts";
import { useMemo, useState } from "react";
import { PokemonDescription } from "./PokemonDescription";

interface PokemonAccordionProps {
  pokemonName: string;
  index: number;
  // onAddPokemon: (addedPokemon: PokemonTeam) => void;
}

export const PokemonAccordion = ({
  pokemonName,
  index,
}: PokemonAccordionProps) => {
  const [pokemonData, setPokemonData] = useState<Pokemon | null>(null);
  const { handleAddPokemon } = usePokemonTeam();
  const fetchPokemon = async () => {
    try {
      const currentPokemon = await getPokemon(pokemonName);

      setPokemonData(currentPokemon);
    } catch {
      console.log("Error on Fetch");
    }
  };

  const addedPokemon = useMemo(() => {
    return {
      name: pokemonName,
      image: `${pokemonSpriteUrl}${index}.png`,
    };
  }, []);

  return (
    <AccordionItem border="1px" rounded="lg">
      <h2>
        <HStack>
          <AccordionButton onClick={fetchPokemon}>
            <Image
              src={`${pokemonSpriteUrl}${index}.png`}
              alt={pokemonName}
              width={50}
              height={50}
            />
            <Box as="span" flex="1" textAlign="left">
              {pokemonName.toUpperCase()}
            </Box>
          </AccordionButton>
          <Box pr="2">
            <Button onClick={() => handleAddPokemon(addedPokemon)}>Pick</Button>
          </Box>
        </HStack>
      </h2>
      <AccordionPanel pb={4}>
        <PokemonDescription pokemon={pokemonData} />
      </AccordionPanel>
    </AccordionItem>
  );
};
