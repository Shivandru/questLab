import dottedLeft from "../assets/leftSideDots.svg";
import heroImage from "../assets/heroImage.svg";
import {
  Box,
  Text,
  Heading,
  Input,
  Flex,
  InputGroup,
  InputRightElement,
  Button,
  Image,
} from "@chakra-ui/react";
import brandLogoSvg from "../assets/brandLogoSvg.svg";
const Hero = () => {
  return (
    <Box
      p={"2rem"}
      border={"1px solid black"}
      sx={{
        backgroundImage: `url(${dottedLeft})`,
        backgroundPosition: "left",
        backgroundRepeat: "no-repeat",
        backgroundSize: "700px 700px",
      }}
    >
      <Heading
        fontSize={"64px"}
        lineHeight={"72px"}
        noOfLines={2}
        textAlign={"center"}
        fontWeight={600}
      >
        Transform Your Product with Intelligent In-App Experiences
      </Heading>
      <Box pt={"3rem"} w="50%" m="auto">
        <Text
          fontSize={"16px"}
          lineHeight={"24px"}
          textAlign={"center"}
          noOfLines={{ base: 3, md: 2 }}
          fontWeight={600}
        >
          Empower growth & Marketing Teams to Boost Engagement and Conversion
          10x faster without data or engineering team
        </Text>
        <InputGroup
          size="lg"
          w={{ base: "100%", md: "80%" }}
          m="auto"
          mt="2rem"
        >
          <Input
            pr="4.5rem"
            type="email"
            border={"1px solid #4299E1"}
            placeholder="Enter your mail address"
          />
          <InputRightElement width="fit-content">
            <Button
              h="auto"
              p="0.5rem"
              size="lg"
              fontSize={"12px"}
              mr="0.5rem"
              variant={"outline"}
              color={"#ffffff"}
              border={"1px solid #9035ff"}
            >
              Book Demo
            </Button>
          </InputRightElement>
        </InputGroup>
        <Text textAlign={"center"} mt="1rem">
          No credit card required
        </Text>
      </Box>
      <Flex
        m="auto"
        w="100%"
        h="auto"
        justify={"center"}
        mt="3rem"
        borderRadius="8px"
      >
        <Image
          src={heroImage}
          alt="heroImage"
          sx={{
            boxShadow: `
              0 0 20px rgba(144, 53, 255, 0.6), 
              0 0 40px rgba(144, 53, 255, 0.4), 
              0 0 60px rgba(144, 53, 255, 0.2)
            `,
            borderRadius: "inherit",
          }}
        />
      </Flex>
      <Box
        position="fixed"
        bottom="20px"
        right="20px"
        width="4rem"
        height="4rem"
        display="flex"
        alignItems="center"
        justifyContent="center"
        background="#ffffff"
        borderRadius="50%"
        boxShadow="0px 0px 4px 4px #00000026"
        zIndex="999"
        bgGradient={"linear(to-r, #9035ff,#4299E1)"}
        _hover={{
          bg: "pink.300",
          cursor: "pointer",
        }}
      >
        <Image src={brandLogoSvg} alt="companyLogo" />
      </Box>
    </Box>
  );
};

export default Hero;
