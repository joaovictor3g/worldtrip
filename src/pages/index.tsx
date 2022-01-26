import {
  Box,
  Flex,
  Image,
  Heading,
  Stack,
  Text,
  Divider,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { TravelType } from "../components/TravelType";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

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

const Home: NextPage = () => {
  return (
    <Flex flexDir="column">
      <Box zIndex="1" h="335px" position="relative">
        <Image
          src="/background.png"
          alt="background"
          position="absolute"
          w="100%"
          h="100%"
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
              fontSize={["2rem", "2rem", "2.25rem"]}
              lineHeight="50px"
            >
              5 Continentes,
              <Text>infinitas possibilidades.</Text>
            </Heading>
            <Text>
              Chegou a hora de tirar do papel a viagem que você{" "}
              <Text>sempre sonhou.</Text>
            </Text>
          </Stack>

          <Image
            src="/airplane.svg"
            zIndex="1"
            position="absolute"
            right="32px"
            bottom="-30px"
          />
        </Flex>
      </Box>
      <Flex
        as="main"
        maxW={1200}
        m="80px auto"
        w="100%"
        px="8"
        gap="80px"
        flexDir="column"
      >
        <Flex justify="space-between">
          {Object.entries(travelOptions).map(([key, value]) => (
            <TravelType key={key} src={value.src} alt={value.alt} text={key} />
          ))}
        </Flex>
        <Divider size="90" bgColor="gray.900" />
        <Box textAlign="center">
          <Text color="gray.600" fontSize="36px">
            Vamos nessa?{" "}
          </Text>
          <Text color="gray.600" fontSize="36px">
            Então escolha seu continente
          </Text>
        </Box>

        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <Image src="/slider/europa.jpg" w="100%" />
          </SwiperSlide>
          {/* <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide> */}
        </Swiper>
      </Flex>
    </Flex>
  );
};

export default Home;
