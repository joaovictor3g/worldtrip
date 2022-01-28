import {
  Box,
  Flex,
  Image,
  Heading,
  Stack,
  Text,
  Divider,
  useBreakpointValue,
  SimpleGrid,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { TravelType } from "../components/TravelType";
import { Pagination, Navigation } from "swiper";
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
  const isWideVersion = useBreakpointValue({ base: false, lg: true });

  return (
    <Flex flexDir="column">
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
            >
              5 Continentes,
              <Text>infinitas possibilidades.</Text>
            </Heading>
            <Text fontSize={["14px", "20px"]}>
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
      <Flex
        as="main"
        maxW={1200}
        m={["20px auto", "80px auto"]}
        w="100%"
        px={["0", "8"]}
        gap={["20px", "80px"]}
        flexDir="column"
      >
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
        <Divider size="90" bgColor="gray.900" />
        <Box textAlign="center">
          <Text color="gray.600" fontSize={["20px", "36px"]}>
            Vamos nessa?{" "}
          </Text>
          <Text color="gray.600" fontSize={["20px", "36px"]}>
            Então escolha seu continente
          </Text>
        </Box>
        <Box pb={["0", "8"]}>
          <Swiper
            // modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            slidesPerGroup={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            onClick={() => alert("Clicado")}
            // navigation
            // pagination
            // dots
          >
            <SwiperSlide>
              <Image
                src="/slider/europa.jpg"
                w="100%"
                maxH={450}
                objectFit="fill"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/slider/europa.jpg"
                w="100%"
                maxH={450}
                objectFit="fill"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/slider/europa.jpg"
                w="100%"
                maxH={450}
                objectFit="fill"
              />
            </SwiperSlide>
            {/* <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide> */}
          </Swiper>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Home;
