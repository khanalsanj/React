import React from "react";
import {
  Grid,
  GridItem,
  Box,
  HStack,
  IconButton,
  Spacer,
  Text,
  Avatar,
  Stat,
  StatNumber,
  StatLabel,
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
const Dash = () => {
  return (
    <Grid
      // templatecolumn="repeat(5 1fr)"
      bg="grey"
      gap={6}
      p={6}
      minHeight="100vh"
    >
      {/* Heading */}
      <GridItem>
        <Box
          bg="white.400"
          color="black"
          bgColor={"white"}
          borderBottom={"1px solid black"}
          p={1}
          as="nav"
        >
          <HStack>
            {/* Hamburger Menu Icon (for mobile) */}
            <IconButton
              icon={<HamburgerIcon />}
              color="Black"
              aria-label="Menu"
            />
            <Text fontSize="l" fontWeight="bold" mb={0}>
              Aspire HR Services
            </Text>
            <Spacer />
            {/* Avatar (User profile) */}
            <Avatar src="https://bit.ly/broken-link" size="sm" />
          </HStack>
        </Box>
      </GridItem>

      {/* Side Bar */}
      {/* <GridItem bg="gray.800" color="white" p={6} borderRadius="lg"></GridItem> */}

      {/* First Content */}

      <GridItem>
        <Grid bg="grey" gap={6} p={6} minHeight="100vh">
          {/* Total Job Seekers Card */}
          <Box
            bg="white"
            p={6}
            borderRadius="lg"
            boxShadow="md"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            width="400px"
            height="400px"
          >
            <Stat>
              <StatNumber fontSize="3xl" fontWeight="bold">
                58
              </StatNumber>
              <StatLabel>Total Job Seekers</StatLabel>
            </Stat>

            {/* Total Agencies */}

            <Stat>
              <StatNumber fontSize="3xl" fontWeight="bold">
                22
              </StatNumber>
              <StatLabel>Total Agencies</StatLabel>
            </Stat>
            {/* Total Employers */}

            <Stat>
              <StatNumber fontSize="3xl" fontWeight="bold">
                12
              </StatNumber>
              <StatLabel>Total Employers</StatLabel>
            </Stat>
            {/* Total Job Posts */}

            <Stat>
              <StatNumber fontSize="3xl" fontWeight="bold">
                25
              </StatNumber>
              <StatLabel>Total Job Posts</StatLabel>
            </Stat>
          </Box>
        </Grid>
      </GridItem>

      {/* Second Content */}
      <GridItem>
        <Grid bg="grey" gap={6} p={6} minHeight="100vh">
          <Box
            bg={useColorModeValue("white", "gray.700")}
            p={6}
            borderRadius="lg"
            boxShadow="lg"
            display="flex"
            flexDirection={{ base: "column", md: "row" }} // Responsive layout
            justifyContent="space-between"
            width="200px"
            height="200px"
          >
            <Avatar
              src="https://bit.ly/broken-link"
              alt="User Avatar"
              position="relative"
            />
            <Stat>
              <StatNumber fontSize="5xl" fontWeight="bold" align="center">
                6
              </StatNumber>
              <StatLabel fontSize="l">Pending Agencies</StatLabel>
            </Stat>
          </Box>
        </Grid>
      </GridItem>

      {/* Third Content */}
      <GridItem>
        <Grid bg="grey" gap={6} p={6} minHeight="100vh">
          <Box
            bg={useColorModeValue("white", "gray.700")}
            p={6}
            borderRadius="lg"
            boxShadow="lg"
            display="flex"
            flexDirection={{ base: "column", md: "row" }} // Responsive layout
            justifyContent="space-between"
            width="200px"
            height="200px"
          >
            <Avatar src="https://bit.ly/broken-link" />
            <Stat>
              <StatNumber fontSize="5xl" fontWeight="bold" align="center">
                1
              </StatNumber>
              <StatLabel fontSize="l">Pending Employers</StatLabel>
            </Stat>
          </Box>
        </Grid>
      </GridItem>
    </Grid>
  );
};

export default Dash;
