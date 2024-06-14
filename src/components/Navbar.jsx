import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  useColorModeValue,
  useDisclosure,
  Image,
  keyframes,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import brandLogoSvg from "../assets/brandLogoSvg.svg";
import MobileNav from "../sections/MobileNav";
import DesktopNav from "../sections/DesktopNav";

const slideDown = keyframes`
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;
const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      position="fixed"
      top="0"
      width="100%"
      zIndex="1000"
      animation={`${slideDown} 0.5s ease-out`}
    >
      <Flex
        bg="black"
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 4, md: 5 }}
        px={{ base: 4 }}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant="solid"
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex
          flex={{ base: 1 }}
          justify={{ base: "center", md: "space-between" }}
          align="center"
          px={{ base: 4, md: 8 }}
        >
          <Flex align="center">
            <Image
              src={brandLogoSvg}
              alt="brandLogo"
              w={{ base: "20px", md: "20px" }}
              h="auto"
            />
            <Text color="#ffffff" fontWeight={700} fontSize={"22px"} ml={2}>
              Quest
            </Text>
          </Flex>

          <Flex
            display={{ base: "none", md: "flex" }}
            ml={10}
            justify="center"
            flex={1}
          >
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Button
            as={"a"}
            fontSize={"sm"}
            fontWeight={400}
            variant="outline"
            href={"#"}
            color="#ffffff"
            border={"1px solid #9035ff"}
            _hover={{
              bg: "pink.300",
            }}
          >
            Get Started
          </Button>
          <Button
            as={"a"}
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            bg={"pink.400"}
            href={"#"}
            bgGradient={"linear(to-r, #9035ff,#4299E1)"}
            _hover={{
              bg: "pink.300",
            }}
          >
            Book Demo
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
};

export default Navbar;
