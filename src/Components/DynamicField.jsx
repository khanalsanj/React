import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Stack,
  Flex,
} from "@chakra-ui/react";
import { useForm, useFieldArray, useWatch } from "react-hook-form";
import "../App.css";
import { useState, useEffect } from "react";

// const localStorage = (Quantity, quantity) => {
//   const [currentQuantity, setQuantity] = useState(() => {
//     let currentQuantity;

//     try {
//       currentQuantity = JSON.parse(
//         localStorage.getItem(Quantity) || String(quantity)
//       );
//     } catch (error) {
//       currentQuantity = quantity;
//     }

//     return currentQuantity;
//   });

//   useEffect(() => {
//     localStorage.setItem(Quantity, JSON.stringify(quantity));
//   }, [quantity, Quantity]);

//   return [quantity, setQuantity];
// };

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

  const quantity = useWatch({ control, name: "users.0.quantity" });
  console.log(quantity);

  // console.log(useFieldArray);

  const onsubmit = (data) => {
    console.log(data); // Log the form data
    // reset(); // Reset the form after submission
  };

  useEffect(() => {
    localStorage.setItem("quantity", JSON.stringify(quantity));
    console.log(localStorage);
  }, [quantity]);

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
          <Flex flexDirection="column" justifyContent={"space-between"}>
            {fields.map((field, index) => (
              <div key={field.id}>
                {/* For User Name */}
                <FormControl id="user name" mb={4}>
                  <FormLabel htmlFor="user name">User Name</FormLabel>
                  <Input
                    {...register(`users.${index}.userName`, {
                      required: "User Name is required",
                      minLength: {
                        value: 5,
                        message: "Must have at least five characters",
                      },
                    })}
                    type="text"
                    placeholder="User Name"
                  />
                  {/* Errors Alert */}
                  {errors.users?.[index]?.userName && (
                    <p role="alert" style={{ color: "red" }}>
                      {`${errors.users?.[index]?.userName?.message}`}
                    </p>
                  )}
                </FormControl>

                {/* For Quantity */}
                <FormControl id="quantity" marginBottom={4}>
                  <FormLabel htmlFor="quantity">Quantity</FormLabel>
                  <Input
                    {...register(`users.${index}.quantity`, {
                      required: "Quantity is required",
                      pattern: {
                        value: /^[0-9]+$/,
                        message: "Quantity must be a valid number",
                      },
                    })}
                    type="text"
                    placeholder="Quantity"
                  />
                  {/* Errors Alert */}
                  {errors.users?.[index]?.quantity && (
                    <p role="alert" style={{ color: "red" }}>
                      {`${errors.users?.[index]?.quantity?.message}`}
                    </p>
                  )}
                </FormControl>

                {/* Delete for user name & quantity */}
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

          {/* Add new user name & quantity*/}
          <button className="Add-user" type="button" onClick={() => append({})}>
            Add User
          </button>

          {/* Login button */}
          <Button colorScheme="blue" type="submit" size="lg">
            login
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default DynamicField;
