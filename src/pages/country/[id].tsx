import { Box, Flex, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { CountryCard } from "../../components/CountryCard";
import { CountryInfos } from "../../components/CountryInfos";

export default function CountryDetail() {
  return (
    <Flex flexDir="column">
      <Box w="100%" h={["150px", "500px"]} position="relative">
        <Image
          src="/europe-country.png"
          alt="contry europe"
          objectFit="cover"
          w="100%"
          h="100%"
        />

        <Box maxW="1200px" position="relative" m="0 auto" px={4}>
          <Text
            as="h1"
            position="absolute"
            bottom={["50%", "60px"]}
            fontSize={["28px", "48px"]}
            fontWeight="semibold"
          >
            Europa
          </Text>
        </Box>
      </Box>

      <Stack
        as="main"
        maxW="1200px"
        m={["20px auto", "80px auto"]}
        spacing={["20px", "80px"]}
        px={4}
      >
        <SimpleGrid minChildWidth="300px" columnGap="50px">
          <Box>
            <Text
              color="gray.700"
              fontSize={["14px", "24px"]}
              textAlign="justify"
            >
              A Europa é, por convenção, um dos seis continentes do mundo.
              Compreendendo a península ocidental da Eurásia, a Europa
              geralmente divide-se da Ásia a leste pela divisória de águas dos
              montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a
              sudeste
            </Text>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <CountryInfos amount={50} text="países" />
            <CountryInfos amount={60} text="línguas" />
            <CountryInfos amount={24} text="Cidades +100" />
          </Box>
        </SimpleGrid>

        <Stack spacing="40px">
          <Text as="h1" color="gray.700" fontSize="36px">
            Cidades +100
          </Text>

          <SimpleGrid
            h="auto"
            minChildWidth="260px"
            placeItems="center"
            spacing="45px"
          >
            {Array(6)
              .fill(0)
              .map((_, i) => (
                <CountryCard key={i} />
              ))}
          </SimpleGrid>
        </Stack>
      </Stack>
    </Flex>
  );
}
