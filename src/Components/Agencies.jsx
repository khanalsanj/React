import {
  Flex,
  HStack,
  IconButton,
  Spacer,
  Avatar,
  Heading,
  Button,
  Switch,
  Input,
  Box,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import React from "react";

const Agencies = () => {
  return (
    <>
      <Box bgColor="gray.100" h={"100vh"}>
        {/* Heading Bar */}
        <Flex
          color="black"
          bgColor="white"
          boxShadow="sm"
          p={1}
          marginBottom={5}
          justifyContent="space-between"
          flexDirection={"column"}
        >
          <HStack>
            {/* Hamburger Menu Icon  */}
            <IconButton
              icon={<HamburgerIcon />}
              color="Black"
              aria-label="Menu"
            />
            <Heading as="h1" fontSize="l" fontWeight="bold">
              Aspire HR Services
            </Heading>
            <Spacer />
            {/* Avatar (User profile) */}
            <Avatar src="users.PNG" size="sm" marginRight={3} />
          </HStack>
        </Flex>

        <HStack margin={5}>
          <Link fontSize="sm" href="./">
            Home{" "}
          </Link>
          <Link fontSize="sm" href="./Agencies">
            Agencies
          </Link>
        </HStack>

        {/* Agencies and Add agency button */}
        <Flex flexDirection={"row"} justifyContent="space-between" margin={4}>
          <Heading fontSize={"md"}>Agencies</Heading>

          <Button
            bgColor={"blue.700"}
            fontSize="sm"
            color={"white"}
            size={"sm"}
          >
            Add Agency
          </Button>
        </Flex>

        {/* For Name and Email input  */}
        <Box bgColor={"white"} margin={4} borderRadius="lg" boxShadow="md">
          <Flex>
            <Spacer />
            <Box margin={3}>
              <Input
                size="sm"
                type="name or email"
                placeholder="Name or Email"
              />
            </Box>
          </Flex>

          {/* Table  */}
          <TableContainer h={"50vh"}>
            <Table>
              <Thead>
                <Tr>
                  <Th>BUSINESS NAME</Th>
                  <Th>EMAIL</Th>
                  <Th>COUNTRY</Th>
                  <Th isNumeric>NO.OF USERS</Th>
                  <Th>WEBSITE</Th>
                  <Th>ADDED ON</Th>
                  <Th>STATUS</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Garage</Td>
                  <Td>trash@gmail.com</Td>
                  <Td>Nepal</Td>
                  <Td isNumeric>1</Td>
                  <Td>https://apexcharts.com</Td>
                  <Td>4 hr ago</Td>
                  <Td>
                    <Switch></Switch>
                  </Td>
                </Tr>

                <Tr>
                  <Td>App Discovery</Td>
                  <Td>Discoveryapp@gmail.com</Td>
                  <Td>Radhe Radhe</Td>
                  <Td isNumeric>10</Td>
                  <Td>https://appdiscovery.com</Td>
                  <Td>1 min ago</Td>
                  <Td>
                    <Switch></Switch>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </>
  );
};

export default Agencies;
