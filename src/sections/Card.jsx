import React from "react";
import { Box, Heading, Text, Image } from "@chakra-ui/react";
const Card = ({ pic, title, des }) => {
  return (
    <>
      <Box h="auto" bg={"#151515"} p="1rem" borderRadius={"0.7rem"}>
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
      </Box>
    </>
  );
};

export default Card;
