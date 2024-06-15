import { Box, Heading, Text, Image } from "@chakra-ui/react";
const FeatureCard = ({ pic, title, des }) => {
  return (
    <Box
      bg="#202020"
      p="0.5rem"
      borderRadius={"0.7rem"}
      w={{ base: "100%", md: "30%" }}
      mt={{ base: "2rem", sm: "2rem", md: "0" }}
    >
      <Image src={pic} alt="FeatureCardPic" w="100%" />
      <Heading color={"#ffffff"} textAlign={"center"} fontSize={"24px"}>
        {title}
      </Heading>
      <Text color={"#939393"} textAlign={"center"} pt="0.7rem">
        {des}
      </Text>
    </Box>
  );
};

export default FeatureCard;
