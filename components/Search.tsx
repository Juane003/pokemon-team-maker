import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import { ChangeEvent } from "react";

interface SearchProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  value: string;
  w?: string;
}

export const Search = ({ onChange, placeholder, value, w }: SearchProps) => {
  return (
    <InputGroup size="sm" w={w}>
      <Input
        type="text"
        variant="filled"
        onChange={onChange}
        placeholder={placeholder}
        value={value}
      />
      <InputLeftAddon>
        <SearchIcon />
      </InputLeftAddon>
    </InputGroup>
  );
};
