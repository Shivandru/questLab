import { useRef, useEffect } from "react";
import { Box, Text, Heading, Flex } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import FeatureLower from "../sections/FeatureLower";
import FeatureCard from "../sections/FeatureCard";
import image3 from "../assets/image3.svg";
import image4 from "../assets/image4.svg";
import image5 from "../assets/image5.svg";
const MotionFlex = motion(Flex);
const Features = () => {
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
    <Box h="auto" w="100%" mb="5rem">
      <Text
        textAlign={"center"}
        color={"#ffffff"}
        fontWeight={600}
        mt="2rem"
        fontSize={"14px"}
      >
        Features
      </Text>
      <Heading
        textAlign={"center"}
        color={"#ffffff"}
        mt={"0.6rem"}
        fontSize={"48px"}
      >
        Robust & Scalable Platform & SDKs
      </Heading>
      <Text
        textAlign={"center"}
        color={"#b9b9b9"}
        mt={"1rem"}
        fontSize={"18px"}
      >
        Low-Code Dashboard, SDKs & APIs to drive product growth
      </Text>
      <FeatureLower />
      <MotionFlex
        ref={flexRef}
        initial={{ y: 100, opacity: 0 }}
        animate={controls}
        w="100%"
        h="auto"
        justify={"space-between"}
        mt="3rem"
        flexDirection={{ base: "column", sm: "column", md: "row" }}
        align={{ base: "center", sm: "center", md: "none" }}
      >
        <FeatureCard
          pic={image3}
          title="Plug & Play with Pre-Built Templates"
          des="Jumpstart your project using 100s of customi-zable templates for a seamless user experience."
        />
        <FeatureCard
          pic={image4}
          title="Unlock AI-Powered Insights"
          des="Leverage advanced analytics to drive data-driven decisions and foster growth."
        />
        <FeatureCard
          pic={image5}
          title="Stay Updated in Slack"
          des="Trigger Slack alerts to your team and automatically detect key intent signals."
        />
      </MotionFlex>
    </Box>
  );
};

export default Features;
