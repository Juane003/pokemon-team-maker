import type { AppProps } from "next/app";
import { Box, ChakraProvider, HStack } from "@chakra-ui/react";
import { PokemonTeam } from "@/components/PokemonTeam";
import { QueryClient, QueryClientProvider } from "react-query";

interface PokemonTeam {
  name: string;
  image: string;
}

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <Box p="8">
          <HStack justifyContent="space-between" mb={8}>
            <PokemonTeam />
          </HStack>
          <Component {...pageProps} />
        </Box>
      </ChakraProvider>
    </QueryClientProvider>
  );
}
