import { usePokemonTeam } from "@/hooks/usePokemonTeam";
import { pokemonSpriteUrl } from "@/lib/pokemon";
import {
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  HStack,
} from "@chakra-ui/react";
import Image from "next/image";
import { PokemonDescription } from "./PokemonDescription";

interface PokemonAccordionProps {
  pokemonName: string;
  index: number;
}

export const PokemonAccordion = ({
  pokemonName,
  index,
}: PokemonAccordionProps) => {
  const { handleAddPokemon } = usePokemonTeam();

  return (
    <AccordionItem border="1px" rounded="lg">
      <h2>
        <HStack>
          <AccordionButton>
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
            <Button onClick={() => handleAddPokemon(pokemonName, index)}>
              Pick
            </Button>
          </Box>
        </HStack>
      </h2>
      <AccordionPanel pb={4}>
        <PokemonDescription pokemonName={pokemonName} />
      </AccordionPanel>
    </AccordionItem>
  );
};
