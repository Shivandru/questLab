import Hero from "./Hero";
import { Container } from "@chakra-ui/react";
import dottedRight from "../assets/rightSideDots.svg";
import MainSwiper from "./MainSwiper";
import LowerComponent from "./LowerComponent";
import TopSection from "./TopSection";
import Features from "./Features";

const Main = () => {
  return (
    <main>
      <Container
        maxW={"7xl"}
        h="auto"
        mt="4.5rem"
        bg="#0d0d0d"
        color={"#ffffff"}
        sx={{
          backgroundImage: `url(${dottedRight})`,
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
          backgroundSize: "700px 700px",
        }}
      >
        <Hero />
      </Container>
      <Container maxW={"7xl"} h="auto">
        <TopSection />
        <Features />
        <LowerComponent />
        <MainSwiper />
      </Container>
    </main>
  );
};

export default Main;
