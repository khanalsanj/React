import React from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Heading,
  Spacer,
  Avatar,
  Link,
  Button,
  Input,
  Select,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Icon,
  InputLeftElement,
  InputGroup,
} from "@chakra-ui/react";
import { HamburgerIcon, SearchIcon } from "@chakra-ui/icons";
import { MdDelete, MdEditSquare } from "react-icons/md";

const Jobseekers = () => {
  return (
    <>
      <Box bgColor="gray.50" h={"100vh"}>
        {/* Heading Bar */}
        <Flex
          color="black"
          bgColor="white"
          boxShadow="sm"
          p={3}
          marginBottom={5}
          justifyContent="space-between"
          flexDirection={"column"}
        >
          <HStack>
            {/* Hamburger Menu Icon  */}
            <IconButton
              icon={<HamburgerIcon />}
              color="black"
              // aria-label="Menu"
            />
            <Heading as="h1" fontSize="l" fontWeight="bold">
              Aspire HR Services
            </Heading>
            <Spacer />
            {/* Avatar (User profile) */}
            <Avatar src="users.PNG" size="sm" marginRight={3} />
          </HStack>
        </Flex>

        {/* For Navigating */}
        <HStack marginLeft={5} gap={10} mb={5}>
          <Link fontFamily={"serif"} fontSize="lg" href="./">
            Home
          </Link>
          <Link fontFamily={"serif"} fontSize="lg" href="./JobSeekers">
            Job Seekers
          </Link>
        </HStack>

        {/* Job Seekers and Add Job  Seekers */}
        <Flex flexDirection={"row"} justifyContent="space-between" margin={4}>
          <Heading size={"lg"} fontFamily={"serif"}>
            Job Seekers
          </Heading>

          <Button
            bgColor={"blue.700"}
            fontSize="sm"
            color={"white"}
            size={"sm"}
          >
            Add Job Seekers
          </Button>
        </Flex>

        {/* For Name inputform with search icon  */}
        <Box bgColor={"white"} margin={4} borderRadius="lg" boxShadow="md">
          <Flex>
            <Spacer />
            <Box margin={3}>
              <InputGroup>
                <Input type="name " placeholder="Name " borderRadius={6} />
                <InputLeftElement pointerEvents="auto">
                  <SearchIcon color="gray.400" />
                </InputLeftElement>
              </InputGroup>
            </Box>
          </Flex>
          <Flex
            flexDirection={"row"}
            justifyContent={"space-between"}
            bgColor={"white"}
            gap={5}
            m={5}
            mb={10}
            boxSize={"xlg"}
            size={"xsm"}
          >
            <Select placeholder="Agency" bgColor={"gray.50"}>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
            <Select placeholder="Preferred Country" bgColor={"gray.50"}>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
            <Select placeholder="Industry" bgColor={"gray.50"}>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
            <Select placeholder="Nationality" bgColor={"gray.50"}>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
            <Select placeholder="Status" bgColor={"gray.50"}>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </Flex>

          {/* Table  */}
          <TableContainer h={"50vh"} m={2}>
            <Table fontSize={"m"}>
              <Thead>
                <Tr>
                  <Th fontSize={"m"}> NAME</Th>
                  <Th fontSize={"m"}>Age</Th>
                  <Th fontSize={"m"}>Nationality</Th>
                  <Th fontSize={"m"}>Preferred Industries</Th>
                  <Th fontSize={"m"}>PREFERRED COUNTRIES</Th>
                  <Th fontSize={"m"}> HIGHEST EDUCATION</Th>
                  <Th fontSize={"m"}>STATUS</Th>
                  <Th fontSize={"m"}>ADDED ON</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Abel</Td>
                  <Td>7</Td>
                  <Td>Nepali</Td>
                  <Td>Tech</Td>
                  <Td>USA</Td>
                  <Td>Illiterate</Td>
                  <Td>Incompleted</Td>
                  <Td>5 min ago</Td>
                  <Td>
                    <Icon fontSize={"20px"}>icon={<MdEditSquare />}</Icon>
                  </Td>
                  <Td>
                    <Icon fontSize={"20px"}>icon={<MdDelete />}</Icon>
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

export default Jobseekers;
