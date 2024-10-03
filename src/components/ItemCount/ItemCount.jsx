/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./itemCount.module.css";


export const ItemCount = ({ stock, initial, onCountChange }) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) {
      setCount(prevCount => prevCount + 1);
      onCountChange(count + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(prevCount => prevCount - 1);
      onCountChange(count - 1);
    }
  };

  return (
    <div className={styles.btnContainerInDe}>
      <button onClick={decrement} disabled={count <= 1}>-</button>
      <p className={styles.quantity}>{count}</p>
      <button onClick={increment} disabled={count >= stock}>+</button>
    </div>
  );
};