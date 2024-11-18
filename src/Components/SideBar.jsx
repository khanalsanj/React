import React from "react";
import {
  Box,
  Flex,
  Text,
  VStack,
  Avatar,
  useColorModeValue,
  Divider,
} from "@chakra-ui/react";

import {
  BiSolidDashboard,
  BiSolidGroup,
  BiSolidBookmarks,
  BiSolidCog,
  BiSolidPaste,
} from "react-icons/bi";
import { MdHive, MdDiversity3 } from "react-icons/md";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const bgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.700", "gray.200");

  // Sidebar navigation items
  const navItems = [
    { label: "Dashboard", icon: BiSolidDashboard, path: "/" },
    { label: "Users", icon: BiSolidGroup, path: "/users" },
    { label: "Agencies", icon: MdHive, path: "/agencies" },
    { label: "Employers", icon: BiSolidBookmarks, path: "/employers" },
    { label: "Job Seekers", icon: MdDiversity3, path: "/jobseekers" },
    { label: "Job Posts", icon: BiSolidPaste, path: "/jobposts" },
    { label: "Settings", icon: BiSolidCog, path: "/settings" },
  ];

  return (
    <Box
      as="nav"
      pos="fixed"
      left="0"
      top="0"
      w="250px"
      h="100vh"
      bg={bgColor}
      boxShadow="md"
      p={5}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      {/* Top Section */}
      <VStack align="start" spacing={4}>
        {/* Logo */}
        <Box mb={8}>
          <Flex align="center" marginTop={-10}>
            <Avatar src="aspire.jpg" height={150} width={150} mr={3} />
          </Flex>
        </Box>

        {/* Admin Section */}
        <Flex align="center" mb={6} marginTop={-10}>
          <Avatar src="https://bit.ly/broken-link" size="md" />
          <Box ml={3}>
            <Text fontSize="md" fontWeight="bold">
              Admin
            </Text>
          </Box>
        </Flex>

        <Divider />

        {/* Navigation Links */}
        {navItems.map((item) => (
          <Link to={item.path} key={item.label} style={{ width: "100%" }}>
            <Flex
              align="center"
              py={3}
              px={4}
              borderRadius="md"
              _hover={{ bg: useColorModeValue("gray.100", "gray.700") }}
              cursor="pointer"
            >
              <item.icon size={15} />
              <Text ml={4} fontSize="sm" color={textColor}>
                {item.label}
              </Text>
            </Flex>
          </Link>
        ))}
      </VStack>
    </Box>
  );
};

export default Sidebar;
