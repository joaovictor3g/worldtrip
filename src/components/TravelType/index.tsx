import { Box, Image, Stack, Text } from "@chakra-ui/react";

interface TravelTypeProps {
  text: string;
  src: string;
  alt: string;
  isWideVersion?: boolean;
}

export function TravelType({
  alt,
  src,
  text,
  isWideVersion = true,
}: TravelTypeProps) {
  return (
    <Stack
      align={"center"}
      justify="center"
      spacing="6"
      direction={{ base: "row", lg: "column" }}
    >
      {isWideVersion ? (
        <Image src={src} alt={alt} />
      ) : (
        <Box borderRadius="50%" bgColor="yellow.500" w="8px" h="8px" />
      )}
      <Text color="gray.600" fontWeight="bold" fontSize={["18px", "24px"]}>
        {text}
      </Text>
    </Stack>
  );
}
