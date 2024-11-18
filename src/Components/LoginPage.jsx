import React, { useState } from "react";
import {
  Button,
  Input,
  FormControl,
  FormLabel,
  Stack,
  Box,
  Heading,
  useToast,
} from "@chakra-ui/react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast(); // Chakra UI Toast for notifications

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simple form validation
    if (!email || !password) {
      toast({
        title: "Validation Error",
        description: "Both fields are required.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Login Successful",
        description: "You have successfully logged in!",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      // Reset form
      setEmail("");
      setPassword("");
    }, 1500); // Simulate network delay
  };

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
      <Heading as="h2" size="lg" textAlign="center" mb={6}>
        Login
      </Heading>

      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          {/* Email Field */}
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </FormControl>

          {/* Password Field */}
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </FormControl>

          {/* Submit Button */}
          <Button
            colorScheme="blue"
            isLoading={isSubmitting} // Show loading spinner while submitting
            type="submit"
            size="lg"
          >
            Log In
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default LoginForm;
