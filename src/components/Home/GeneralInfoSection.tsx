import { SimpleGrid } from "@chakra-ui/react";
import { TravelType } from "../Continent/TravelType";

interface GeneralInfoSectionProps {
  isWideVersion?: boolean;
}

const travelOptions = {
  "vida noturna": {
    src: "/icons/cocktail.svg",
    alt: "cocktail",
  },
  praia: {
    src: "/icons/surf.svg",
    alt: "beach",
  },
  moderno: {
    src: "/icons/building.svg",
    alt: "building",
  },
  clássico: {
    src: "/icons/museum.svg",
    alt: "museum",
  },
  "e mais...": {
    src: "/icons/earth.svg",
    alt: "more",
  },
};
export function GeneralInfoSection({
  isWideVersion = true,
}: GeneralInfoSectionProps) {
  return (
    <SimpleGrid minChildWidth="100px" spacing="20px" px={["8", "0"]}>
      {Object.entries(travelOptions).map(([key, value]) => (
        <TravelType
          key={key}
          src={value.src}
          alt={value.alt}
          text={key}
          isWideVersion={isWideVersion}
        />
      ))}
    </SimpleGrid>
  );
}
