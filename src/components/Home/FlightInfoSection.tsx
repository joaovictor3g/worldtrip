import { Box, Image, Flex, Stack, Heading, Text } from "@chakra-ui/react";

interface FlightInfoSectionProps {
  isWideVersion?: boolean;
}

export function FlightInfoSection({
  isWideVersion = true,
}: FlightInfoSectionProps) {
  return (
    <Box zIndex="1" h={["160px", "335px"]} position="relative">
      <Image
        src="/background.png"
        alt="background"
        position="absolute"
        w="100%"
        h="100%"
        objectFit="fill"
      />

      <Flex
        maxW={1200}
        px="8"
        position="relative"
        m="0 auto"
        zIndex="1"
        w="100%"
        h="100%"
        justify="space-between"
        align="center"
      >
        <Stack zIndex="1">
          <Heading
            fontWeight="medium"
            fontSize={["20px", "36px"]}
            lineHeight={["30px", "50px"]}
            color="white"
          >
            5 Continentes,
            <Text>infinitas possibilidades.</Text>
          </Heading>
          <Text fontSize={["14px", "20px"]} color="white">
            Chegou a hora de tirar do papel a viagem que você{" "}
            {isWideVersion ? <Text>sempre sonhou.</Text> : "sempre sonhou"}
          </Text>
        </Stack>

        {isWideVersion && (
          <Image
            src="/airplane.svg"
            zIndex="1"
            position="absolute"
            right="32px"
            bottom="-30px"
          />
        )}
      </Flex>
    </Box>
  );
}
