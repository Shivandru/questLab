import {
  Box,
  useColorModeValue,
  Stack,
  PopoverTrigger,
  PopoverContent,
  Popover,
} from "@chakra-ui/react";
import DesktopSubNav from "./DesktopSubNav";
const NAV_ITEMS = [
  {
    label: "Playbook",
    href: "#",
  },
  {
    label: "Resources",
    children: [
      {
        label: "Docs",
        href: "#",
      },
      {
        label: "Newsletter",
        href: "#",
      },
      {
        label: "Join Quest Club",
        href: "#",
      },
      {
        label: "UI Components Figma",
        href: "#",
      },
    ],
  },
  {
    label: "Blogs",
    href: "#",
  },
];
const DesktopNav = () => {
  const linkColor = useColorModeValue("#ffffff", "#ffffff");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = "transparent";

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Box
                as="a"
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Box>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

export default DesktopNav;
