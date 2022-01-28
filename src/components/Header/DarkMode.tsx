import { Button, Icon, useColorMode } from "@chakra-ui/react";
import { IoIosSunny } from "react-icons/io";
import { IoMoonSharp } from "react-icons/io5";

export function DarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button
      display="flex"
      flex="1"
      onClick={toggleColorMode}
      maxW={50}
      justifySelf="flex-end"
      ml="auto"
    >
      {colorMode === "light" ? (
        <Icon as={IoIosSunny} fontSize={["20px", "30px"]} color="yellow.400" />
      ) : (
        <Icon as={IoMoonSharp} fontSize={["20px", "25px"]} color="yellow.400" />
      )}
    </Button>
  );
}
