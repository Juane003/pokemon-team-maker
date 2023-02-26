import { useQuery } from "react-query";
import Image from "next/image";
import { getType, getTypeBgColor } from "@/lib/pokemonTypes";
import { Box, Grid, GridItem, Text, Tooltip, Button } from "@chakra-ui/react";
import { PokemonType } from "@/types/types";
import { fetcher, replaceHyphen } from "@/lib/pokemon";
import { usePokemonTeam } from "@/hooks/usePokemonTeam";

interface MovesTableDataProps {
  url: string;
  moveName: string;
  pokemonName: string;
}

const parseFlavorText = (flavorText: string, correctText: string) =>
  flavorText.replace("$effect_chance", correctText);

export const MovesTableData = ({
  url,
  moveName,
  pokemonName,
}: MovesTableDataProps) => {
  const { data, isLoading, isError } = useQuery(["move-type", moveName], () =>
    fetcher(url)
  );
  const { handleAddMove } = usePokemonTeam();
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error on Fetch</div>;
  if (!data) return null;

  return (
    <>
      <Grid
        templateColumns="repeat(7, 1fr)"
        textAlign={"center"}
        alignItems={"center"}
      >
        <GridItem>
          <Box key={data.name}>
            <Text textTransform="capitalize">{replaceHyphen(data.name)}</Text>
          </Box>
        </GridItem>
        <GridItem>
          <Box display="flex" alignItems="center" justifyContent={"center"}>
            <Box
              bgColor={getTypeBgColor(data.type.name as PokemonType)}
              rounded="full"
              padding="2"
              w="max-content"
            >
              <Image
                src={getType(data.type.name)}
                alt={data.type.name}
                height={35}
                width={32}
              />
            </Box>
          </Box>
        </GridItem>
        <GridItem>
          <Text textAlign={"left"} textTransform="capitalize">
            {data.damage_class.name}
          </Text>
        </GridItem>
        <GridItem>
          <Tooltip
            label={
              <Text>
                {data.effect_entries[0] !== undefined
                  ? parseFlavorText(
                      data.effect_entries[0].effect,
                      data.effect_chance
                    )
                  : ""}
              </Text>
            }
          >
            <Text noOfLines={2} textAlign={"left"}>
              {data.effect_entries[0] !== undefined
                ? parseFlavorText(
                    data.effect_entries[0].short_effect,
                    data.effect_chance
                  )
                : ""}
            </Text>
          </Tooltip>
        </GridItem>
        <GridItem>
          <Text>{data.accuracy ?? "-"}</Text>
        </GridItem>
        <GridItem>
          <Text>{data.power ?? "-"}</Text>
        </GridItem>
        <GridItem>
          <Button onClick={() => handleAddMove(pokemonName, data)}>
            Select
          </Button>
        </GridItem>
      </Grid>
    </>
  );
};
