import { Stack, useColorModeValue } from "@chakra-ui/react";
import MobileNavItem from "./MobileNavItem";
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
const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS?.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};
export default MobileNav;
