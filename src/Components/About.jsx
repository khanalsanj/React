import { useContext, useEffect } from "react";
import TutorialContext from "../context/tutorial/TutorialContext";

const About = () => {
  const a = useContext(TutorialContext);

  useEffect(() => {
    a.update();
  }, []);

  return (
    <div>
      This is {a.state.firstName} {a.state.lastName} who loves to play
      {a.state.interest}
    </div>
  );
};

export default About;
