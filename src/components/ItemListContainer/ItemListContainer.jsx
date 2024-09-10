import styles from "./itemListContainer.module.css";
import { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    if (!id) {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((res) => setItems(res));
    }
    else{
        fetch(`https://fakestoreapi.com/products/category/${id}`)
        .then((res)=> res.json())
        .then((res)=> setItems(res))
    }
  }, [id]);
  return (
    <Container fluid className={styles.contenedorItemList}>
      <p className={styles.description}>
        Explora todos los articulos que tenemos disponibles para vos
      </p>
      <Row>
        <ItemList items={items} />
      </Row>
    </Container>
  );
};
