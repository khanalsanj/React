import {
  Button,
  Input,
  FormControl,
  FormLabel,
  Stack,
  Box,
  Heading,
  useToast,
  Image,
  Center,
  Link,
} from "@chakra-ui/react";

const FormUi = () => {
  return (
    <Box
      maxW="md"
      mx="auto"
      mt={10}
      p={8}
      borderRadius="lg"
      boxShadow="lg"
      bg="white"
    >
      <Image
        margin="0 auto"
        boxSize="150px"
        src="aspire.jpg"
        alt="aspire-image"
      />
      <Heading as="h2" size="md" textAlign="center" mb={6}>
        Sign in your account
      </Heading>

      <Stack spacing={4}>
        <FormControl id="email">
          <FormLabel>Email adress</FormLabel>
          <Input type="email" placeholder="Email Address" />
        </FormControl>

        <FormControl id="password">
          <FormLabel>Password</FormLabel>
          <Input type="password" placeholder="Password" />
          <Link
            color="blue.500"
            fontSize="md"
            mt={2}
            display="block"
            textAlign="left"
          >
            Forgot Password?
          </Link>
        </FormControl>

        <Button colorScheme="blue" type="submit" size="lg">
          Login
        </Button>
        <span>Don't have an account? </span>
        <Link color="blue.500">Sign Up</Link>
      </Stack>
    </Box>
  );
};
export default FormUi;
