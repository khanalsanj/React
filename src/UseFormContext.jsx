import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Center,
  Flex,
} from "@chakra-ui/react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";

const UseFormContext = () => {
  const methods = useForm();
  const onSubmit = (data) => console.log(data); //<!--handle the Form Submission-->

  return (
    <FormProvider {...methods}>
      <Box
        maxW="lg"
        mx="auto"
        mt={10}
        p={8}
        borderRadius="lg"
        boxShadow="lg"
        bg="white"
      >
        {/*  pass all methods into the context */}
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <NestedInput />
        </form>
      </Box>
    </FormProvider>
  );
};

export default UseFormContext;

function NestedInput() {
  const { register } = useFormContext(); //retrieve all hook methods
  return (
    <>
      <FormControl>
        <FormLabel htmlFor="user name">User Name</FormLabel>
        <Flex gap={3}>
          <Input
            {...register("firstName")}
            type="text"
            placeholder="First Name"
          ></Input>

          <Input
            {...register("lastName")}
            type="text"
            placeholder="Last Name"
          ></Input>
        </Flex>
      </FormControl>

      <FormControl marginTop={5}>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input {...register("email")} type="text" placeholder="Email"></Input>
      </FormControl>

      <FormControl marginTop={5}>
        <FormLabel htmlFor="address">Address</FormLabel>
        <Input
          {...register("address")}
          type="text"
          placeholder="Address"
        ></Input>
      </FormControl>

      <FormControl marginTop={5}>
        <FormLabel htmlFor="contact">Contact</FormLabel>
        <Input
          {...register("contact")}
          type="number"
          placeholder="Contact"
        ></Input>
      </FormControl>

      <Center>
        <Button
          mt={2}
          size={"lg"}
          colorScheme={"blue"}
          variant="solid"
          height="50px"
          width="150px"
          border="2px"
          type="submit"
        >
          Enter
        </Button>
      </Center>
    </>
  );
}
