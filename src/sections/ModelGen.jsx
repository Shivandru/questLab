import { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import AiGenImg from "../assets/AiGen.svg";
import { Box, Flex, Center, Image, Heading, Text } from "@chakra-ui/react";
const MotionFlex = motion(Flex);
const ModelGen = () => {
  const controls = useAnimation();
  const modelGenRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({
            y: 0,
            opacity: 1,
            transition: { duration: 1 },
          });
        }
      },
      { threshold: 0.1 }
    );

    if (modelGenRef.current) {
      observer.observe(modelGenRef.current);
    }

    return () => {
      if (modelGenRef.current) {
        observer.unobserve(modelGenRef.current);
      }
    };
  }, [controls]);

  return (
    <MotionFlex
      ref={modelGenRef}
      initial={{ y: 100, opacity: 0 }}
      animate={controls}
      w="100%"
      h="auto"
      p="0.5rem"
      justify={"space-between"}
      mt={"5rem"}
      flexDirection={{
        base: "column-reverse",
        sm: "column-reverse",
        md: "row",
      }}
    >
      <Center
        flexDirection={"column"}
        w={{ base: "100%", sm: "100%", md: "40%" }}
      >
        <Heading
          color={"#ffffff"}
          fontSize={"30px"}
          fontWeight={500}
          textAlign={{ base: "center", sm: "center", md: "left" }}
          mt={{ base: "2rem", sm: "2rem", md: "0" }}
        >
          Our models generate AI variants to optimize text, images, and UI
          layouts for each segment.
        </Heading>
        <Text
          color="#939393"
          mt="1rem"
          textAlign={{ base: "center", sm: "center", md: "left" }}
        >
          Easily find winning variants among millions of variants to power users
          across the customer journey
        </Text>
      </Center>
      <Box w={{ base: "100%", sm: "100%", md: "55%" }}>
        <Image src={AiGenImg} alt="aiGen" />
      </Box>
    </MotionFlex>
  );
};

export default ModelGen;
