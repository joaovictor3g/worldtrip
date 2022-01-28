import { Box, Flex, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import Head from "next/head";
import { CountryCard } from "../../components/Continent/CountryCard";
import { CountryInfos } from "../../components/Continent/CountryInfos";

export default function CountryDetail() {
  return (
    <>
      <Head>
        <title>worldtrip | Europe</title>
        <meta
          name="description"
          content="Application developed by João Victor"
          key="desc"
          property="og:description"
        />
        <meta property="og:title" content="worldtrip" />
        <meta property="og:image" content="/apa.png" />
      </Head>
      <Flex flexDir="column">
        <Box w="100%" h={["150px", "500px"]} position="relative">
          <Image
            src="/europe-country.png"
            alt="contry europe"
            objectFit="cover"
            w="100%"
            h="100%"
          />

          <Box maxW="1200px" position="relative" m="0 auto" px={2}>
            <Text
              as="h1"
              position="absolute"
              bottom={["50%", "60px"]}
              fontSize={["28px", "48px"]}
              fontWeight="semibold"
              color="white"
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
          px={2}
        >
          <SimpleGrid minChildWidth="300px" columnGap="50px">
            <Box>
              <Text fontSize={["14px", "24px"]} textAlign="justify">
                A Europa é, por convenção, um dos seis continentes do mundo.
                Compreendendo a península ocidental da Eurásia, a Europa
                geralmente divide-se da Ásia a leste pela divisória de águas dos
                montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro
                a sudeste
              </Text>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <CountryInfos amount={50} text="países" />
              <CountryInfos amount={60} text="línguas" />
              <CountryInfos amount={24} text="Cidades +100" />
            </Box>
          </SimpleGrid>

          <Stack spacing="40px">
            <Text as="h1" fontSize="36px">
              Cidades +100
            </Text>

            <SimpleGrid
              h="auto"
              minChildWidth="260px"
              placeItems="center"
              spacing="40px"
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
    </>
  );
}
