import { useState } from "react";
import TutorialContext from "./TutorialContext";

const TutorialContextProvider = (props) => {
  const details = {
    firstName: "Gaby",
    lastName: "Khanal",
    interest: "Guitar",
  };
  const [state, setState] = useState(details);
  const update = () => {
    setTimeout(() => {
      setState({ firstName: "Samy", lastName: "Ralph", interest: "Soccer" });
    }, 1000);
  };
  return (
    <TutorialContext.Provider value={{ state, update }}>
      {props.children}
    </TutorialContext.Provider>
  );
};

export default TutorialContextProvider;
