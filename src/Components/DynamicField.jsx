import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Stack,
  Flex,
  Spacer,
} from "@chakra-ui/react";

import { useForm, useFieldArray } from "react-hook-form";
import "../App.css";

const DynamicField = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      users: [{ userName: "", quantity: "" }], // Default user fields
    },
  });

  // console.log(errors);

  const { fields, append, remove } = useFieldArray({
    control,
    name: "users", // Name of the field array
  });

  // console.log(useFieldArray);

  const onsubmit = (data) => {
    console.log(data); // Log the form data
    // reset(); // Reset the form after submission
  };

  return (
    <Box
      maxW="lg"
      mx="auto"
      mt={10}
      p={8}
      borderRadius="lg"
      boxShadow="lg"
      bg="white"
    >
      <form onSubmit={handleSubmit(onsubmit)}>
        <Stack spacing={3}>
          <Flex m={2} flexDirection="column" justifyContent={"space-between"}>
            {fields.map((field, index) => (
              <div key={field.id}>
                <FormControl id="user name" mb={4}>
                  <FormLabel>User Name</FormLabel>
                  <Input
                    {...register(`users.${index}.userName`, {
                      required: "User Name is required",
                    })}
                    type="text"
                    placeholder="User Name"
                  />
                  {errors.users?.[index]?.userName && (
                    <p style={{ color: "red" }}>
                      {`${errors.users?.[index]?.userName?.message}`}
                    </p>
                  )}
                </FormControl>

                <FormControl id="quantity" marginBottom={4}>
                  <FormLabel>Quantity</FormLabel>
                  <Input
                    {...register(`users.${index}.quantity`, {
                      required: "Quantity is required",
                    })}
                    type="text"
                    placeholder="Quantity"
                  />
                  {errors.users?.[index]?.quantity && (
                    <p style={{ color: "red" }}>
                      {`${errors.users?.[index]?.quantity?.message}`}
                    </p>
                  )}
                </FormControl>

                <button
                  className="deleted"
                  type="button"
                  onClick={() => remove(index)}
                >
                  Delete
                </button>
              </div>
            ))}
          </Flex>

          <button type="button" onClick={() => append({})}>
            Add User
          </button>

          <Button colorScheme="blue" type="submit" size="lg">
            login
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default DynamicField;
