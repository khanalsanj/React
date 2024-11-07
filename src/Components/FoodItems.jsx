import Item from "./Item";

const FoodItems = ({ items }) => {
  // Array of foodItems
  // let foodItems = ["Meat", "Milk", "Vegetables", "Fruits", "Butter"];
  // let foodItems = [];
  return (
    <ul className="list-group">
      {/* Map Methods : convert the value into different forms*/}
      {/* The .map() method allows you to run a function on each item in the array, returning a new array as the result. */}
      {/* Rendering lists using Map Method */}
      {items.map((item) => (
        <Item key={item} foodItems={item}></Item>
      ))}
    </ul>
  );
};
export default FoodItems;
