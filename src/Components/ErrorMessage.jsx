const ErrorMessage = ({ items }) => {
  //let foodItems = ["Meat", "Milk", "Vegetables", "Fruits", "Butter"];
  // let foodItems = [];
  {
    /* Logical Operators */
  }
  return <>{items.length === 0 && <h3>Still Starving</h3>}</>;
};

export default ErrorMessage;
