import React from "react";
import {
  HStack,
  Box,
  IconButton,
  Text,
  Spacer,
  Avatar,
  useColorModeValue,
  Stat,
  StatLabel,
  StatNumber,
  Grid,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
// import styles from "./DashBoard.module.css";
const DashBoard = () => {
  return (
    <>
      <div className={`${styles["container"]}`}>
        <div>
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
              <Avatar
                className={`${styles["user-profile"]}`}
                src="https://bit.ly/broken-link"
                size="sm"
              />
            </HStack>
          </Box>
        </div>
        <div className="body-container1">
          <Box
            className={`${styles["box-1"]}`}
            bg={useColorModeValue("white", "gray.700")}
            p={6}
            borderRadius="lg"
            boxShadow="lg"
            display="flex"
            // flexDirection={{ base: "column", md: "row" }} // Responsive layout
            justifyContent="space-between"
            width="300%"
            height="250%"
            align="right"
          >
            <Grid gap="10" p="4" bg="white.400">
              {/* Total Job Seekers */}

              <Stat>
                <StatLabel>Total Job Seekers</StatLabel>
                <StatNumber fontSize="2xl" fontWeight="bold">
                  58
                </StatNumber>
              </Stat>

              {/* Total Agencies */}
              <Stat>
                <StatLabel>Total Agencies</StatLabel>
                <StatNumber fontSize="2xl" fontWeight="bold">
                  22
                </StatNumber>
              </Stat>
              {/* Total Employers */}
              <Stat>
                <StatLabel>Total Employers</StatLabel>
                <StatNumber fontSize="2xl" fontWeight="bold">
                  12
                </StatNumber>
              </Stat>
              {/* Total Job Post */}
              <Stat>
                <StatLabel>Total Job Posts</StatLabel>
                <StatNumber fontSize="2xl" fontWeight="bold">
                  12
                </StatNumber>
              </Stat>
            </Grid>

            <Box
              className={`${styles["box-2"]}`}
              bg={useColorModeValue("white", "gray.700")}
              p={6}
              borderRadius="lg"
              boxShadow="lg"
              display="flex"
              // flexDirection={{ base: "column", md: "row" }} // Responsive layout
              justifyContent="space-between"
              width="200px"
              height="200px"
            >
              <div className={`${styles["Avatar-container1"]}`}>
                <Avatar
                  className={`${styles["Image-1"]}`}
                  src="https://bit.ly/broken-link"
                  alt="User Avatar"
                />
                <Stat>
                  <StatNumber
                    className={`${styles["text-1"]}`}
                    fontSize="5xl"
                    fontWeight="bold"
                    align="center"
                  >
                    6
                  </StatNumber>
                  <StatLabel className={`${styles["text-2"]}`} fontSize="l">
                    Pending Agencies
                  </StatLabel>
                </Stat>
              </div>
            </Box>

            <Box
              className={`${styles["box-3"]}`}
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
              <div className={`${styles["Avatar-container2"]}`}>
                <Avatar
                  className={`${styles["Image-2"]}`}
                  src="https://bit.ly/broken-link"
                />
                <Stat>
                  <StatNumber
                    className={`${styles["text-1"]}`}
                    fontSize="5xl"
                    fontWeight="bold"
                    align="center"
                  >
                    1
                  </StatNumber>
                  <StatLabel className={`${styles["text-2"]}`} fontSize="l">
                    Pending Employers
                  </StatLabel>
                </Stat>
              </div>
            </Box>
          </Box>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
