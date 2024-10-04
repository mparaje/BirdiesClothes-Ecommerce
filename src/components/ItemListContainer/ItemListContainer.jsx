import styles from "./itemListContainer.module.css";
import { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { Loader } from "../Loader/Loader";
import { getProducts, getProductsByCategory } from "../../firebase/database";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true)
  const { category } = useParams();

  useEffect(() => {
    if(!category){
      getProducts(setItems);
      setLoading(false);
    }
    else{
      getProductsByCategory(category, setItems)
      setLoading(false);
    }
  }, [category]);

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
