import styles from "./itemListContainer.module.css";
import { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { Loader } from "../Loader/Loader";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true)
  const { id } = useParams();

  useEffect(() => {
    if (!id) {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((res) => {
          setItems(res)
          setLoading(false);
        });
    }
    else{
        fetch(`https://fakestoreapi.com/products/category/${id}`)
        .then((res)=> res.json())
        .then((res) => {
          setItems(res)
          setLoading(false);
        })
    }
  }, [id]);

  return (
    <Container fluid className={styles.contenedorItemList}>
      <p className={styles.description}>
        Explora todos los articulos que tenemos disponibles para vos
      </p>
      {loading? <Loader /> : 
        <Row>
          <ItemList items={items} />
        </Row>
      }
    </Container>
  );
};
