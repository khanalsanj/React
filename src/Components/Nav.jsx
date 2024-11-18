import { List, ListItem } from "@chakra-ui/react";
import React from "react";
import { Icon } from "@chakra-ui/react";
import { NavItem } from "./NavItem";
const items = [
  {
    type: "link",
    label: "Dashboard",
    Icon: "MdOutlineSpaceDashboard",
    Path: "/",
  },

  {
    type: "link",
    label: "Users",
    Icon: "",
    Path: "/",
  },

  {
    type: "link",
    label: "Agencies",
    Icon: "",
    Path: "/",
  },

  {
    type: "link",
    label: "Employers",
    Icon: "",
    Path: "/",
  },

  {
    type: "link",
    label: "Job Seekers",
    Icon: "",
    Path: "/",
  },

  {
    type: "link",
    label: "Job Posts",
    Icon: "MdOutlineSpaceDashboard",
    Path: "/",
  },

  {
    type: "link",
    label: "Settings",
    Icon: "MdOutlineSettingsInputComposite",
    Path: "/",
  },
];
const Nav = () => {
  return (
    <List>
      {items.map((item, index) => (
        <ListItem key={index}>
          <NavItem item={item} isActive={index === 0} collapse={collapse} />
        </ListItem>
      ))}
    </List>
  );
};

export default Nav;
