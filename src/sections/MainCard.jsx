import {
  Box,
  Center,
  Text,
  Stack,
  Avatar,
  Image,
  Spacer,
} from "@chakra-ui/react";

const MainCard = ({ para, name, position, companyLogo, avatar }) => {
  return (
    <Center py={6} h="auto">
      <Box
        maxW={"445px"}
        w={"full"}
        bg="#18171e"
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
        h="20rem"
      >
        <Stack>
          <Text color={"#d5d4d6"}>{para}</Text>
        </Stack>
        <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
          <Avatar src={avatar} />
          <Stack direction={"column"} spacing={0} fontSize={"sm"}>
            <Text fontWeight={600} color={"#ffffff"}>
              {name}
            </Text>
            <Text color={"#d5d4d6"}>{position}</Text>
          </Stack>
          <Spacer />
          <Image src={companyLogo} alt="comapnyLogo" w={"5rem"} />
        </Stack>
      </Box>
    </Center>
  );
};

export default MainCard;
