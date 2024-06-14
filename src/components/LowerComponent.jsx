import React from "react";
import { Box, Heading, Text, Image } from "@chakra-ui/react";
import lower1 from "../assets/lower1.svg";
import lower2 from "../assets/lower2.svg";
import lower3 from "../assets/lower3.svg";
import lower4 from "../assets/lower4.svg";
import lower5 from "../assets/lower5.svg";
import lower6 from "../assets/lower6.svg";
import Card from "../sections/Card";
const LowerComponent = () => {
  return (
    <Box
      display={"grid"}
      gridTemplateColumns={{
        base: "repeat(1, 1fr)",
        sm: "repeat(2, 1fr)",
        md: "repeat(3, 1fr)",
      }}
      gap={"1rem"}
      h="auto"
      w="100%"
      p="1rem"
      mt="1rem"
      mb="1rem"
    >
      <Card
        pic={lower1}
        title={"AI Personalization"}
        des={
          "AI-driven personalization enhances user engagement with unique experiences."
        }
      />
      <Card
        pic={lower2}
        title={"Real-Time Insights"}
        des={
          "Utilize our analytics for instant insights on user behavior and app performance."
        }
      />
      <Card
        pic={lower3}
        title={"Seamless SDK Integration"}
        des={
          "Effortlessly integrate with our robust, cross-platform SDKs for maximum compatibility."
        }
      />
      <Card
        pic={lower4}
        title={"Dynamic Content"}
        des={
          "Keep content engaging with AI-powered optimization, adapting to user preferences."
        }
      />
      <Card
        pic={lower5}
        title={"Highly Scalable"}
        des={
          "Quest's scalable solutions ensure seamless growth without performance compromise."
        }
      />
      <Card
        pic={lower6}
        title={"Robust Security"}
        des={
          "Quest ensures security with data protection, compliance, and secure transactions."
        }
      />
    </Box>
  );
};

export default LowerComponent;
