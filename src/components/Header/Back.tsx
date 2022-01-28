import { IconButton } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { MdKeyboardArrowLeft } from "react-icons/md";

interface BackProps {
  to: string;
}

export function Back({ to }: BackProps) {
  const { push } = useRouter();

  function handleNavigateBack() {
    push(to);
  }

  return (
    <IconButton
      aria-label="Back home"
      icon={<MdKeyboardArrowLeft />}
      fontSize={["24px", "48px"]}
      onClick={handleNavigateBack}
    />
  );
}
