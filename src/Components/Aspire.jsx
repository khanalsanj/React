import React from "react";
import {
  Box,
  HStack,
  IconButton,
  Text,
  Grid,
  Spacer,
  Avatar,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
  GridItem,
  Flex,
  Center,
  Heading,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
//  import SideBar from "./SideBar";
import { LineChart, BarChart } from "./Charts";
const Aspire = () => {
  return (
    <>
      <Box bgColor="gray.100">
        <Box
          color="black"
          bgColor="gray.50"
          boxShadow="sm"
          p={1}
          as="nav"
          marginBottom={5}
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
            <Avatar src="users.PNG" size="sm" marginRight={3} />
          </HStack>
        </Box>

        {/* Summary Section */}

        <Grid templateColumns="repeat(4, 1fr)" gap={10} p={6} margin={1}>
          <GridItem colSpan={2}>
            <Flex
              bg={useColorModeValue("white", "gray.700")}
              p={6}
              borderRadius="lg"
              boxShadow="md"
              direction="column"
              justifyContent="center"
              alignItems={"Left"}
              width={"670px"}
              height={200}
            >
              {/* /* Total Job Seekers} */}
              <Grid templateColumns="repeat(2, 1fr)">
                <Stat gap={1} p={5}>
                  <StatLabel fontSize="sm">Total Job Seekers</StatLabel>
                  <StatNumber fontSize="xl" fontWeight="bold">
                    58
                  </StatNumber>
                </Stat>

                {/* Total Agencies */}
                <Stat gap={1} p={5}>
                  <StatLabel fontSize="sm">Total Agencies</StatLabel>
                  <StatNumber fontSize="xl" fontWeight="bold">
                    22
                  </StatNumber>
                </Stat>
                {/* Total Employers */}
                <Stat gap={1} p={5}>
                  <StatLabel fontSize="sm">Total Employers</StatLabel>
                  <StatNumber fontSize="xl" fontWeight="bold">
                    12
                  </StatNumber>
                </Stat>
                {/* Total Job Post */}
                <Stat gap={1} p={5}>
                  <StatLabel fontSize="sm">Total Job Posts</StatLabel>
                  <StatNumber fontSize="xl" fontWeight="bold">
                    12
                  </StatNumber>
                </Stat>
              </Grid>
            </Flex>
          </GridItem>

          {/* Second Content */}
          <GridItem colSpan={1}>
            <Flex
              bg={useColorModeValue("white", "gray.700")}
              p={6}
              borderRadius="lg"
              boxShadow="md"
              direction="column"
              justifyContent="center"
              alignItems={"center"}
              width={"330px"}
              height={200}
            >
              <Center>
                <Avatar src="agncies.PNG" paddingTop={3} />
              </Center>
              <Stat>
                <StatNumber
                  fontSize="4xl"
                  fontWeight="bold"
                  align="center"
                  paddingTop={4}
                >
                  6
                </StatNumber>
                <StatLabel
                  fontSize="l"
                  color="grey"
                  align="center"
                  fontFamily={"body"}
                  fontWeight={450}
                >
                  Pending Agencies
                </StatLabel>
              </Stat>
            </Flex>
          </GridItem>

          {/* Third Content */}
          <GridItem colSpan={1}>
            <Flex
              bg={useColorModeValue("white", "gray.700")}
              p={6}
              borderRadius="lg"
              boxShadow="md"
              direction="column"
              justifyContent="center"
              alignItems={"center"}
              width={"330px"}
              height={200}
              padding={4}
            >
              <Center>
                <Avatar src="employers.PNG" paddingTop={1} />
              </Center>
              <Stat>
                <StatNumber
                  fontSize="4xl"
                  fontWeight="bold"
                  align="center"
                  paddingTop={2}
                >
                  1
                </StatNumber>
                <StatLabel
                  fontSize="l"
                  color="grey"
                  align="center"
                  fontFamily={"body"}
                  fontWeight={450}
                >
                  Pending Employers
                </StatLabel>
              </Stat>
            </Flex>
          </GridItem>
        </Grid>

        {/* Job Seekers Flow */}
        <Box
          bg="white.400"
          color="black"
          bgColor={"white"}
          boxShadow="md"
          p={6}
          margin={7}
          height={150}
        >
          <Heading size="md" mb={4} fontSize={"md"}>
            Job Seekers Flow
          </Heading>
        </Box>

        {/* Bar Chart */}
        <Grid templateColumns="repeat(2, 1fr)" gap={10} p={6} margin={1}>
          <GridItem colSpan={1}>
            <Flex bg="white" p={6} shadow="md">
              <Grid templateColumns="repeat(1, 1fr)">
                <Heading size="md" mb={1} fontSize={"md"} height={150}>
                  Agenices
                </Heading>
              </Grid>
            </Flex>
          </GridItem>

          <GridItem colSpan={1}>
            <Flex bg="white" p={6} shadow="md">
              <Grid templateColumns="repeat(1, 1fr)">
                <Heading size="md" mb={1} fontSize={"md"} height={150}>
                  Employers
                </Heading>
              </Grid>
            </Flex>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
};

export default Aspire;
