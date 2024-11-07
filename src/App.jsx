import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./Components/FoodItems";
import ErrorMessage from "./Components/ErrorMessage";

function App() {
  // Array of foodItems
  let foodItems = ["Meat", "Milk", "Vegetables", "Fruits", "Butter", "Lentils"];
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
      <h1 className="heading">Healthy Foods</h1>
      <FoodItems items={foodItems}></FoodItems>
      <ErrorMessage items={foodItems}></ErrorMessage>
      {/* ternary operator: value call : errorMessage ignored the undefiend, null, empty, and gives <h3>Still Starving.</h3> */}
      {/* {errorMessage} */}
    </>
  );
}

export default App;
