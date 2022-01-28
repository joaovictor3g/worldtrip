import { Button, Flex, Image, useColorMode } from "@chakra-ui/react";

export function Header() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      as="header"
      justify="center"
      align="center"
      h={{ base: 50, lg: 100 }}
      w="100%"
    >
      <Image
        src="/logo.svg"
        alt="logo"
        w={{ base: 81, lg: 190 }}
        h={{ base: 20, lg: 46 }}
      />

      {/* <Button
        display="flex"
        flex="1"
        onClick={toggleColorMode}
        maxW={50}
        justifySelf="flex-end"
      >
        {colorMode === "light" ? "Dark" : "Light"}
      </Button> */}
    </Flex>
  );
}
