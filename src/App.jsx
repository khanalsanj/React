// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import FoodItems from "./Components/FoodItems";
// import ErrorMessage from "./Components/ErrorMessage";
import * as React from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";
// import Button from "./Components/Button";
// import { Button } from "@chakra-ui/react";
// import LoginForm from "./Components/LoginPage";
// import FormUi from "./Components/FormUi";
// import DashBoard from "./Components/DashBoard";
import SideBar from "./Components/SideBar";
// import Dash from "./Components/Dash";
import Aspire from "./Components/Aspire";
// import Grid from "./Components/Grid";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Agencies from "./Components/Agencies";
import Jobseekers from "./Components/Jobseekers";

function App() {
  // Array of foodItems

  // let foodItems = [];

  // Conditional Rendering
  // Ternary operator
  // let errorMessage = foodItems.length === 0 ? <h3>Still Starving.</h3> : null;

  // if else: choose between two blocks of content
  // if (foodItems.length === 0) {
  //   return <h3>Still Starving</h3>;
  // }
  return (
    <>
      <ChakraProvider>
        {/* <TheRestOfYourApplication /> */}
        {/* <Button>clicked</Button> */}
        {/* <LoginForm /> */}
        {/* <FormUi></FormUi> */}
        {/* <DashBoard /> */}
        {/* <SideBar /> */}
        {/* <Grid></Grid> */}
        {/* <Dash></Dash> */}
        {/* <Aspire></Aspire> */}

        {/* <Router>
          <SideBar></SideBar>
          <Box ml="250px" p={6}>
            <Routes>
              <Route path="/" element={<div>Dashboard Content</div>} />
              <Route path="/users" element={<div>Users Content</div>} />
              <Route path="/agencies" element={<div>Agencies Content</div>} />
              <Route path="/employers" element={<div>Employers Content</div>} />
              <Route
                path="/jobseekers"
                element={<div>Job Seekers Content</div>}
              />
              <Route path="/jobposts" element={<div>Job Posts Content</div>} />
              <Route path="/settings" element={<div>Settings Content</div>} />
            </Routes>
          </Box>
        </Router> */}
        {/* <Agencies></Agencies> */}
        <Jobseekers></Jobseekers>
      </ChakraProvider>
      {/* <h1 className="heading">Healthy Foods</h1> */}
      {/* <FoodItems items={foodItems}></FoodItems> */}
      {/* <ErrorMessage items={foodItems}></ErrorMessage> */}
      {/* ternary operator: value call : errorMessage ignored the undefiend, null, empty, and gives <h3>Still Starving.</h3> */}
      {/* {errorMessage} */}
    </>
  );
}

export default App;
