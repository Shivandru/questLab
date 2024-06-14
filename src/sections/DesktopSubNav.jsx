import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Text,
  Stack,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Box
      as="a"
      href={href}
      role={"group"}
      display={"block"}
      p={1}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("gray.200", "gray.700") }}
      bg="#292929"
      opacity="85.5%"
      color="#ffffff"
      w="10rem"
    >
      <Stack direction={"row"} align={"center"} spacing={1}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{
              color: useColorModeValue("purple.500", "purple.300"),
            }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text
            fontSize={"xs"}
            color={useColorModeValue("gray.600", "gray.400")}
          >
            {subLabel}
          </Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-5px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"purple.500"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Box>
  );
};

export default DesktopSubNav;
