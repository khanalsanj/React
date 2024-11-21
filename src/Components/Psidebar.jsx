import React from "react";
import {
  Box,
  Flex,
  VStack,
  Avatar,
  Text,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";

const Psidebar = () => {
  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Skills", path: "/skills" },
    { label: "Experience", path: "/experience" },
    { label: "Education", path: "/education" },
    { label: "Contact", path: "/contact" },
  ];
  return (
    <Box
      as="aside"
      pos="fixed"
      w="270px"
      h="100vh"
      boxShadow="md"
      p={5}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <VStack align="start" spacing={4}>
        {/* Profile Image */}
        <Box mb={3}>
          <Flex align="center">
            <Avatar src="pic.jpg" height={200} width={200} />
          </Flex>
        </Box>

        {/* Name and Description */}
        <Box mx={5}>
          <Text fontSize="2xl" fontWeight="extrabold" fontStyle={"oblique"}>
            Sanjay Khanal
          </Text>
          <Text fontSize="md" fontWeight="normal" fontStyle={"oblique"}>
            Frontend Developer (React)
          </Text>
        </Box>

        {/* Navigation Links */}

        {navItems.map((item) => (
          <Link to={item.path} key={item.label}>
            <Flex
              py={2}
              px={5}
              _hover={{ bg: useColorModeValue("gray.100", "gray.700") }}
              cursor="pointer"
            >
              <Text ml={10} fontSize="md">
                {item.label}
              </Text>
            </Flex>
          </Link>
        ))}
      </VStack>
    </Box>
  );
};
export default Psidebar;
