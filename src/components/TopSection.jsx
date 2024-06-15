import { Box, Heading, Text } from "@chakra-ui/react";
import AiGen from "../sections/AiGen";
import ModelGen from "../sections/ModelGen";
const TopSection = () => {
  return (
    <Box mt="1rem" w="80%" m="auto">
      <Heading
        textAlign={"center"}
        fontWeight={500}
        color={"#ffffff"}
        noOfLines={2}
        fontSize={"48px"}
      >
        Let our AI find the best ways to engage & convert your users
      </Heading>
      <Text textAlign={"center"} mt="1rem" color={"#b9b9b9"}>
        Generate Personalized In-App Text, Image, UI at Scale for Millions of
        Users without engineering team
      </Text>
      <Box>
        <AiGen />
        <ModelGen />
      </Box>
    </Box>
  );
};

export default TopSection;
