import { Flex, Divider, useBreakpointValue } from "@chakra-ui/react";
import type { NextPage } from "next";
import "swiper/css";
import { SwiperSection } from "../components/Home/SwiperSection";
import { GeneralInfoSection } from "../components/Home/GeneralInfoSection";
import { FlightInfoSection } from "../components/Home/FlightInfoSection";
import Head from "next/head";

const Home: NextPage = () => {
  const isWideVersion = useBreakpointValue({ base: false, lg: true });

  return (
    <>
      <Head>
        <title>worldtrip | Início</title>
        <meta
          name="description"
          content="Application developed by João Victor"
          key="desc"
          property="og:description"
        />
        <meta property="og:title" content="worldtrip" />
        <meta property="og:image" content="/capa.png" />
      </Head>
      <Flex flexDir="column">
        <FlightInfoSection isWideVersion={isWideVersion} />
        <Flex
          as="main"
          maxW={1200}
          m={["20px auto", "80px auto"]}
          w="100%"
          px={["0", "8"]}
          gap={["20px", "80px"]}
          flexDir="column"
        >
          <GeneralInfoSection isWideVersion={isWideVersion} />
          <Divider size="90" bgColor="gray.900" />
          <SwiperSection />
        </Flex>
      </Flex>
    </>
  );
};

export default Home;
