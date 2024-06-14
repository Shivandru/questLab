import React from "react";
import { Box, Heading, Text, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
const MotionBox = motion(Box);
const Card = ({ pic, title, des, controls }) => {
  return (
    <>
      <MotionBox
        h="auto"
        bg={"#151515"}
        p="1rem"
        borderRadius={"0.7rem"}
        animate={controls}
        initial={{ y: 100, opacity: 0 }}
        whileHover={{ scale: 1.05 }}
      >
        <Image src={pic} m="auto" />
        <Heading
          color="#ffffff"
          mt="1rem"
          textAlign={"center"}
          fontSize={"24px"}
        >
          {title}
        </Heading>
        <Text color="#ffffff" mt={"1rem"} textAlign={"center"}>
          {des}
        </Text>
      </MotionBox>
    </>
  );
};

export default Card;
