import { Box, Image, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";

export function SwiperSection() {
  const { push } = useRouter();

  return (
    <>
      <Box textAlign="center">
        <Text fontSize={["20px", "36px"]}>Vamos nessa? </Text>
        <Text fontSize={["20px", "36px"]}>Então escolha seu continente</Text>
      </Box>
      <Box pb={["0", "8"]}>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          slidesPerGroup={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          onClick={() => push(`/continent/europe`)}
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
        </Swiper>
      </Box>
    </>
  );
}
