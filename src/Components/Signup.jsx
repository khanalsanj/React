import {
  Box,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Button,
  Stack,
  Link,
  Flex,
  Checkbox,
  Select,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";

// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

const emailRules =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

const validationSchema = yup.object().shape({
  userName: yup.string().required("User Name is required"),
  email: yup
    .string()
    .required("Email is required.")
    .matches(emailRules, { message: "Email is not valid." }),

  password: yup
    .string()
    .required("Password is Required")
    .matches(passwordRules, { message: "Please create a stronger password" }),

  confirmPassword: yup
    .string()
    .required("Confirm Password is Required")
    .oneOf([yup.ref("password")], "Password must be match"),

  acceptTerms: yup.boolean().required("Must be accepted"),

  selectCountry: yup.string().required("Select the Country"),
});

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
    watch,
  } = useForm(
    { resolver: yupResolver(validationSchema) },
    {
      defaultValues: {
        userName: {},
        email: {},
        password: {},
        confirmPassword: {},
      },
    }
  );

  // const watchAllField = watch(["userName", "email", "password"]);
  const watchAcceptTerms = watch("acceptTerms");
  console.log(watchAcceptTerms);

  // const watchAllField = watch();

  let onsubmit = (data) => {
    console.log(data);
    reset();
  };

  const selectOptions = [
    {
      label: "Nepal",
      value: "nepal",
    },

    {
      label: "China",
      value: "china",
    },

    {
      label: "USA",
      value: "usa",
    },
  ];

  // useEffect(() => {
  //   const subscription = watch((value) => {
  //     console.log(value);
  //   });
  //   return () => subscription.unsubscribe();
  // });
  // [watch];

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
      <Heading as="h2" size="md" textAlign="center" mb={6}>
        Sign Up
      </Heading>

      <form onSubmit={handleSubmit(onsubmit)}>
        <Stack spacing={3}>
          <FormControl id="user name">
            <FormLabel>User Name</FormLabel>
            <Input
              {...register("userName")}
              type="text"
              placeholder="User Name"
            />
            {errors.userName && (
              <p style={{ color: "red" }}> {`${errors.userName.message}`} </p>
            )}
          </FormControl>

          <FormControl id="email">
            <FormLabel>Email adress</FormLabel>
            <Input
              {...register("email")}
              type="email"
              placeholder="Email Address"
            />
            {errors.email && (
              <p style={{ color: "red" }}> {`${errors.email.message}`} </p>
            )}
          </FormControl>

          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input
              {...register("password")}
              type="password"
              placeholder="Password"
            />
            {errors.password && (
              <p style={{ color: "red" }}> {`${errors.password.message}`}</p>
            )}
          </FormControl>

          <FormControl id="confirm password">
            <FormLabel>Confirm Password</FormLabel>
            <Input
              {...register("confirmPassword")}
              type="password"
              placeholder=" Confirm Password"
            />
            {errors.confirmPassword && (
              <p style={{ color: "red" }}>
                {`${errors.confirmPassword.message}`}
              </p>
            )}
          </FormControl>

          <FormLabel mb={0}>Country</FormLabel>

          <Controller
            name="selectCountry"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Select
                placeholder="Select Country"
                {...field}
                // options={selectOptions}
              >
                <option value="nepal">Nepal</option>
                <option value="china">China</option>
                <option value="usa">USA</option>
              </Select>
            )}
          />
          {errors.selectCountry && (
            <p style={{ color: "red" }}> {`${errors.selectCountry.message}`}</p>
          )}

          <Flex gap={3} mx={1} my={1}>
            <Controller
              name="acceptTerms"
              control={control}
              render={({ field }) => <Checkbox my={1} {...field} />}
            ></Controller>
            <p>Accept Terms and Condition</p>
            {errors.acceptTerms && (
              <p>You must accept the terms and conditions</p>
            )}
            {/* {errors.acceptTerms && (
              <p style={{ color: "red" }}> {`${errors.acceptTerms.message}`}</p>
            )} */}
          </Flex>

          {/* <FormControl id="acceptTerms">
            <FormLabel></FormLabel>
            <Checkbox
              mx={3}
              my={1}
              {...register("acceptTerms")}
              type="checkbox"
            />
            Accept Terms and Condition
            {errors.acceptTerms && (
              <p style={{ color: "red" }}> {`${errors.acceptTerms.message}`}</p>
            )}
          </FormControl> */}

          <Button
            colorScheme="blue"
            type="submit"
            disabled={!watchAcceptTerms}
            size="lg"
          >
            Login
          </Button>
          <Flex>
            Already have an acc? <Link color="blue.500">Login</Link>
          </Flex>
        </Stack>
      </form>
    </Box>
  );
};

export default Signup;
