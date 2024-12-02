import { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const users = {
    userName: "USERNAME",
    password: "password",
  };

  const [state, setState] = useState(users);

  return (
    <UserContext.Provider value={{ state }}>{children}</UserContext.Provider>
  );
};

export default UserContextProvider;
