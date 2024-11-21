import {
  Button,
  Input,
  FormLabel,
  Stack,
  Box,
  Heading,
  Image,
  Link,
  FormControl,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  email: yup
    .string()
    .required("Email is required.")
    .matches(
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
      "Email is not valid."
    ),

  password: yup
    .string()
    .required("Password is required.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,50}$/,
      "Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character"
    ),
});

const FormUi = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const onsubmit = (data) => {
    console.log(data);
    reset();
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
      <Image
        margin="0 auto"
        boxSize="150px"
        src="aspire.jpg"
        alt="aspire-image"
      />
      <Heading as="h2" size="md" textAlign="center" mb={6}>
        Sign in your account
      </Heading>

      <form onSubmit={handleSubmit(onsubmit)}>
        <Stack spacing={2}>
          {/* Email */}
          <FormControl id="email">
            <FormLabel>Email adress</FormLabel>
            <Input
              {...register("email", {
                // pattern: {
                //   value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                //   message: "Invalid email address",
                // },
                // required: "Email is required",
              })}
              type="email"
              placeholder="Email Address"
            />
            {errors.email && (
              <p style={{ color: "red" }}> {`${errors.email.message}`} </p>
            )}
          </FormControl>

          {/* Password */}
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input
              {...register("password", {
                // pattern: {
                //   value: /^(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                //   message:
                //     "Password must be at least 8 characters long and include at least one number, one uppercase letter, and one lowercase letter.",
                // },
                // required: "Password is required",
              })}
              type="password"
              placeholder="Password"
            />
            {errors.password && (
              <p style={{ color: "red" }}> {`${errors.password.message}`}</p>
            )}
          </FormControl>

          {/* forget password */}
          <Link
            color="blue.500"
            fontSize="md"
            mt={2}
            display="block"
            textAlign="left"
          >
            Forgot Password?
          </Link>

          {/* for login */}
          <Button colorScheme="blue" type="submit" size="lg">
            Login
          </Button>
          <span>Don't have an account? </span>
          <Link color="blue.500">Sign Up</Link>
        </Stack>
      </form>
    </Box>
  );
};
export default FormUi;
