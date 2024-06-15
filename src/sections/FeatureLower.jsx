import { useRef, useEffect } from "react";
import { Box, Text, Heading, Flex, Image } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import image1 from "../assets/image1.svg";
import image2 from "../assets/image2.svg";
const MotionFlex = motion(Flex);
const FeatureLower = () => {
  const controls = useAnimation();
  const flexRef = useRef(null);
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

    if (flexRef.current) {
      observer.observe(flexRef.current);
    }

    return () => {
      if (flexRef.current) {
        observer.unobserve(flexRef.current);
      }
    };
  }, [controls]);
  return (
    <MotionFlex
      ref={flexRef}
      initial={{ y: 100, opacity: 0 }}
      animate={controls}
      w="100%"
      h="auto"
      justify={"space-between"}
      mt="1rem"
      flexDirection={{ base: "column", sm: "column", md: "row" }}
    >
      <Box
        w={{ base: "100%", sm: "100%", md: "38%" }}
        h="auto"
        bg="#202020"
        p="0.5rem"
        borderRadius={"0.7rem"}
      >
        <Image src={image1} alt="featuresLogo1" w="100%" />
        <Heading
          color={"#ffffff"}
          textAlign={"center"}
          fontSize={"24px"}
          pt="2.5rem"
        >
          Enterprise-Grade SDKs
        </Heading>
        <Text color={"#939393"} textAlign={"center"} pt="0.7rem">
          Build on a solid foundation with our robust SDKs, designed for
          scalability and performance.
        </Text>
      </Box>
      <Box
        w={{ base: "100%", sm: "100%", md: "57%" }}
        h="auto"
        bg={"#202020"}
        p="0.5rem"
        borderRadius={"0.7rem"}
        mt={{ base: "1rem", sm: "2rem", md: "0" }}
      >
        <Image src={image2} alt="featuresLogo2" w="100%" />
        <Heading color={"#ffffff"} textAlign={"center"} fontSize={"24px"}>
          Fully Customizable to your Brand
        </Heading>
        <Text color={"#939393"} textAlign={"center"} pt="0.7rem">
          Your brand, your way—personalize every aspect of your platform to
          stand out.
        </Text>
      </Box>
    </MotionFlex>
  );
};

export default FeatureLower;
