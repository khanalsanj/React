import styles from "./Item.module.css";
const Item = ({ foodItems }) => {
  return <li className={`${styles["food-items"]}`}>{foodItems}</li>;
};
export default Item;
