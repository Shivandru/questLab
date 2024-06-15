import { useRef, useEffect } from "react";
import { Box, Flex, Center, Image, Heading, Text } from "@chakra-ui/react";
import modelAi from "../assets/modelAi.svg";
import { motion, useAnimation } from "framer-motion";
const MotionFlex = motion(Flex);
const AiGen = () => {
  const controls = useAnimation();
  const aiGenRef = useRef(null);

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

    if (aiGenRef.current) {
      observer.observe(aiGenRef.current);
    }

    return () => {
      if (aiGenRef.current) {
        observer.unobserve(aiGenRef.current);
      }
    };
  }, [controls]);

  return (
    <MotionFlex
      ref={aiGenRef}
      initial={{ y: 100, opacity: 0 }}
      animate={controls}
      w="100%"
      h="auto"
      p="0.5rem"
      justify={"space-between"}
      mt={"2rem"}
      flexDirection={{ base: "column", sm: "column", md: "row" }}
    >
      <Box w={{ base: "100%", sm: "100%", md: "55%" }}>
        <Image src={modelAi} alt="aiGen" />
      </Box>
      <Center
        flexDirection={"column"}
        w={{ base: "100%", sm: "100%", md: "40%" }}
      >
        <Heading
          color={"#ffffff"}
          fontSize={"30px"}
          fontWeight={500}
          textAlign={{ base: "center", sm: "center", md: "left" }}
          pt={{ base: "2rem", sm: "2rem", md: "0" }}
        >
          AI generated mini-segments to target in active user
        </Heading>
        <Text
          color="#939393"
          mt="1rem"
          textAlign={{ base: "center", sm: "center", md: "left" }}
        >
          Our analytical models find common traits for users that are not active
          and creates thousands of segments to activate them
        </Text>
      </Center>
    </MotionFlex>
  );
};

export default AiGen;
