import { Image, Stack, Text } from "@chakra-ui/react";

interface TravelTypeProps {
  text: string;
  src: string;
  alt: string;
}

export function TravelType({ alt, src, text }: TravelTypeProps) {
  return (
    <Stack align="center" justify="center" spacing="6">
      <Image src={src} alt={alt} />
      <Text color="gray.600" fontWeight="bold" fontSize="24px">
        {text}
      </Text>
    </Stack>
  );
}
