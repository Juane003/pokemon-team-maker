import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { PokemonMove } from "pokenode-ts";
import { MovesTable } from "./MovesTable";

interface MovesTableModalProps {
  moves: PokemonMove[];
  pokemonName: string;
}

export const MovesTableModal = ({
  moves,
  pokemonName,
}: MovesTableModalProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen} w="full" mt="4">
        View Skills
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="5xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Move List</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <MovesTable moves={moves} pokemonName={pokemonName} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
