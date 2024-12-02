import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import UserContext from "../context/User/UserContext";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { userName: "", password: "" },
  });

  const data = useContext(UserContext);

  const onsubmit = (data) => {
    console.log(data);
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
      <form onSubmit={handleSubmit(onsubmit)}>
        <FormControl>
          <FormLabel>User Name</FormLabel>
          <Input
            {...register("userName")}
            type="text"
            placeholder="User Name"
          ></Input>
        </FormControl>

        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            {...register(data.state.password)}
            type="password"
            placeholder="password"
          ></Input>
        </FormControl>

        <Button type="submit" bg={"blue.400"} marginTop={3}>
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default Login;
