import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";

export function CountryCard() {
  return (
    <Box w="260px" h="280px" minW="260px" minH="280px">
      <Image
        src="/card-icons/london.svg"
        alt="Londres"
        objectFit="fill"
        width="100%"
      />

      <Flex
        justify="space-between"
        align="center"
        borderWidth="1px"
        borderTopWidth="0"
        borderStyle="solid"
        borderColor="yellow.400"
        p="18px"
      >
        <Stack>
          <Text as="span" fontSize="20" color="gray.700" fontWeight="semibold">
            Londres
          </Text>
          <Text as="span" fontSize="14px" color="gray.400">
            Reino Unido
          </Text>
        </Stack>

        <Image src="/card-icons/united-kingdom.svg" />
      </Flex>
    </Box>
  );
}
