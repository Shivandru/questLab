import { Stack, Text, Box } from "@chakra-ui/react";
const FooterSection = ({ title, links }) => {
  return (
    <Stack align={"flex-start"}>
      <Text fontWeight={"500"} fontSize={"14px"} mb={2}>
        {title}
      </Text>
      {links?.map((link, index) => (
        <Box as="a" href={"#"} color={"#a0a0a0"} key={index}>
          {link}
        </Box>
      ))}
    </Stack>
  );
};

export default FooterSection;
