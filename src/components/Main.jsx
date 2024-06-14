import Hero from "./Hero";
import { Container } from "@chakra-ui/react";
import dottedRight from "../assets/rightSideDots.svg";

const Main = () => {
  return (
    <main>
      <Container
        maxW={"7xl"}
        border={"1px solid black"}
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
    </main>
  );
};

export default Main;
