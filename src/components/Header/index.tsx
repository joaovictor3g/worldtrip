import { Box, Flex, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { DarkMode } from "./DarkMode";
import { Back } from "./Back";

export function Header() {
  const { asPath } = useRouter();
  const notInHome = asPath !== "/";

  return (
    <Flex
      as="header"
      justify="center"
      align="center"
      h={{ base: 50, lg: 100 }}
      w="100%"
      maxW="1200px"
      m="0 auto"
      px={4}
    >
      {notInHome && <Back to="/" />}

      <Flex justifyContent={"center"} flex="1">
        <Image
          src="/logo.svg"
          alt="logo"
          w={{ base: 81, lg: 190 }}
          h={{ base: 20, lg: 46 }}
        />
      </Flex>

      <DarkMode />
    </Flex>
  );
}
