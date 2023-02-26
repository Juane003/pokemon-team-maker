import Image from "next/image";
import { PokemonTeam, PokemonType } from "@/types/types";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  CloseButton,
  Grid,
  GridItem,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { usePokemonQuery } from "@/hooks/usePokemonQuery";
import { getGradientBgFromTypes } from "@/lib/pokemonTypes";
import { pokemonGifUrl, replaceHyphen } from "@/lib/pokemon";
import { MovesTableModal } from "./MovesTableModal";
import { usePokemonTeam } from "@/hooks/usePokemonTeam";
import { CloseIcon } from "@chakra-ui/icons";

interface PokemonCardProps {
  pokemon: PokemonTeam;
}

export const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const { pokemonTeam, handleRemoveMove, handleRemovePokemon } =
    usePokemonTeam();
  const { data, isLoading, isError } = usePokemonQuery(pokemon.name);
  if (!pokemon) return null;
  if (isLoading) return <Box w={60}>Loading...</Box>;
  if (isError) return <div>Error on fetch</div>;
  if (!data) return null;

  const getBgColor = getGradientBgFromTypes(
    data.types[0].type.name as PokemonType,
    data.types[1]?.type.name as PokemonType | undefined
  );
  return (
    <Card w={72} bgGradient={getBgColor}>
      <CloseButton onClick={() => handleRemovePokemon(pokemon)} />
      <CardHeader textAlign="center">
        <Heading size="md" textTransform="capitalize">
          {pokemon.name}
        </Heading>
      </CardHeader>
      <CardBody>
        <Stack alignItems="center">
          <Box h="40">
            <Image
              src={`${pokemonGifUrl}${pokemon.name}.gif`}
              alt={pokemon.name}
              height={200}
              width={100}
            />
          </Box>
          <Grid templateColumns="repeat(2, 1fr)" gap={2}>
            {pokemonTeam
              .filter(
                (pokemonFromTeam) => pokemonFromTeam?.name === pokemon.name
              )[0]
              ?.moves.map((move, index) => {
                if (move === null) {
                  return (
                    <GridItem key={index}>
                      <Text
                        bgColor={"gray.100"}
                        w="32"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        borderWidth={3}
                        h={8}
                        borderColor={"gray.400"}
                        rounded="md"
                      ></Text>
                    </GridItem>
                  );
                }
                return (
                  <GridItem key={move.id}>
                    <Text
                      position="relative"
                      textTransform="capitalize"
                      bgColor={"gray.100"}
                      display="flex"
                      w="32"
                      justifyContent="center"
                      alignItems="center"
                      borderWidth={3}
                      h={8}
                      borderColor={"gray.400"}
                      rounded="md"
                      whiteSpace="nowrap"
                      fontSize="sm"
                    >
                      {replaceHyphen(move.name)}
                      <button
                        onClick={() => handleRemoveMove(pokemon.name, move)}
                        style={{
                          position: "absolute",
                          top: "0",
                          right: "0",
                          padding: "5px",
                          height: "0.2rem",
                          width: "0.2rem",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          backgroundColor: "red",
                          borderRadius: "100%",
                        }}
                      >
                        <span
                          style={{
                            color: "white",
                            fontWeight: "bold",
                            marginBottom: "3px",
                          }}
                        >
                          <CloseIcon w={"1.5"} />
                        </span>
                      </button>
                    </Text>
                  </GridItem>
                );
              })}
          </Grid>
        </Stack>
        <MovesTableModal moves={data.moves} pokemonName={pokemon.name} />
      </CardBody>
    </Card>
  );
};
