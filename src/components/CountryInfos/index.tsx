import { Stack, Text } from "@chakra-ui/react";

interface ICountryInfoProps {
  amount: number;
  text: string;
}

export function CountryInfos({ amount, text }: ICountryInfoProps) {
  return (
    <Stack align="center">
      <Text
        fontSize={["24px", "48px"]}
        fontWeight="semibold"
        color="yellow.400"
      >
        {amount}
      </Text>
      <Text fontSize={["16px", "24px"]} color="gray.700" fontWeight="semibold">
        {text}
      </Text>
    </Stack>
  );
}
