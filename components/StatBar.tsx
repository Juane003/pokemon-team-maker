import { Progress } from "@chakra-ui/react";

interface StatBarProps {
  value: number;
  colorScheme: string;
}

export const StatBar = ({ value, colorScheme }: StatBarProps) => {
  return (
    <Progress
      value={value}
      max={150}
      size="sm"
      colorScheme={colorScheme}
      w="full"
    />
  );
};
