import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Image,
} from "@chakra-ui/react";
import brandLogo from "../assets/brandLogo.png";
import FooterSection from "./FooterSection";
const FooterContent = () => {
  return (
    <>
      <Container
        as={Stack}
        maxW={"7xl"}
        py={10}
        borderBottom={"0.5px solid #2D3748"}
      >
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Image src={brandLogo} alt="brandLogo" w="41px" h="41px" />
              <Text fontWeight={"500"} fontSize={"14px"} mb={2}>
                Quest Labs INC
              </Text>
            </Box>
          </Stack>
          <FooterSection
            title="Resources"
            links={["Blog", "Newsletter", "Playbook", "Docs"]}
          />
          <FooterSection
            title="Support"
            links={["Contact", "Join Quest Club", "Sales Partner"]}
          />
          <FooterSection
            title="Legal"
            links={["Privacy Policy", "Terms of Use", "Cookie Policy"]}
          />
        </SimpleGrid>
      </Container>
      <Container m="auto" maxW={"7xl"} py={10} px="0">
        <Text fontSize={"sm"} fontWeight={"500"} color="#e6e6e6">
          © 2024 Quest Labs INC. All rights reserved.
        </Text>
      </Container>
    </>
  );
};

export default FooterContent;
