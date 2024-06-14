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

// const DesktopNav = () => {
//   const linkColor = useColorModeValue("#ffffff", "#ffffff");
//   const linkHoverColor = useColorModeValue("gray.800", "white");
//   const popoverContentBgColor = "transparent";

//   return (
//     <Stack direction={"row"} spacing={4}>
//       {NAV_ITEMS.map((navItem) => (
//         <Box key={navItem.label}>
//           <Popover trigger={"hover"} placement={"bottom-start"}>
//             <PopoverTrigger>
//               <Box
//                 as="a"
//                 p={2}
//                 href={navItem.href ?? "#"}
//                 fontSize={"sm"}
//                 fontWeight={500}
//                 color={linkColor}
//                 _hover={{
//                   textDecoration: "none",
//                   color: linkHoverColor,
//                 }}
//               >
//                 {navItem.label}
//               </Box>
//             </PopoverTrigger>

//             {navItem.children && (
//               <PopoverContent
//                 border={0}
//                 boxShadow={"xl"}
//                 bg={popoverContentBgColor}
//                 p={4}
//                 rounded={"xl"}
//                 minW={"sm"}
//               >
//                 <Stack>
//                   {navItem.children.map((child) => (
//                     <DesktopSubNav key={child.label} {...child} />
//                   ))}
//                 </Stack>
//               </PopoverContent>
//             )}
//           </Popover>
//         </Box>
//       ))}
//     </Stack>
//   );
// };

// const DesktopSubNav = ({ label, href, subLabel }) => {
//   return (
//     <Box
//       as="a"
//       href={href}
//       role={"group"}
//       display={"block"}
//       p={2}
//       rounded={"md"}
//       _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
//     >
//       <Stack direction={"row"} align={"center"}>
//         <Box>
//           <Text
//             transition={"all .3s ease"}
//             _groupHover={{ color: "pink.400" }}
//             fontWeight={500}
//           >
//             {label}
//           </Text>
//           <Text fontSize={"sm"}>{subLabel}</Text>
//         </Box>
//         <Flex
//           transition={"all .3s ease"}
//           transform={"translateX(-10px)"}
//           opacity={0}
//           _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
//           justify={"flex-end"}
//           align={"center"}
//           flex={1}
//         >
//           <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
//         </Flex>
//       </Stack>
//     </Box>
//   );
// };

// const MobileNav = () => {
//   return (
//     <Stack
//       bg={useColorModeValue("white", "gray.800")}
//       p={4}
//       display={{ md: "none" }}
//     >
//       {NAV_ITEMS.map((navItem) => (
//         <MobileNavItem key={navItem.label} {...navItem} />
//       ))}
//     </Stack>
//   );
// };

// const MobileNavItem = ({ label, children, href }) => {
//   const { isOpen, onToggle } = useDisclosure();

//   return (
//     <Stack spacing={4} onClick={children && onToggle}>
//       <Box
//         py={2}
//         as="a"
//         href={href ?? "#"}
//         justifyContent="space-between"
//         alignItems="center"
//         _hover={{
//           textDecoration: "none",
//         }}
//       >
//         <Text
//           fontWeight={600}
//           color={useColorModeValue("gray.600", "gray.200")}
//         >
//           {label}
//         </Text>
//         {children && (
//           <Icon
//             as={ChevronDownIcon}
//             transition={"all .25s ease-in-out"}
//             transform={isOpen ? "rotate(180deg)" : ""}
//             w={6}
//             h={6}
//           />
//         )}
//       </Box>

//       <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
//         <Stack
//           mt={2}
//           pl={4}
//           borderLeft={1}
//           borderStyle={"solid"}
//           borderColor={useColorModeValue("gray.200", "gray.700")}
//           align={"start"}
//         >
//           {children &&
//             children?.map((child) => (
//               <Box as="a" key={child.label} py={2} href={child.href}>
//                 {child.label}
//               </Box>
//             ))}
//         </Stack>
//       </Collapse>
//     </Stack>
//   );
// };

export default Navbar;
